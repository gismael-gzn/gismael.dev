// language selector component needs to know available langs
// we could invent those, but we better centralize all itl related settings and constants here
export const languageOptionsList = ['en', 'es'];

// navigation bar strings need to know these
const nav_en = {
    portfolio: 'Portfolio',
    confLang: 'Configure Language:',
}

const nav_es = {
    portfolio: 'Portafolio',
    confLang: 'Configurar Idioma:',
}

// footer translations
const year = new Date().getFullYear();
const footer_en = {
    rights: `© ${year} All rights reserved.`,
    disclaimer_js: 'This page was created and internationalized using ReactJS',
}

const footer_es = {
    rights: `© ${year} Todos los derechos reservados.`,
    disclaimer_js: 'Esta página fue creada y traducida utilizando ReactJS',
}

// translations for the portfolio page
const portfolio_en = {
    role: 'Backend Engineer'
}

const portfolio_es = {
    role: 'Ingeniero Backend'
}

// card component translations

const project_card_en = {
    site: 'Site', 
    techstack: 'Tech Stack', 
    status: 'Status',

    status_dev: 'In active development',
    status_man: 'In Mantainance',
    status_arc: 'Not active',
}

const project_card_es = {
    site: 'Sitio', 
    techstack: 'Tecnologías', 
    status: 'Estado',

    status_dev: 'En desarrollo activo',
    status_man: 'En Mantenimiento',
    status_arc: 'No activo',
}

// gallery component translations
const gallery_en = {
    show: 'Show gallery',
    hide: 'Hide gallery'
}

// gallery component translations
const gallery_es = {
    show: 'Mostrar galería',
    hide: 'Ocultar galería'
}

export const Strings_en = {
    nav: nav_en,
    footer: footer_en,
    page_portfolio: portfolio_en,
    project_card: project_card_en,
    gallery: gallery_en,
}

export const Strings_es = {
    nav: nav_es,
    footer: footer_es,
    page_portfolio: portfolio_es,
    project_card: project_card_es,
    gallery: gallery_es,
}
