import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import LoginModal from './LoginModal';

import Card from '../../../ui/Card';
import { Link, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../../../redux/userSlice';

const Login = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLogAction = () => {
    if (currentUser) {
      dispatch(logout());
      navigate('/authenticate/signin');
    }

    navigate('/authenticate/signup');
  };

  const cartModalContent = (
    <React.Fragment>
      <Card>
        <div className={styles.modal_actions}>
          <ul className={styles.modal_list}>
            <li className={styles.modal_action}>
              <Link className={styles.modal_action_link} to="profile">
                Your Profile
              </Link>
            </li>
            <li className={styles.modal_action}>Billing</li>
            <li className={styles.modal_action}>Account Settings</li>
            <li className={styles.modal_action} onClick={handleUserLogAction}>
              {currentUser ? 'Log Out' : 'Log In'}
            </li>
          </ul>
        </div>
      </Card>
    </React.Fragment>
  );

  return (
    <div>
      <LoginModal onClose={props.onHideModal}>{cartModalContent}</LoginModal>
    </div>
  );
};

export default Login;
