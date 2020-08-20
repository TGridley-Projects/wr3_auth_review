import React from 'react';
import { connect } from 'react-redux';

function Welcome(props) {

    const person = props.user.name ? props.user.name : 'guest';

    return (
        <section className='welcome'>
            <h1>Welcome, { person }!</h1>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps)(Welcome);