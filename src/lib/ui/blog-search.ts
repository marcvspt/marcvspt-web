import { SITE_LOCALE } from '@/lib/site.ts';
import { TEXTS_GENERAL } from '@/lib/texts.ts';
export type SortOrder = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc' | 'readtime-asc' | 'readtime-desc';
type View = 'grid' | 'list';
interface SearchState {
    category: string | null;
    search: string;
    sort: SortOrder;
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

const sortOrders: readonly SortOrder[] = ['date-desc', 'date-asc', 'title-asc', 'title-desc', 'readtime-asc', 'readtime-desc'];
function isSortOrder(value: string): value is SortOrder {
    return sortOrders.some((order) => order === value);
}
const state: SearchState = { category: null, search: '', sort: 'date-desc', view: 'grid' };
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
        searchText: `${element.dataset.title ?? ''} ${element.dataset.tags ?? ''}`.toLocaleLowerCase(SITE_LOCALE.sort),
        date: Number(element.dataset.date) || 0,
        readTime: Number(element.dataset.readtime) || 0,
    }));
    if (!filters.some((button) => button.getAttribute('data-category') === state.category)) state.category = null;
    input.value = state.search;
    sort.value = state.sort;

    function updateFilters() {
        filters.forEach((button) => {
            const active = button.getAttribute('data-category') === state.category;
            button.setAttribute('aria-pressed', String(active));
        });
    }

    function updateView() {
        if (!container || !grid || !list) return;
        const isGrid = state.view === 'grid';
        container.classList.toggle('grid', isGrid);
        container.classList.toggle('grid-cols-1', isGrid);
        container.classList.toggle('md:grid-cols-2', isGrid);
        container.classList.toggle('lg:grid-cols-3', isGrid);
        container.classList.toggle('gap-8', isGrid);
        container.classList.toggle('space-y-6', !isGrid);
        container.dataset.view = state.view;
        grid.setAttribute('aria-pressed', String(isGrid));
        list.setAttribute('aria-pressed', String(!isGrid));
    }

    function render({ reorder = false, announce = false } = {}) {
        if (!container || !noResults || !status) return;
        if (reorder) {
            posts.sort((a, b) => {
                switch (state.sort) {
                    case 'date-asc': return a.date - b.date;
                    case 'date-desc': return b.date - a.date;
                    case 'title-asc': return a.title.localeCompare(b.title, SITE_LOCALE.sort);
                    case 'title-desc': return b.title.localeCompare(a.title, SITE_LOCALE.sort);
                    case 'readtime-asc': return a.readTime - b.readTime;
                    case 'readtime-desc': return b.readTime - a.readTime;
                }
            });
            const fragment = document.createDocumentFragment();
            posts.forEach((post) => fragment.append(post.element));
            container.append(fragment);
        }
        const query = state.search.trim().toLocaleLowerCase(SITE_LOCALE.sort);
        let visible = 0;
        posts.forEach((post) => {
            const matches = (state.category === null || state.category === post.category) && post.searchText.includes(query);
            post.element.hidden = !matches;
            if (matches) visible++;
        });
        noResults.classList.toggle('hidden', visible > 0);
        container.classList.toggle('hidden', visible === 0);
        if (announce) {
            const message = visible === 0 ? TEXTS_GENERAL.blog.empty.title : TEXTS_GENERAL.blog.search.resultCount(visible);
            if (status.textContent !== message) status.textContent = message;
        }
    }

    input.addEventListener('input', () => { state.search = input.value; render({ announce: true }); }, { signal });
    sort.addEventListener('change', () => {
        const value = sort.value;
        if (isSortOrder(value)) {
            state.sort = value;
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
