import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Signup = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setconfirmPassword]= useState('');
    const [error, setError]= useState('');
    const navigate= useNavigate()

    const [createUserWithEmailAndPassword, user]= useCreateUserWithEmailAndPassword(auth)

const handleEmailBlur= event=>{
    setEmail(event.target.value);
}
const handlePasswordBlur= event=>{
    setPassword(event.target.value);
}
const handleConfirmPasswordBlur= event=>{
    setconfirmPassword(event.target.value);
}

if (user){
    navigate('/shop')
}

const handleCreateUser= event=>{
    event.preventDefault();
    if (password !== confirmPassword){
        setError('Both Password Did Not Match')
        return;
    }
    if(password.length<6){
        setError('Password Must be 6 character or More');
        return;
    }
    createUserWithEmailAndPassword(email, password);
}



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
        <p>Already Have an Acoount? <Link className='form-link' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;