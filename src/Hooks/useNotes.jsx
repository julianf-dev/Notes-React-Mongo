import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export const useNotes = () => {

    const [users, setUsers] = useState([]);
	const [userSelected, setUserSelected] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [date, setDate] = useState(new Date());
	const [editing, setEditing] = useState(false);
    
    const { id } = useParams();

	useEffect(() => {
		try {
            if(id){
                getData(id)
            }
            else{
                setTitle('')
                setContent('')
                setDate(new Date())
            }
            getUser()
		} catch (error) {
			console.log(error);
		}
	}, [id]);

	const getUser = async () => {
		const res = await axios.get('http://localhost:3030/api/users');
		const data = res.data;
		setUsers(data.map(user => user.username))
	};

    const getData = async (id) => {
			const res = await axios.get(
				'http://localhost:3030/api/notes/' + id
			);
			setTitle(res.data.title)
			setContent(res.data.content)
			setDate(new Date(res.data.date))
			setUserSelected(res.data.author)
			setEditing(true)
		}
    
    const addData = async (newNote) => {
        try{
            await axios.post('http://localhost:3030/api/notes', newNote);
        }
        catch(e){
            console.log(e);
        }
    }

    const editNote = async (id, editNote) => {
        try{
            await axios.put('http://localhost:3030/api/notes/' + id, editNote);
        }
        catch(e){
            console.log(e);
        }
    }
    
    return{
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
		setEditing,
        addData,
        editNote,
    }
	
}