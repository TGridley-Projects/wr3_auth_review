import React from 'react';
import { connect } from 'react-redux';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }
    
    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleRegister = () => {

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
                    this.props.user.name
                    ? <button>logout</button>
                    : <div>
                            <input placeholder='username' />
                            <input placeholder='password' />
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

export default connect(mapStateToProps)(Auth);