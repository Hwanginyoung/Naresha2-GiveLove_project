import money from '../image/money.png';
import article from '../image/article.png';
import {useNavigate} from 'react-router-dom';
import Checkbox from './Checkbox';
import './MakeMoney.css';

const MakeMoney = () => {
    let navigate=useNavigate();
    return (
        <div className='MakeMoney'>
            <haeder>
                <div className='name'>
                    <p className='title'>기부 만들기</p>
                </div>
                <div className='choose'>
                    <p className='choose_name'>당신이 만들 기부의 종류를 선택해 주세요</p>
                    <div className='button'>
                        <div className='money_check'>
                            <input className="checkbox" type="checkbox"/>
                            <button className='money_bt'><img src={money} className="money" alt="money" />금액 기부</button>
                        </div>
                        <div className='article_check'>
                            <input className="checkbox" type="checkbox"/>
                            <button className='article_bt'><img src={article} className="article" alt="article" />물품 기부</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='main_text'>
                    <p className='text'>기부 설명</p>
                    <input className='explanation' type="text" />
                    <div className='under_text'>
                        <div className='text_left'>
                            <p className='text'>최소 기부 금액</p>
                            <input className='text_box' type="text" />
                            <p className='text'>은행명</p>
                            <select className='bank'>
                                <option value="0"></option>
                                <option value="1">NH농협</option>
                                <option value="2">국민은행</option>
                                <option value="3">기업은행</option>
                                <option value="4">신한(구조흥)은행</option>
                                <option value="5">우리은행</option>
                                <option value="6">하나은행</option>
                                <option value="7">카카오뱅크</option>
                                <option value="8">케이뱅크</option>
                                <option value="9">토스뱅크</option>
                                <option value="10">SC제일</option>
                                <option value="11">경남은행</option>
                                <option value="12">광주은행</option>
                                <option value="13">대구은행</option>
                                <option value="14">부산은행</option>
                                <option value="15">산업은행</option>
                                <option value="16">수협은행</option>
                                <option value="17">전북은행</option>
                                <option value="18">제주은행</option>
                                <option value="19">한국씨티은행</option>
                                <option value="20">새마을금고</option>
                                <option value="21">신협</option>
                                <option value="22">상호저축은행</option>
                                <option value="23">산림조합</option>
                                <option value="24">우체국</option>
                                <option value="25">도이치</option>
                            </select>
                            <p className='text'>계좌 번호</p>
                            <input className='text_box' type="text" />
                            <p className='text'>예금주</p>
                            <input className='text_box' type="text" />
                        </div>
                        <div className='text_right'>
                            <p className='cartagori_text'>카테고리 선택</p>
                            <Checkbox />
                            <p className='text'>이미지<p className='detail_text'>최대 3개까지 등록 가능합니다.</p></p>
                            <div className='pictures'>
                                <label className='image' for='image1'>
                                </label>
                                <input id='image1' type='file' style={{display: "none"}} />
                                <label className='image' for='image2'>
                                </label>
                                <input id='image2' type='file' style={{display: "none"}} />
                                <label className='image' for='image3'>
                                </label>
                                <input id='image3' type='file' style={{display: "none"}} />
                            </div>
                            <div className='button'>
                                <button className='back' onClick={()=>{ navigate('/MoneyDetail') }}>뒤로가기</button>
                                <button className='make_donation'>기부 만들기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </haeder>
        </div>
    )
}

export default MakeMoney;