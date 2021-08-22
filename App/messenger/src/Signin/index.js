import React from 'react';
import { useInput } from '../utils/useInput';
import firebase from 'firebase';
import { Link } from 'react-router-dom'

const Signin = ({ isSignUp }) => {
    const {value: email, handleChange: handleChangeEmail, reset: resetEmail} = useInput("");
    const {value: password, handleChange: handleChangePassword, reset: resetPassword} = useInput("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }

        try {
            if (isSignUp) {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } else {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            }
            resetEmail();
            resetPassword();
        } catch(error) {
            alert(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <input type="email" placeholder="Email" value={email} onChange={handleChangeEmail}/>
            <input type="password" placeholder="password" value={password} onChange={handleChangePassword}/>
            <input type="submit" value={`${isSignUp ? 'Sign Up' : 'Sign In'}`}/>
            <Link to={`${isSignUp ? '/signin' : '/signup'}`}>{!isSignUp ? "Sign Up" : "Sign In"}</Link>
        </form>
    );
};

export default Signin;