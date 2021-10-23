import React, {FC, useEffect } from 'react'
import { UserActions } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

const AlbumList: React.FC =()=> {
    const {error,limit,loading,page,albums} = useTypedSelector(state => state.album)
    const {fetchAlbums,fetchAlbumPage} = UserActions()
    const pages =  [1, 2, 3, 4, 5]
    useEffect(()=>{
        fetchAlbums(page, limit)
    },[page])
    if(loading){
        return <h1>...dowlod....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {albums.map(album =>
                <div key={album.id}>{album.id} - {album.title}</div>
                )}
                <div style={{display:'flex'}}>
                {pages.map(p=>
                    <div
                    onClick={() => fetchAlbumPage(p)}
                    style = {{border:p === page ? '5px solid silver' : '3px solid black', padding: 10}}
                    >
                        {p}
                    </div>
                    )}
                </div>
                
        </div>
    )
}

export default AlbumList