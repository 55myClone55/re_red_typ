

export interface AlbumState {
    albums: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}
export enum AlbumActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
    FETCH_ALBUM_PAGE = 'FETCH_ALBUM_PAGE',
    
}
interface FetchAlbumAction {
    type:AlbumActionTypes.FETCH_ALBUMS
}
interface FetchAlbumErrorAction {
    type:AlbumActionTypes.FETCH_ALBUMS_ERROR;
    payload: string
}
interface FetchAlbumSuccessAction {
    type:AlbumActionTypes.FETCH_ALBUMS_SUCCESS;
    payload: any[]
}
interface FetchAlbumPageAction {
    type:AlbumActionTypes.FETCH_ALBUM_PAGE;
    payload: number;
}

    export type AlbumAction = FetchAlbumAction | FetchAlbumErrorAction | FetchAlbumSuccessAction | FetchAlbumPageAction