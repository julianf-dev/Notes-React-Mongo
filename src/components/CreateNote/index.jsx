import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import { useNotes } from '../../Hooks/useNotes';

export const CreateNote = () => {
	const navigate = useNavigate();

	const {
		idUser,
		users,
		userSelected,
		title,
		content,
		date,
		editing,
		setUserSelected,
		setTitle,
		setContent,
		setDate,
		addData,
		editNote,
	} = useNotes();

	const onSubmit = async e => {
		e.preventDefault();
		const newNote = {
			title,
			content,
			date,
			author: userSelected,
		};
		if (editing) {
			editNote(idUser, newNote);
		} else {
			addData(newNote);
		}
		navigate('/');
	};

	const onUserChange = e => {
		setUserSelected(e.target.value);
	};
	const onTitleChange = e => {
		setTitle(e.target.value);
	};
	const onContentChange = e => {
		setContent(e.target.value);
	};

	const onChangeDate = date => {
		setDate(date);
	};

	return (
		<div className='col-md-6 offset-md-3'>
			<div className='card card-body'>
				<h4>{editing ? 'Edit note' : 'Create note'}</h4>
				{/** SELECT USER (para un proyecto en produccion se puede tener el usuario en una cookie */}
				<div className='form-group mb-3'>
					<select
						value={userSelected}
						className='form-control'
						name='userSelected'
						onChange={onUserChange}
					>
						{users.map(user => (
							<option key={user} value={user}>
								{user}
							</option>
						))}
					</select>
				</div>
				<div className='form-group mb-3 '>
					<input
						type='text'
						className='form-control'
						placeholder='Title'
						name='title'
						onChange={onTitleChange}
						value={title}
						required
					/>
				</div>
				<div className='form-group mb-3 '>
					<textarea
						name='content'
						className='form-control'
						placeholder='Content'
						onChange={onContentChange}
						value={content}
						required
					/>
				</div>
				<div className='form-group mb-r'>
					<DatePicker
						className='form-control'
						selected={date}
						onChange={onChangeDate}
					/>
				</div>
				<form onSubmit={onSubmit}>
					<br />
					<button type='submit' className='btn btn-primary'>
						Save Note
					</button>
				</form>
			</div>
		</div>
	);
};
