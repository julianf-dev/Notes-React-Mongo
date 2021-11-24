import axios from 'axios'
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        date: new Date()
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:3030/api/users')
        this.setState({users : res.data.map(user => user.username)})
    }

    onSubmit = async (e) => {
        e.preventDefault()
    }

    onInputChange = e => {
        /*  this.setState({
            userSelected: e.target.value
        }) */
        console.log(e.target.name, e.target.value)

    }

    onChangeDate = date => {
        this.setState({ date})
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create Note</h4>
                        {/** SELECT USER (para un proyecto en produccion se puede tener el usuario en una cookie*/}
                        <div className="form-group mb-3">
                            <select
                                className="form-control"
                                name="userSelected"
                                onChange={this.onInputChange}
                            >
                                {
                                    this.state.users.map(user => 
                                        <option key={user} value={user} >
                                            {user}
                                        </option>)
                                }
                            </select>
                        </div>
                        <div className="form-group mb-3 ">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Title"
                            name="title"
                            onChange={this.onInputChange}
                            required
                            />   
                        </div>
                        <div className="form-group mb-3 ">
                            <textarea 
                                name="content"
                                className="form-control"
                                placeholder="Content"
                                required
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group mb-r">
                            <DatePicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    <form onSubmit={this.onSubmit}>
                        <br/>
                        <button type="submit" className="btn btn-primary">
                            Save Note
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
