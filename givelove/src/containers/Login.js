import React from 'react';
import LoginImg from '../image/LoginImg.png';
import BlackLogo from '../image/BlackLogo.png';
import "./Login.css";

function Login() {
  return (
    <>
    <div id="loginpage">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        <div id="loginInput">
            <img src={BlackLogo} id="NavLogo" alt="NavLogo" />
            <div>아이디</div>
            <input></input>
            <div>비밀번호</div>
            <input></input>
        </div>
    </div>
    </>
  );
}

export default Login;
