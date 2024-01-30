import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signin } from '../../api/api';

import styles from './AuthenticateForm.module.css';
import { loginSuccess, logout } from '../../redux/userSlice';
import { Link } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };
  const initialErrors = { email: false, password: false };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [login, setLogin] = useState(false);

  const resetForm = () => {
    setFormErrors(initialErrors);
    setFormValues(initialValues);
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};
    let flag = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = ' Email is required!';
      flag = false;
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
      flag = false;
    }
    if (!values.password) {
      errors.password = 'Password is required';
      flag = false;
    } else if (values.password.length < 4 || values.password.length > 10) {
      errors.password =
        'Password must be more than 4 characters and cannot exceed more than 10 characters';
      flag = false;
    }

    if (flag) setFormIsValid(true);

    return errors;
  };

  let loggedInContent = (
    <div className={styles.login_message}>
      <button
        type="button"
        className={`${styles.authenticate_btn} ${styles.home_link_btn}`}
      >
        <Link to="/home" className={styles.home_link_text}>
          GO TO HOME
        </Link>
      </button>
      <button
        type="button"
        className={`${styles.authenticate_btn} ${styles.home_link_btn}`}
      >
        <Link to="/info" className={styles.home_link_text}>
          CONTINUE
        </Link>
      </button>
      <button
        type="button"
        className={`${styles.authenticate_btn} ${styles.home_link_btn}`}
        onClick={() => {
          setLogin(false);
          dispatch(logout());
        }}
      >
        LOG OUT
      </button>
    </div>
  );

  if (login) {
    return (
      <>
        <div className={styles.logged_in}>
          <p className={styles.login_message_para}>You are logged in!</p>
        </div>
        {loggedInContent}
      </>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (formIsValid) {
      try {
        const response = await signin(formValues);
        if (response.data.message === "User doesn't exist.") {
          setFormErrors({ ...formErrors, email: "User doesn't exist." });
          setFormIsValid(false);
        }
        if (response.data.message === 'Invalid credentials') {
          setFormErrors({ ...formErrors, password: 'Invalid password' });
          setFormIsValid(false);
        }
        setIsSubmit(true);

        if (response.status === 200) {
          console.log('LOG IN SUCCESSFUL');

          dispatch(loginSuccess(response.data));
          // redirect("/info");

          setLogin(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.authenticate_inputs}>
        <div className={styles.authenticate_input}>
          <label className={styles.authenticate_label} htmlFor="email">
            Enter your Registered E-mail ID (Personal):
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
            className={styles.authenticate_input}
            placeholder="Email ID"
          />
        </div>
        {formErrors.email && (
          <p className={styles.authentication_errors}>{formErrors.email}</p>
        )}

        <div className={styles.authenticate_input}>
          <label className={styles.authenticate_label} htmlFor="passowrd">
            Enter your Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                password: e.target.value,
              })
            }
            className={styles.authenticate_input}
          />
        </div>
        {formErrors.password && (
          <p className={styles.authentication_errors}>{formErrors.password}</p>
        )}

        {!login && (
          <>
            <div className={styles.forgot_pass}>
              Forgot Password?<span> Click Here! </span>
            </div>
            <div className={styles.authenticate_actions_btn_container}>
              <button
                className={`${styles.sign_up} ${styles.authenticate_btn}`}
                type="submit"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={resetForm}
                className={`${styles.reset} ${styles.authenticate_btn}`}
              >
                Reset
              </button>
            </div>
          </>
        )}
        {login && { loggedInContent }}
      </div>
    </form>
  );
};

export default Signin;
