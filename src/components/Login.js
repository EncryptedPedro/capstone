import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../Login.css";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            console.log('Username:', values.username);
            console.log('Password:', values.password);
        },
    });

    return (
        <main>
            <div className="content">
                <h2>Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <>
                        <label htmlFor="username">Username:<br /></label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className='error'>{formik.errors.username}</div>
                        ) : null}
                    </>
                    <br/>
                    <>
                        <label htmlFor="password">Password:<br/></label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                        ) : null}
                    </>
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    );
};

export default Login;