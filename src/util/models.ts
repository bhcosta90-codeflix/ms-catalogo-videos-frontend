export interface ListResponse<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    },
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}

interface Timestampable {
    readonly created_at: string;
    readonly deleted_at: string | null;
    readonly updated_at: string;
}

export interface Category extends Timestampable {
    readonly id: string;
    name: string;
    description: string;
    is_active: boolean;
}

export interface CastMember extends Timestampable {
    readonly id: string;
    name: string;
    type: number;
}

export const CastMemberTypeMap = {
    1: 'Diretor',
    2: 'Ator'
};

export interface Genre extends Timestampable {
    readonly id: string;
    name: string;
    is_active: number;
    categories: Category[];
}

interface GenreVideo extends Omit<Genre, 'categories'> {

}

export const VideoFileFieldsMap = {
    'file_thumb': 'Thumbnail',
    'file_banner': 'Banner',
    'file_trailer': 'Trailer',
    'file_video': 'Principal',
};

export interface Video extends Timestampable{
    readonly id: string;
    title: string;
    description: string;
    year_launched: number;
    opened: boolean;
    rating: string;
    duration: number;
    genres: GenreVideo[];
    categories: Category[];
    cast_members: CastMember[];
    file_thumb_url: string;
    file_banner_url: string;
    file_trailer_url: string;
    file_video_url: string;
}
