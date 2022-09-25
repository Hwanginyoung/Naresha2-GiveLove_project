import React from "react";
import "./Dmypage.css";

import Mypageheader from "../components/Mypageheader";

function Dmypage() {
  return (
    <>
      <Mypageheader />
        <div id="dmypage">
            <div id="information">
                <p>회원정보</p>
            </div>
            <div id="indivinfo">
                <div>test</div>
            </div>
        </div>
    </>
  );
}

export default Dmypage;
