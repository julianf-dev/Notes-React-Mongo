import { useUsers } from "../../Hooks/useUsers";

export const CreateUser = () => {

    const {
        users,
        userName,
        setUserName,
        addUser,
        deleteUser,
    } = useUsers()

	const onChangeUsername = e => {
        setUserName(e.target.value)
	};

	const onSubmit = e => {
		e.preventDefault();
        addUser(userName)
		setUserName('')
	};

	const handleDelete =id => {
		deleteUser(id)
	};

	return (
		<div className='row'>
			<div className='col-md-4'>
				<div className='card card-body'>
					<h3>Create new User</h3>
					<form onSubmit={onSubmit}>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								value={userName}
								onChange={onChangeUsername}
							/>
						</div>
						<br />
						<button type='submit' className='btn btn-primary'>
							Save
						</button>
					</form>
				</div>
			</div>
			<div className='col-md-8'>
				<ul className='list-group'>
					{users.map(user => (
						<li
							className='list-group-item list-group-item-action'
							key={user._id}
							onDoubleClick={() => handleDelete(user._id)}
						>
							{user.username}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
