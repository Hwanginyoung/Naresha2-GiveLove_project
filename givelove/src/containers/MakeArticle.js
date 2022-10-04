import './MakeArticle.css';

const MakeArticle = () => {
    return (
        <div className="MakeArticle">
            <header>
                <div className="name">
                    <p className="title">물품 기부 만들기</p>
                </div>
                <div className='main_text'>
                    <p className='text'>기부 설명</p>
                    <input className='explanation' type="text" />
                </div>
            </header>
        </div>
    )
}

export default MakeArticle;