import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { RegisterForm } from './RegisterForm';

class RegisterPage extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (user) {
        console.log("handleSubmit ==>", user);
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        dispatch(userActions.register(user));
    }

    render () {
        return (
            <div className="row">
                <h2>Register</h2>
                <RegisterForm onSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
