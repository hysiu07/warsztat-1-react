import React from 'react';
import './UserList.css';

function UserList(props) {
	let usersList = props.usersList;
	let usersElements = usersList.map((user) => {
		return (
			<li key={user.id}>
				{user.name}
				<span
					onClick={() => {
						props.remove(user.id);
					}}
				>
					X
				</span>
			</li>
		);
	});



	return <ul>{usersElements}</ul>;
}

export default UserList;
