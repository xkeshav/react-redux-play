import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { RenderField, Loading, validate } from '../_helpers';

const LoginForm = (props) => {
        const { handleSubmit, loggingIn, pristine, submitting, error } = props;
        return (
                <Form onSubmit={handleSubmit} className="form form-horizontal" role="form">
                    <Field
                        name="username"
                        type="text"
                        label="Username"
                        className="form-control"
                        component={RenderField}
                    />
                     <Field
                        name="password"
                        type="password"
                        label="password"
                        className="form-control"
                        component={RenderField}
                    />
                    {error && <strong>{error}</strong>}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Login</button>
                        {loggingIn && <Loading /> }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </Form>
        );
};

const ReduxLoginForm = reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(LoginForm);

export { ReduxLoginForm as LoginForm };
