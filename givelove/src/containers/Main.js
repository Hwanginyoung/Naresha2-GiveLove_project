import picture1 from '../image/main-picture1.png';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <header>
                <div className='header'>
                    <img src={picture1} className="picture1" alt="picture1" />
                    <input type={"text"} placeholder="검색어를 입력해 주세요"/>
                </div>
                <div className='contents'>
                    <p className='select'>전체 / 금액 기부 / 물품 기부</p>
                    <div className='row'>
                        <div className='col'>
                            
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Main;