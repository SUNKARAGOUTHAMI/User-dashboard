import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ userToEdit, onUserAdded, onUserEdited, onUserDeleted, navigateToUserList }) => {
  const [name, setFirstName] = useState(userToEdit ? userToEdit.name.split(' ')[0] : '');
  const [email, setEmail] = useState(userToEdit ? userToEdit.email : '');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name: `${name} `,
      username: name.toLowerCase(), // Simple username generation
      email,
    };

    try {
      if (userToEdit) {
        // Edit existing user
        await axios.put(`https://jsonplaceholder.typicode.com/users/${userToEdit.id}`, newUser);
        onUserEdited();
      } else {
        // Add new user
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
        onUserAdded(response.data);
      }
      // Reset form and errors
      setFirstName('');
      setEmail('');
      setErrors({});
      navigateToUserList(); // Navigate back to user list after saving
    } catch (error) {
      console.error('Error:', error);
      setErrors({
        general: 'An error occurred while saving the user.',
      });
    }
  };

  const handleDelete = async () => {
    if (!userToEdit) return;
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userToEdit.id}`);
      onUserDeleted();
      navigateToUserList(); // Navigate back to user list after deleting
    } catch (error) {
      console.error('Error deleting user:', error);
      setErrors({
        general: 'An error occurred while deleting the user.',
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setErrors({}); // Clear previous errors

    if (name === 'email' && !isValidEmail(value)) {
      setErrors({ email: 'Invalid email address' });
    } else {
      switch (name) {
        case 'name':
          setFirstName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        default:
          break;
      }
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
        <button type="submit">{userToEdit ? 'Save Changes' : 'Add User'}</button>
        {userToEdit && (
          <button type="button" onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
            Delete User
          </button>
        )}
      </form>
    </>
  );
};

export default UserForm;
