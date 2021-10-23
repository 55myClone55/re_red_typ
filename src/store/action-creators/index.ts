
import * as TodoActionCreators from './todo'
import * as UserActionCreators from './user'
import * as AlbumActionCreators from './album'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AlbumActionCreators
    
}