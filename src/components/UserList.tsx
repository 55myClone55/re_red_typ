import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'
import { fetchUsers } from '../store/action-creators/user'

const UserList: React.FC = ()=> {
    const {users,error,loading} = useTypedSelector(state => state.user)

    const {fetchUsers} = UserActions()
useEffect(() => {
    fetchUsers()
}, [])
if(loading){
    return <h1>...dowlod....</h1>
}
if(error){
    return <h1>{error}</h1>
}
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
                )}
        </div>
    )
}

export default UserList;


