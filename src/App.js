import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, updateUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    updateUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
