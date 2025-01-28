import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    // Fetch initial user list from API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data.slice(0, 10)); // Limit to 10 users
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setIsAddingUser(false);
  };

  const handleEditUser = () => {
    setIsAddingUser(false);
    setUserToEdit(null);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const navigateToUserForm = (user = null) => {
    setUserToEdit(user);
    setIsAddingUser(true);
  };

  const navigateToUserList = () => {
    setIsAddingUser(false);
    setUserToEdit(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      {isAddingUser ? (
        <UserForm
          userToEdit={userToEdit}
          onUserAdded={handleAddUser}
          onUserEdited={handleEditUser}
          onUserDeleted={() => handleDeleteUser(userToEdit.id)}
          navigateToUserList={navigateToUserList}
        />
      ) : (
        <div>
          <button onClick={() => navigateToUserForm()} style={{ marginBottom: '20px' }}>Add User</button>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => navigateToUserForm(user)}
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      style={{ backgroundColor: 'red', color: 'white' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;

