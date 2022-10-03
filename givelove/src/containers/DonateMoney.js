import React from "react";
import "./DonateMoney.css";

import Donateheader from "../components/Donateheader";

function DonateMoney() {
  return (
    <>
      <Donateheader />
      <div id="donatemoney">
        <div id="userinfo">
          <div id="text">기부자 정보</div>
          <div class="info">기부자명 <input></input> </div> 
          <div class="info">생년월일 <input></input> </div>
          <div class="info">전화번호 <input></input> </div>
        </div>
        <div id="payment">
          <div id="text">기부금 결제</div>
          <div class="info">기부금액 <input></input> </div>
          <div class="info">은행명 <input></input> </div>
          <div class="info">계좌번호 <input></input> </div>
          <div class="info">예금주 성명 <input></input> </div>
          <div class="info">예금주 생년월일 <input></input> </div>
        </div>
      </div>
    </>
  );
}

export default DonateMoney;