import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addUser } from '../../redux/reducers/authReducer';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }
    
    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleRegister = () => {
        const { email, password } = this.state;

        axios
            .post('/auth/register', { email, password })
            .then(res => {
                this.props.addUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleLogin = () => {

    }

    handleLogout = () => {

    }

    render() {
        console.log(this.props.user)
        return (
            <section>
                {
                    this.props.user.email
                    ? <button>logout</button>
                    : <div>
                            <input onChange={this.handleInput} name='email' placeholder='email' />
                            <input onChange={this.handleInput} name='password' placeholder='password' />
                            <button onClick={this.handleRegister}>register</button>
                            <button>login</button>
                    </div>
                }
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, { addUser })(Auth);