import "./Checkbox.css";

function Checkbox() {
  const field = ['교육', '아동복지', '환경 • 기후', '노인 복지', '한부모 가정', '장애인', '새터민', '이혼가정', '청소년 복지', '다문화 가정', '병원 시설', '기타']
  return (
    <div className="checkbox-tool">
        {
            field.map(element => {
                return (
                    <div className="check-container">
                      <input className="checkbox" type="checkbox"/>
                      <p className="cartagori">{element}</p>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Checkbox;
