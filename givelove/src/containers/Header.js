import React from 'react';
import NavLogo from '../image/BlackLogo.png';
import "./Header.css";
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate=useNavigate();

  return (
    <>
    <div id="nav-container">
      <div id="logo">
        <img src={NavLogo} id="BlackLogo" alt="BlackLogo" />
      </div>
      <div id="MenuBar">
        <p className='menu' onClick={()=>{ navigate('/home') }}>홈</p>
        <p className='menu' onClick={()=>{ navigate('/donate') }}>기부</p>
        <p className='menu' onClick={()=>{ navigate('/mypage') }}>MY</p>
        <p className='login' Link to='/login'>로그인</p>
      </div>
    </div>
    </>
  );
}

export default Header;
