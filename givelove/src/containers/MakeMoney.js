import money from '../image/money.png';
import article from '../image/article.png';
import {useNavigate} from 'react-router-dom';
// import Bank from './Bank';
import Checkbox from './checkbox';
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
                    <p>기부 설명</p>
                    <input className='explanation' type="text" />
                    <p>최소 기부 금액</p>
                    <input className='donation_money' type="text" />
                    <p>은행명</p>
                    <input className='bank' type="text" />
                    {/* <Bank /> */}
                    <p>계좌 번호</p>
                    <input className='bank_number' type="text" />
                    <p>예금주</p>
                    <input className='bank_name' type="text" />
                    <p>카테고리 선택</p>
                    <Checkbox />
                    <p>이미지<p>최대 3개까지 등록 가능합니다.</p></p>
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                    <button className='back' onClick={()=>{ navigate('/MoneyDetail') }}>뒤로가기</button>
                    <button className='make_donation'>기부 만들기</button>
                </div>
            </haeder>
        </div>
    )
}

export default MakeMoney;