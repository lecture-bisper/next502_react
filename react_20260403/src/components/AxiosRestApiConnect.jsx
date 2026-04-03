//  File: AxiosRestApiConnect.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오후 3:25
//  Desc :

import axios from 'axios';

//  SOP (Same-Origin Policy) : 동일 출처 정책, 동일한 출처의 리소스만 사용하는 정책

//  CORS (Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
//  기본적으로 하나의 출처에서 리소스를 사용 시에는 문제가 없으나, 다른 출처에서 리소스를 가져와서 사용 시 오류가 발생
//  CORS 오류 는 웹 브라우저에서만 발생하는 오류

//  CORS 오류 해결 방법
//  1. 리액트에서 프록시 서버 사용 (vite.config.js 파일 설정)
//  2. 스프링 서버에서 CORS 설정
//    2.1 @CrossOrigin 어노테이션을 사용 (Controller 클래스, 메소드에 사용 가능)
//    2.2 WebMvcConfigurer 를 상속받아 addCorsMappings() 메소드를 오버라이딩하여 설정

function AxiosRestApiConnect() {
  // const baseUrl = 'http://localhost:8080/api';

  const connectGet = () => {

    // 리액트에서 CORS 오류를 해결하기 위해 프록시 서버 설정을 사용할 경우 접속할 서버 주소에서 'http://서버주소:포트번호' 부분을 생략하고 나머지 경로만 입력
    axios
      .get(`/api/sendDataGet`)
      .then((res) => {
        console.log('Get 방식 통신 성공했습니다.');
        const { result, data } = res.data;

        if (result == 'success') {
          console.log(`수신된 데이터 : ${data}`);
        } else {
          console.log('데이터 수신 중 오류가 발생했습니다.');
        }
      })
      .catch((err) => {
        console.log('Get 방식 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  const connectGetParam = () => {
    axios
      .get(`/api/sendDataGetParam`, {
        params: {
          idx: 1000,
        },
      })
      .then((res) => {
        console.log('파라미터가 있는 Get 방식 통신 성공했습니다.');
        const { result, data } = res.data;

        if (result == 'success') {
          console.log(`수신된 데이터 : ${data}`);
        } else {
          console.log('데이터 수신 중 오류가 발생했습니다.');
        }
      })
      .catch((err) => {
        console.log('파라미터가 있는 Get 방식 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  const connectPostParam = () => {
    axios
      .post('/api/sendDataPostParam', null, {
        params: {
          userId: 'test1',
          userPw: 'next502',
        },
      })
      .then((res) => {
        console.log('파라미터가 있는 Post 방식 통신 성공했습니다.');
        const { result, data } = res.data;

        if (result == 'success') {
          console.log(`수신된 데이터 : ${data}`);
        } else {
          console.log('데이터 수신 중 오류가 발생했습니다.');
        }
      })
      .catch((err) => {
        console.log('파라미터가 있는 Post 방식 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  const connectPutParam = () => {
    axios
      .put('/api/sendDataPutParam', null, {
        params: {
          idx: 1000,
          title: '테스트 제목',
        },
      })
      .then((res) => {
        console.log('파라미터가 있는 Put 방식 통신 성공했습니다.');
        const { result, data } = res.data;

        if (result == 'success') {
          console.log(`수신된 데이터 : ${data}`);
        } else {
          console.log('데이터 수신 중 오류가 발생했습니다.');
        }
      })
      .catch((err) => {
        console.log('파라미터가 있는 Put 방식 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  const connectDeleteParam = () => {
    axios.delete('/api/sendDataDeleteParam', {
      params: {
        idx: 1000,
      }
    })
      .then((res) => {
        console.log('파라미터가 있는 Delete 방식 통신 성공했습니다.');
        const { result, data } = res.data;

        if (result == 'success') {
          console.log(`수신된 데이터 : ${data}`);
        } else {
          console.log('데이터 수신 중 오류가 발생했습니다.');
        }
      })
      .catch((err) => {
        console.log('파라미터가 있는 Delete 방식 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Axios를 이용하여 Rest API 서버에 접속하기</h3>
      <div className={'row'}>
        <div className={'col'}>
          <div className={'d-flex justify-content-between'}>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={connectGet}>
              파라미터가 없는 GET 방식
            </button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={connectGetParam}>
              파라미터가 있는 GET 방식
            </button>
            <button type={'button'} className={'btn btn-success me-2'} onClick={connectPostParam}>
              파라미터가 있는 POST 방식
            </button>
            <button type={'button'} className={'btn btn-info me-2'} onClick={connectPutParam}>
              파라미터가 있는 PUT 방식
            </button>
            <button type={'button'} className={'btn btn-warning'} onClick={connectDeleteParam}>
              파라미터가 있는 DELETE 방식
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AxiosRestApiConnect;
