import { AlbumAction } from '../../types/album';
import { UserActions } from "../../hook/useAction"
import { AlbumState,AlbumActionTypes} from "../../types/album"

const initialState: AlbumState = {
    albums: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const albumReducer = (state = initialState, action:AlbumAction):AlbumState => {
switch(action.type){
    case AlbumActionTypes.FETCH_ALBUMS:
        return {...state, loading:true}
        case AlbumActionTypes.FETCH_ALBUMS_SUCCESS:
        return {...state, loading:false, albums: action.payload}
        case AlbumActionTypes.FETCH_ALBUMS_ERROR:
        return {...state, loading:false, error: action.payload}
        case AlbumActionTypes.FETCH_ALBUM_PAGE:
        return {...state, page: action.payload}

    default:
        return state
}
}