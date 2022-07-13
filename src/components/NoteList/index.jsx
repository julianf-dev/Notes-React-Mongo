import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NoteList = () => {

	const [notes, setNotes] = useState([]);

	useEffect(() => {
		try {
			getNotes();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const getNotes = async () => {
		const res = await axios.get('http://localhost:3030/api/notes');
		setNotes(res.data);
	};

	const deleteNote = async id => {
		await axios.delete('http://localhost:3030/api/notes/' + id);
		getNotes()
	};

	return (
		<div className='row'>
			{notes.map(note => (
				<div className='col-md-4 p-2' key={note._id}>
					<div className='card-header d-flex justify-content-between'>
						<h5>{note.title}</h5>
						<Link className='btn btn-secondary' to={'/edit/' + note._id}>
							Edit
						</Link>
					</div>
					<div className='card'>
						<div className='card-body'>
							<p>{note.content}</p>
							<p>{note.author}</p>
							<p>{note.date}</p>
						</div>
						<div className='card-footer'>
							<button
								className='btn btn-danger'
								onClick={() => deleteNote(note._id)}
							>
								{' '}
								Delete{' '}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
