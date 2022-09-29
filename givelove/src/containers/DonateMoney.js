import React from "react";
import "./DonateMoney.css";


function DonateMoney() {
  return (
    <>
        <div id="donatemoney">
            <div id="userinfo">
                <div id="text">기부자 정보</div>
                <div id="name"></div>
                <div id="birth"></div>
                <div id="num"></div>
            </div>
            <div id="payment">
                <div id="pay">기부금 결제</div>
                <div id="money"></div>
                <div id="bank"></div>
                <div id="account"></div>
                <div id="accountName"></div>
                <div id="accountBirth"></div>
                <div id="address"></div>
            </div>
        </div>
    </>
  );
}

export default DonateMoney;
