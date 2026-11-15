import { SITE_LOCALE } from '@/lib/site.ts';
import { TEXTS_GENERAL } from '@/lib/texts.ts';
import { BLOG_SORT_OPTIONS, type BlogSortOption } from '@/lib/blog/sort.ts';

type View = 'grid' | 'list';
interface SearchState {
    category: string | null;
    search: string;
    sort: BlogSortOption;
    view: View;
}
interface SearchPost {
    element: HTMLElement;
    category: string;
    title: string;
    searchText: string;
    date: number;
    readTime: number;
}

function normalizeSearch(value: string): string {
    return value.toLocaleLowerCase(SITE_LOCALE.sort).normalize('NFD')
        .replace(/n\u0303|\p{M}/gu, (mark) => mark === 'n\u0303' ? 'ñ' : '')
        .trim();
}
const state: SearchState = { category: null, search: '', sort: BLOG_SORT_OPTIONS[0], view: 'grid' };
let controller: AbortController | undefined;

function initializeSearch() {
    controller?.abort();
    const input = document.querySelector<HTMLInputElement>('#searchInput');
    const container = document.querySelector<HTMLElement>('#postsContainer');
    const sort = document.querySelector<HTMLSelectElement>('#sortSelect');
    const noResults = document.querySelector<HTMLElement>('#noResults');
    const status = document.querySelector<HTMLElement>('#searchStatus');
    const grid = document.querySelector<HTMLButtonElement>('#gridView');
    const list = document.querySelector<HTMLButtonElement>('#listView');
    if (!input || !container || !sort || !noResults || !status || !grid || !list) return;

    controller = new AbortController();
    const { signal } = controller;
    const filters = Array.from(document.querySelectorAll<HTMLButtonElement>('.category-filter'));
    const posts: SearchPost[] = Array.from(container.querySelectorAll<HTMLElement>('.post-card')).map((element) => ({
        element,
        category: element.dataset.category ?? '',
        title: element.dataset.title ?? '',
        searchText: normalizeSearch([
            element.dataset.title, element.dataset.description, element.dataset.category, element.dataset.tags,
        ].join(' ')),
        date: Number(element.dataset.date) || 0,
        readTime: Number(element.dataset.readtime) || 0,
    }));
    if (!filters.some((button) => button.getAttribute('data-category') === state.category)) state.category = null;
    input.value = state.search;
    sort.value = state.sort.value;

    function updateFilters() {
        filters.forEach((button) => {
            const active = button.getAttribute('data-category') === state.category;
            button.setAttribute('aria-pressed', String(active));
        });
    }

    function updateView() {
        if (!container || !grid || !list) return;
        const isGrid = state.view === 'grid';
        container.dataset.view = state.view;
        grid.setAttribute('aria-pressed', String(isGrid));
        list.setAttribute('aria-pressed', String(!isGrid));
    }

    function render({ reorder = false, announce = false } = {}) {
        if (!container || !noResults || !status) return;
        if (reorder) {
            posts.sort(state.sort.compare);
            const fragment = document.createDocumentFragment();
            posts.forEach((post) => fragment.append(post.element));
            container.append(fragment);
        }
        const query = normalizeSearch(state.search);
        let visible = 0;
        posts.forEach((post) => {
            const matches = (state.category === null || state.category === post.category) && post.searchText.includes(query);
            post.element.hidden = !matches;
            if (matches) visible++;
        });
        noResults.hidden = visible > 0;
        container.hidden = visible === 0;
        if (announce) {
            const message = visible === 0 ? TEXTS_GENERAL.blog.empty.title : TEXTS_GENERAL.blog.search.resultCount(visible);
            if (status.textContent !== message) status.textContent = message;
        }
    }

    input.addEventListener('input', () => { state.search = input.value; render({ announce: true }); }, { signal });
    sort.addEventListener('change', () => {
        const option = BLOG_SORT_OPTIONS.find(({ value }) => value === sort.value);
        if (option) {
            state.sort = option;
            render({ reorder: true });
        }
    }, { signal });
    filters.forEach((button) => button.addEventListener('click', () => {
        state.category = button.getAttribute('data-category');
        updateFilters();
        render({ announce: true });
    }, { signal }));
    grid.addEventListener('click', () => { state.view = 'grid'; updateView(); }, { signal });
    list.addEventListener('click', () => { state.view = 'list'; updateView(); }, { signal });
    updateFilters();
    updateView();
    render({ reorder: true });
}

document.addEventListener('astro:page-load', initializeSearch);
document.addEventListener('astro:before-swap', () => controller?.abort());
