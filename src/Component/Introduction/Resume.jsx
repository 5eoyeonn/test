import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div id = "resume">
	    <h3>이력</h3>
        <ul>
          <li> 2021.3 가천대학교 자율전공학부 입학</li>
          <li> 2022.3 가천대학교 컴퓨터공학과 전공선택 </li>
          <li> 2023.1 - 초중고 소프트웨어 캠프 보조강사 활동 </li>
        </ul>
	    <table>
			<tr><td>성 명</td><td>양서연</td><td>학 과</td><td>컴퓨터공학과</td></tr>
			<tr><td>나 이</td><td>만 21 세</td><td>학 번</td><td>202137548</td></tr>
			<tr>출신학교</tr>
			<tr><td>중학교</td><td>강명중학교</td></tr>
			<tr><td>고등학교</td><td>강일고등학교</td></tr>
			<tr><td>대학교</td><td>가천대학교</td></tr>
		</table>
		<h3>
			아르바이트 등 경력
		</h3>
		<table>
			<tr><td>미술 전시관</td><td>2022.7 - 2022.12</td></tr>
			<tr><td>영어학원</td><td>2023.3 - 2023.9</td></tr>
			<tr><td>코딩교육</td><td>2023.1 - </td></tr>
		</table>

		<div id="pledge">
			<br/>위의 사실이 틀림이 없음을 서약합니다.<br/>
      작성일 2023년 10월 25일<br/>
    	작성자 (인) 
		</div>
  </div>
  );
};

export default Resume;
