import React from 'react';
import LoginImg from '../image/LoginImg.png';
import "./Login.css";

function Login() {
  return (
    <>
    <div id="loginpage">
        <div id="img">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        </div>
        <div id="loginInput">
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
