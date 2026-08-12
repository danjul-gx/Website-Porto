export * from "./project";
export * from "./certificate";
export * from "./experience";
export * from "./skill";
export * from "./site";
export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    images?: string[];

    tags: string[];
    technologies: {
        name: string;
    }[];

    links: {
        github?: string;
        live?: string;
        demo?: string;
        game?: string;
        website?: string;
    };

    // tambah ini
    buttons?: {
        label: string;
        url: string;
    }[];

    status: "completed" | "in-progress" | "archived";
    order: number;
}