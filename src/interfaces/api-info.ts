// Interfaz para la sección
export interface Section {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
}

// Interfaz para el autor
export interface Author {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

// Interfaz para el artículo
export interface Article {
    id: number;
    title: string;
    image: string;
    content: string;
    section_id: number;
    author_id: number;
    published_date: string;
    created_at: string;
    updated_at: string;
    section: Section;
    author: Author;
}

export interface ErrorServer {
    code: number,
    message: string,
}

