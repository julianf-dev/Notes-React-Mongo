import axios from 'axios'
import React, { Component } from 'react'

export default class CreateUser extends Component {

    state = {
        users : [],
        username: ''
    }

    //ayuda a ejecutar funciona a penas el computador sea montado
    async componentDidMount(){
        this.getUsers();
    }
    
    getUsers = async () => {
        const res = await axios.get('http://localhost:3030/api/users')
        this.setState({users: res.data})
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3030/api/users', {
            username: this.state.username
        })
        //con esto limpiamos los datos
        this.setState({username: ''})
        //Con esto hacemos que se muestren los usuarios automaticamente
        this.getUsers()
    }

    deleteUser =  async (id) => {
        await axios.delete('http://localhost:3030/api/users/' + id)
        this.getUsers()
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create new User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text" 
                                    className ="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}/>
                            </div>
                            <br/>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                            <li 
                                className="list-group-item list-group-item-action" 
                                key={user._id}
                                onDoubleClick={ () => this.deleteUser(user._id)}
                                >
                                {user.username}
                            </li> ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
