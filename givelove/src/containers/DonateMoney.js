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
          <div class="info">
            <div>기부자명 </div>
            <input></input> 
          </div> 
          <div class="info">
            <div>생년월일 </div>
            <input></input> 
          </div>
          <div class="info">
            <div>전화번호 </div>
            <input></input> 
            <p id="numtext">‘-’ 를 제외한 숫자만 입력해 주세요.</p>
          </div>
        </div>

        <div id="payment">
          <div id="text">기부금 결제</div>
          <div class="info">
            <div>기부금액 </div>
            <input></input>
            <p id="amounttext">원</p>
          </div>
          <div class="info">
            <div>은행명 </div>
            <input></input> 
          </div>
          <div class="info">
            <div>계좌번호 </div>
            <input></input> 
            <p id="acnumtext">※ 기호 “-”없이 숫자만 입력하세요.<br/>휴대폰 번호로 된 계좌는 자동이체 되지 않습니다.</p>
          </div>
          <div class="info">
            <div>예금주 성명 </div>
            <input></input> 
          </div>
          <div class="info">
            <div>예금주 생년월일 </div>
            <input></input> 
          </div>
        </div>
        <button>기부하기</button>
      </div>
    </>
  );
}

export default DonateMoney;