import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {

    const authService = 'http://localhost:8080/auth';

    const [ formInfo, setFormInfo ] = useState({
        email: '',
        password: '',
        passwordVerify: ''
    });

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo, [e.target.name] : e.target.value
        })
    };

    const  handleSubmit = (e) => {
        e.preventDefault()

        axios.post(authService, formInfo)
            .then(result => console.log(result))
            .catch(err => console.log(err))

    };

    return (
        <div>
            <h1>Register a new account</h1>
            <form>
                <input type="email" placeholder="email" name="email" onChange={handleChange} value={formInfo.email}/>
                <input type="password" placeholder="password" name="password" onChange={handleChange} value={formInfo.password} />
                <input type="password" placeholder="Verify your password" name="passwordVerify" onChange={handleChange} value={formInfo.verifyPassword}/>
                <button type="submit" onClick={handleSubmit} >Register</button>
            </form>
        </div>
    )
};

export default Register;
