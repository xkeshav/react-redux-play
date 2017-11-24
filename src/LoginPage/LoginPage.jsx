import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { LoginForm } from './LoginForm';

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
        // reset login status
        this.props.dispatch(userActions.logout());
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (user) {
        // console.log("onFormSubmit", user);
        this.setState({ submitted: true });
        const { username, password } = user;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render () {
        return (
            <div className="row">
                <h2>Login</h2>
                <LoginForm onSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
