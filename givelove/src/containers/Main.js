import picture1 from '../image/main-picture1.png';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <header>
                <div className='picture'>
                    <img src={picture1} className="picture1" alt="picture1" />
                </div>
                <div className='search'>
                    <input type={"text"} placeholder="검색어를 입력해 주세요"/>
                </div>
                <div className='contents'>
                    <p>전체 / 금액 기부 / 물품 기부</p>
                </div>
            </header>
        </div>
    );
};

export default Main;