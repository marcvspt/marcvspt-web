// Textos del sitio en español. El contenido y frontmatter del Markdown quedan fuera.
// Las URL, identificadores y valores técnicos permanecen en sus módulos de datos.
export const TEXTS_GENERAL = {
    "site": {
        "pageTitle": (name: string, title: string) => `${name} | ${title}`,
        "name": "Marcvs Pt",
        "description": "Blog dedicado a compartir mi conocimiento en tecnología, redes y ciberseguridad a partir de mi experiencia laboral, laboratorios y proyectos personales como especialista en cibergseuridad."
    },
    "pages": {
        "Home": {
            "title": "Inicio"
        },
        "Blog": {
            "title": "Blog",
            "description": "Explora mis artículos y tutoriales sobre tecnología, ciberseguridad, redes y más."
        },
        "About": {
            "title": "Sobre mí",
            "description": "Ingeniero en Ciberseguridad con 3 años de experiencia realizando actividades de inteligencia de amenazas, respuesta ante incidentes, seguridad perimetral y pentesting."
        }
    },
    "social": {
        "linkedin": {
            "name": "LinkedIn"
        },
        "github": {
            "name": "GitHub"
        },
        "hackthebox": {
            "name": "HackTheBox"
        },
        "twitter": {
            "name": "X/Twitter"
        },
        "contact": {
            "name": "Contactame"
        }
    },
    "resources": {
        "cyberEvents": {
            "name": "CyberEvents MX"
        },
        "cyberThreat": {
            "name": "CyberThreat AI (CTAI)"
        },
        "oprp": {
            "name": "Open Personal Resource Planning (OPRP)"
        },
        "hackTricks": {
            "name": "HackTricks"
        }
    },
    "skills": {
        "firewall": {
            "name": "Firewall"
        },
        "wafSeg": {
            "name": "WAF/SEG"
        },
        "linux": {
            "name": "Linux"
        },
        "windows": {
            "name": "Windows"
        },
        "endpoint": {
            "name": "Endpoint Security (AV/EDR/XDR)"
        },
        "pentesting": {
            "name": "Pentesting Web"
        },
        "siem": {
            "name": "SIEM"
        },
        "wireshark": {
            "name": "Wireshark/tcpdump"
        },
        "forensics": {
            "name": "Forense"
        },
        "bash": {
            "name": "Bash"
        },
        "powershell": {
            "name": "PowerShell"
        }
    },
    "experience": {
        "gobierno": {
            "ocupation": "Lider de Ciberseguridad",
            "description": "Administración de Firewalls de nueva generación. Configuración de VPN site-to-site y client-to-site. Monitoreo de sistemas EDR, XDR, SIEM, SEG y WAF. Investigación de eventos e incidentes de seguridad. Supervisión de proyectos de ciberseguridad e implementación de controles de seguridad.",
            "time": "Noviembre 2023 - Presente",
            "company": "Orgazación gubernamental"
        },
        "rooms31": {
            "ocupation": "Practicante de Ciberseguridad",
            "description": "Proyecto de grado de ingeniería: Pentest a servicios web en modalidad de caja gris. Pruebas de seguridad a dos APIs y dos interfaces web. Determinación de severidad de vulnerabilidades y su explotabilidad.",
            "time": "Enero 2023 - Abril 2023",
            "company": "31 Rooms"
        },
        "conexionesTI": {
            "ocupation": "Practicante de Redes",
            "description": "Proyecto de grado de carrera técnica: Administración e instalación de enlaces inalámbricos mediante radiofrecuencias de un Proveedor de Servicios de Internet Inalámbrico. Administración de routers, access point, switches y antenas 5Ghz. Configuración enlaces inalámbricos punto-a-punto y punto-a-multipunto. Administración de redes LAN, WLAN y WAN.",
            "time": "Mayo 2021 - Agosto 2021",
            "company": "Conexiones TI"
        }
    },
    "home": {
        "description": "Explorando ideas, compartiendo conocimiento y creando conexiones a través de experiencias e investigaciones.",
        "explore": "Explorar Posts",
        "welcome": "Bienvenido a",
        "title": "Mi Blog",
        "posts": {
            "description": "Artículos sobre Ciberseguridad, Linux, Windows, Redes y más",
            "featuredDescription": "Los artículos más importantes y populares del blog",
            "viewAll": "Ver Todos los Artículos",
            "featured": "Artículos Destacados",
            "recent": "Artículos Recientes"
        }
    },
    "header": {
        "menu": "Menú de navegación",
        "cyberThreat": "CyberThreat AI",
        "cyberEvents": "CyberEvents MX"
    },
    "footer": {
        "licenseIntro": "Este proyecto está licenciado bajo los términos de la",
        "licenseName": "GNU General Public License v3.0",
        "resources": "Recursos Externos",
        "quickLinks": "Enlaces Rápidos"
    },
    "post": {
        "featured": "Destacado",
        "readMore": "Leer más",
        "share": "Compartir este artículo",
        "back": "Volver al Blog",
        "copyLink": "Copiar enlace",
        "updated": "Actualizado:",
        "published": "Publicado:",
        "copied": "¡Copiado!",
        "readMoreLabel": (title: string) => `Leer más: ${title}`,
        "pageTitle": (title: string) => `Blog - ${title}`
    },
    "blog": {
        "description": "Artículos sobre desarrollo web, tecnología y las últimas tendencias en programación",
        "empty": {
            "description": "Intenta con otros términos de búsqueda o categorías",
            "title": "No se encontraron artículos"
        },
        "search": {
            "placeholder": "Buscar artículos...",
            "label": "Buscar artículos"
        },
        "view": {
            "grid": "Vista en cuadrícula",
            "list": "Vista en lista",
            "label": "Vista:"
        },
        "allArticles": "Todos los Artículos",
        "sort": {
            "accessibleLabel": "Ordenar artículos",
            "shortest": "Lectura rápida",
            "newest": "Más recientes",
            "longest": "Lectura larga",
            "label": "Ordenar por:",
            "oldest": "Más antiguos",
            "titleAscending": "Título A-Z",
            "titleDescending": "Título Z-A"
        },
        "stats": {
            "averageMinutes": "Min promedio",
            "categories": "Categorías",
            "articles": "Artículos"
        },
        "all": "Todos",
        "title": "Blog"
    },
    "about": {
        "story": {
            "introduction": "¡Hola! Soy Marco, especialista en ciberseguridad. Actualmente coordino la ciberseguridad de los servicios digitales de un organismo gubernamental. Mi trabajo abarca desde la identificación hasta la mitigación de riesgos de seguridad informática a través de pruebas de penetración, hardenizado de servidores y dispositivos de red, implementación de medidas de seguridad, respuesta ante incidentes y concientización con el objetivo de proteger los activos de información.",
            "blog": "Este blog nació de mi deseo de compartir mi conocimiento y ayudar a otros profesionales y estudiantes en su en sus actividades diarias en temas de tecnologia y ciberseguridad. Aquí encontrarás tutoriales, tips, y descubrimientos sobre ciberseguridad.",
            "specialization": "Especializado en pentesting web, sin embargo, mis conocimientos y habilidades se extienden en temas de seguridad perimetral con Firewalls de red, host, web y de correos así como la inteligencia de amenazas.",
            "title": "Mi historia"
        },
        "hobbies": {
            "coffee": {
                "description": "Me encanta visitar cafeterías locales, para disfrutar de un buen café y de la comida que preparan mientras convivo con mis amigos o escucho un podcast.",
                "title": "Cafeterias"
            },
            "games": {
                "description": "Me gusta desconectar jugando videojuegos, especialmente Shooters y juegos tipo Sandbox y aventura ya sea con mis amigos o por mi cuenta.",
                "title": "Videojuegos"
            },
            "title": "Cuando No Estoy Trabajando"
        },
        "intro": {
            "after": "realizando actividades de inteligencia de amenazas, respuesta ante incidentes, seguridad perimetral y pentesting",
            "before": "Especialista en Ciberseguridad con",
            "highlight": "3 años de experiencia"
        },
        "experience": {
            "description": "Lugares donde he trabajado y los puestos que he tenido a lo largo de mi carrera en redes y ciberseguridad.",
            "title": "Experiencia profesional"
        },
        "philosophy": {
            "quote": "\"Si sólo haces lo que sabes hacer, no serás más de lo que eres.\"",
            "title": "Mi filosofía"
        },
        "avatarAlt": "Logo de la página, mi avatar",
        "skillsTitle": "Habilidades y Conocimientos"
    },
    "locale": {
        "language": "es",
        "format": "es-MX",
        "rss": "es-mx"
    },
    "errors": {
        "canonicalSite": "Define site en astro.config.mjs para generar las URL canónicas.",
        "rssSite": "Define site en astro.config.mjs para generar el RSS.",
        "clipboard": "Error copying to clipboard:"
    }
} as const;
