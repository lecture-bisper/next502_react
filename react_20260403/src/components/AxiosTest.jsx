//  File: AxiosTest.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 11:27
//  Desc :

//  axios : ajax 비동기 통신을 위한 자바스크립트 라이브러리
//  사용 시 해당 컴포넌트에 import 하여 사용
//  단축 메소드를 제공하고 있음 (get, post, put, delete)
//  then(콜백함수) : 데이터 통신 성공 시 자동 동작하는 부분
//  catch(콜백함수) : 데이터 통신 실패 시 자동 동작하는 부분


//  사용법

//  설치 - npm install axios

//  사용 -
//  import axios from 'axios';
//  axios.단축메소드(접속주소, 매개변수)
//  .then(response => {접속 성공 시 처리할 소스코드)
//  .catch(error => {접속 실패 시 처리할 소스코드);

//  axios({
//      url : '접속주소',
//      method: '통신 방식',
//      data: {파라미터 값으로 전달할 데이터}
//  });

//  get/delete 방식 접속 시 전달할 데이터가 없을 경우
//  axios.get('접속주소')
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

//  get/delete 방식 접속 시 데이터 전달할 경우
//  axios.get('접속주소', {
//      params: {
//        id: 'asdf',
//        pw: '1234',
//      }
//  })
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

//  post/put 방식 접속 시 데이터 전달할 경우
//  axios.post('접속주소', null, {
//      params: {
//        id: 'asdf',
//        pw: '1234',
//      }
//  })
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });


import axios from 'axios';

function AxiosTest() {

  const btnClick = () => {
    axios.get(
      'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c55013eadce1f0005fae142c556a228d&targetDt=20260402',
    )
      .then(res => {
        console.log('axios 비동기 통신이 성공했습니다.');
        // axios 를 통해서 전달받은 전체 데이터 가져오기
        // console.log(res);

        // axios 를 통해서 전달받은 데이터를 객체 분할 할당을 통해서 변수에 저장
        // const {config, data, headers, request, status, statusText} = res;
        //
        // console.log(config);
        // console.log(headers);
        // console.log(request);
        // console.log(status);
        // console.log(statusText);
        // console.log(data);

        //  axios 를 통해서 전달받은 데이터 중 key 가 data 인 부분만 가져와서 객체 분할 할당을 통해서 필요한 데이터만 가져옴
        const {boxOfficeResult} = res.data;
        // console.log(boxOfficeResult);

        const { boxofficeType, showRange, dailyBoxOfficeList } = boxOfficeResult;
        console.log(boxofficeType);
        console.log(showRange);
        console.log(dailyBoxOfficeList);

        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
          let boxOfficeList = '';
          boxOfficeList += `순위 : ${dailyBoxOfficeList[i].rank}\n`;
          boxOfficeList += `영화명 : ${dailyBoxOfficeList[i].movieNm}\n`;
          boxOfficeList += `개봉일 : ${dailyBoxOfficeList[i].openDt}\n`;
          console.log(boxOfficeList);
          console.log("----------");
        }
      })
      .catch(err => {
        console.log('axios 비동기 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  return (<div>
    <button type={'button'} className={'btn btn-primary'} onClick={btnClick}>axios 로 데이터 가져오기</button>
  </div>);
}

export default AxiosTest;
