import React from 'react';
import NavLogo from '../image/NavLogo.png';
import "./Header.css";
import {Link, useNavigate} from 'react-router-dom';

function Header() {

  let navigate=useNavigate();

  return (
    <>
    <div id="nav-container">
      <div id="logo">
        <img src={NavLogo} id="NavLogo" alt="NavLogo" />
      </div>
      <div id="MenuBar">
        <div class="menu" onClick={()=>{ navigate('/home') }}>홈</div>
        <div class="menu" onClick={()=>{ navigate('/donate') }}>기부</div>
        <div class="menu" onClick={()=>{ navigate('/mypage') }}>MY</div>
      </div>
      <div id="member">
        <div id="login" Link to='/login'>로그인</div>
      </div>
    </div>
    </>
  );
}

export default Header;
