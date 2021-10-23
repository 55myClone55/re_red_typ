import React from 'react';
import AlbumList from './components/AlbumList';
import TodoList from './components/TodoList';
import UserList from './components/UserList';



const  App = ()=> {
  return (
    <div >
      <UserList/>
      <hr />
      <TodoList/>
      <hr/>
      <AlbumList/>
    </div>
  );
}

export default App;
