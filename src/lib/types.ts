export type Project = {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    alt?: string;
    aspectRatio?: string;
    tags?: string[];
};

export type HeadProps = {
    title: string;
    description: string;
}

export type PageProps = {
    head: HeadProps;
    projects?: Project[];
}