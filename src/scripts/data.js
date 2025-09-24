export const SITE_DATA = {
    name: "Marcvs Pt",
    description: "Blog dedicado a compartir mi conocimiento en tecnología, redes y ciberseguridad a partir de mi experiencia laboral, laboratorios y proyectos personales como especialista en cibergseuridad.",
    url: "https://marcvspt.tech",
}

export const SITE_PAGES = {
    Home: {
        title: "Inicio",
        description: SITE_DATA.description,
        url: "/",
    },
    Blog: {
        title: "Blog",
        description: "Explora mis artículos y tutoriales sobre tecnología, ciberseguridad, redes y más.",
        url: "/blog",
    },
    About: {
        title: "Sobre mí",
        description: "Ingeniero en Ciberseguridad con 2 años de experiencia realizando actividades de inteligencia de amenazas, respuesta ante incidentes, seguridad perimetral y pentesting.",
        url: "/about",
    }
};

export const SOCIAL_DATA = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcopat01/",
    },
    {
        name: "GitHub",
        url: "https://github.com/marcvspt",
    },
    {
        name: "HackTheBox",
        url: "https://app.hackthebox.com/profile/935643",
    },
    {
        name: "X/Twitter",
        url: "https://x.com/marcvspt",
    },
    {
        name: "Contactame",
        url: "mailto:marcvspt@gmail.com",
    },
]

export const EXTERNAL_RESOURCES = [
    {
        name: "CyberChef",
        url: "https://gchq.github.io/CyberChef/",
    },
    {
        name: "HackTricks",
        url: "book.hacktricks.wiki/",
    },
    {
        name: "Payloads All The Things",
        url: "https://swisskyrepo.github.io/PayloadsAllTheThings/",
    },
    {
        name: "OWASP Top 10 2021 - Español",
        url: "https://owasp.org/Top10/es/",
    }
]


export const TECHNOLOGIES = [
    {
        name: "Firewall",
        percentaje: "65%",
    },
    {
        name: "WAF/SEG",
        percentaje: "30%",
    },
    {
        name: "Linux",
        percentaje: "60%",
    },
    {
        name: "Windows",
        percentaje: "20%",
    },
    {
        name: "Endpoint Security (AV/EDR/XDR)",
        percentaje: "30%",
    },
    {
        name: "Pentesting Web",
        percentaje: "40%",
    },
    {
        name: "SIEM",
        percentaje: "50%",
    },
    {
        name: "Wireshark/tcpdump",
        percentaje: "15%",
    },
    {
        name: "Forense",
        percentaje: "10%",
    },
    {
        name: "Bash",
        percentaje: "70%",
    },
    {
        name: "PowerShell",
        percentaje: "5%",
    },
]

export const PROFESIONAL_EXPERIENCE = {
    gobierno: {
        ocupation: "Coordinador de Ciberseguridad",
        description: "Administración de Firewalls de nueva generación. Configuración de VPN site-to-site y client-to-site. Monitoreo de sistemas EDR, XDR, SIEM, SEG y WAF. Investigación de eventos e incidentes de seguridad.",
        time: "Noviembre 2023 - Presente",
        company: "Orgazación gubernamental",
        link: "#",
    },
    rooms31: {
        ocupation: "Practicante de Ciberseguridad",
        description: "Proyecto de grado de ingeniería: Pentest a servicios web en modalidad de caja gris. Pruebas de seguridad a dos APIs y dos interfaces web. Determinación de severidad de vulnerabilidades y su explotabilidad.",
        time: "Enero 2023 - Abril 2023",
        company: "31 Rooms",
        link: "https://31rooms.com/",
    },
    conexionesTI: {
        ocupation: "Practicante de Redes",
        description: "Proyecto de grado de carrera técnica: Administración e instalación de enlaces inalámbricos mediante radiofrecuencias de un Proveedor de Servicios de Internet Inalámbrico. Administración de routers, access point, switches y antenas 5Ghz. Configuración enlaces inalámbricos punto-a-punto y punto-a-multipunto. Administración de redes LAN, WLAN y WAN.",
        time: "Mayo 2021 - Agosto 2021",
        company: "Conexiones TI",
        link: "https://www.conexionesti.com/",
    }
}

export const currentYear = new Date().getFullYear()