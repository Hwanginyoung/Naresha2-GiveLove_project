import money from '../image/money.png';
import article from '../image/article.png';
import './MakeMoney.css';

const MakeMoney = () => {
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
                    <hr />
                </div>
            </haeder>
        </div>
    )
}

export default MakeMoney;