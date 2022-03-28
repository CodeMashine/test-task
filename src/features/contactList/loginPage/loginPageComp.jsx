import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAtemptFunc, passwordAtemptFunc, comparison } from './loginPageSlice';
import styles from './style.module.css';

export default function LoginPage() {
    const loginAtempt = useSelector(state => state.login.loginAtempt);
    const passwordAtempt = useSelector(state => state.login.passwordAtempt);
    const dispatch = useDispatch();

    return (
        <div className = {styles.main}>
            <span>
                Login :  <input id="loginField" value={loginAtempt} onChange={(event) => dispatch(loginAtemptFunc(event.target.value))} />
            </span>
            <span><br />
                Password : <input id="passwordField" value={passwordAtempt} onChange={(event) => dispatch(passwordAtemptFunc(event.target.value))} />
            </span><br />
            <button onClick={() => dispatch(comparison())}>
                Log in
            </button>
        </div>
    )
}