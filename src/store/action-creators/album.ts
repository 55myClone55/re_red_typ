import axios from "axios"
import { Dispatch } from "redux"
import { AlbumAction, AlbumActionTypes } from "../../types/album"
import { UserAction, UserActionTypes } from "../../types/user"



export const fetchAlbums = (page = 1 ,limit = 10) =>{
    return async (dispatch: Dispatch<AlbumAction>)=> {
        try{
dispatch({type: AlbumActionTypes.FETCH_ALBUMS})
const response = await axios.get('https://jsonplaceholder.typicode.com/albums',{
    params: {_page: page, _limit: limit}
})
setTimeout(()=>{
    dispatch({type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS, payload: response.data})
},500)

        }catch (e){
            dispatch({
            type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
            payload: ".......WWWWWWWWWWerrrrrrrrrrrrrorWWWWWWW.........."
        })
        }
    }
}

export function fetchAlbumPage(page: number): AlbumAction {
    return {type: AlbumActionTypes.FETCH_ALBUM_PAGE, payload: page}
}