import axios from 'axios';
import { useState, useEffect } from 'react';

export const useUsers = () => {
	// States
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);

	// Mount effect in first load
	useEffect(() => {
		try {
			getUsers();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const getUsers = async () => {
		const res = await axios.get('http://localhost:3030/api/users');
		setUsers(res.data);
	};

	const addUser = async userName => {
		try {
			await axios.post('http://localhost:3030/api/users', {
				username: userName,
			});
			getUsers();
		} catch (e) {
			console.log(e);
		}
	};

	const deleteUser = async id => {
		await axios.delete('http://localhost:3030/api/users/' + id);
		getUsers();
	};

	return {
		users,
		userName,
		setUserName,
		addUser,
		deleteUser,
	};
};
