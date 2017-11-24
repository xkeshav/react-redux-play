import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { RenderField, RadioGroup, Loading, validate } from '../_helpers';

const RegisterForm = (props) => {
        const { handleSubmit, registering, pristine, submitting, error } = props;
        return (
            <Form onSubmit={handleSubmit} className="form form-horizontal" role="form">
                    <Field
                    name="firstName" type="text" label="First Name" className="form-control"
                    component={RenderField}
                    />
                    <Field
                        name="lastName" type="text" label="Last Name" className="form-control"
                        component={RenderField}
                    />
                    <Field
                        name="username" type="text" label="Username" className="form-control"
                        component={RenderField}
                    />
                    <Field
                        name="email" type="email" label="Email Address" className="form-control"
                        component={RenderField}
                    />
                    <Field
                        name="password" type="password" label="Password" className="form-control"
                        component={RenderField}
                    />
                    <Field
                        name="gender" label="Gender" component={RadioGroup}
                        options={[
                            { title: 'Male', value: 'male' },
                            { title: 'Female', value: 'female' }
                        ]} />
                    {error && <strong>{error}</strong>}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Register</button>
                        {registering && <Loading/>}
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
            </Form>
        );
};

const ReduxRegisterForm = reduxForm({
    form: 'register',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(RegisterForm);

export { ReduxRegisterForm as RegisterForm };
