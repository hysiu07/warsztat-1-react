import React, { Component } from 'react';
import UserList from './UsersList';
import './Users.css';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}
	addUser = (e) => {
		e.preventDefault();
		// console.log(this._inputName.value);

		let newUser = {
			name: this._inputName.value,
			id: Date.now(),
		};

		// console.log(newUser);
		this.setState((state) => {
			return {
				users: state.users.concat(newUser),
			};
		});
		this._inputName.value = '';
		console.log(this.state.users);
	};

	removeUser = (userID) => {
		
		this.setState((state) => {
			return {
				users: state.users.filter((user) => {
					return user.id !== userID;
				}),
			};
		});
	};

	render() {
		return (
			<div className='users-main'>
				<h1>User's List</h1>
				<form onSubmit={this.addUser}>
					<input
						ref={(element) => {
							this._inputName = element;
						}}
						type='text'
						placeholder='Enter name'
					/>
					<button type='submit'>Add user</button>
				</form>

				<UserList usersList={this.state.users} remove={this.removeUser} />
			</div>
		);
	}
}

export default Users;
