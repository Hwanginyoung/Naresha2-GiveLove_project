import money from '../image/money.png';
import article from '../image/article.png';
import {useNavigate} from 'react-router-dom';
// import Bank from './Bank';
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
                            <input className='text_box' type="text" />
                            {/* <Bank /> */}
                            <p className='text'>계좌 번호</p>
                            <input className='text_box' type="text" />
                            <p className='text'>예금주</p>
                            <input className='text_box' type="text" />
                        </div>
                        <div className='text_right'>
                            <p className='cartagori_text'>카테고리 선택</p>
                            <Checkbox />
                            <p className='text'>이미지<p className='detail_text'>최대 3개까지 등록 가능합니다.</p></p>
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