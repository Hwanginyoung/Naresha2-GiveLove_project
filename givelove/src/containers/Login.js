import React from 'react';
import LoginImg from '../image/LoginImg.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Login.css";

function Login() {

  let navigate=useNavigate();

  return (
    <>
    <div id="loginpage">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        <div id="loginInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <div id="id">아이디</div>
            <input></input>
            <div id="password">비밀번호</div>
            <input></input>
            <br />
            <button id="loginButton">로그인</button>
            <p>아직 회원이 아닌신가요?<button onClick={()=>{ navigate('/register') }}>회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Login;
