import './Login.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const userlogin = async () => {
        let result = await fetch('http://127.0.0.1:5000/adminlogin', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        try {
            if (result[0].username) {
                localStorage.setItem('admin', JSON.stringify(result));
                alert("Login Successfully");
                navigate('/adminhome');
            }
        } catch {
            alert("Username Password not matched");
            console.log(result);
        }
    }

    return (
        <div>
            <Header />
            <div className='login-container'>
                <div className='login-form'>
                    <img src='https://logodix.com/logo/649370.png' alt='login Avatar' className='login-avatar'/>
                    <input type='text' className='login-input' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} value={username} />
                    <input type='password' className='login-input' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className='login-button' onClick={userlogin}>Login</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
