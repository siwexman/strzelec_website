export type ImageFile = {
    base: File;
    src: string;
};

export type Image = {
    id: number;
    url: string;
    postId: number;
};

export type ImageWithDeleted = Image & { isDeleted?: boolean };
