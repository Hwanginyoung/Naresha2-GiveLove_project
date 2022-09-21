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
        <div className='menu' onClick={()=>{ navigate('/home') }}>홈</div>
        <div className='menu' onClick={()=>{ navigate('/donate') }}>기부</div>
        <div className='menu' onClick={()=>{ navigate('/mypage') }}>MY</div>
        <div className='login' Link to='/login'>로그인</div>
      </div>
    </div>
    </>
  );
}

export default Header;
