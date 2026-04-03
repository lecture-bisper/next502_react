//  File: AxiosDailyBoxOffice.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오후 12:43
//  Desc :

import { useState } from 'react';
import axios from 'axios';

function AxiosDailyBoxOffice() {
  //  1. 일일박스오피스 정보 저장용 변수, useState() 로 상태 관리 설정
  const [dailyBoxOfficeList, setDailyBoxOfficeList] = useState([]);
  //  일일박스오피스 정보 조회용 날짜를 저장할 변수, useState() 로 상태 관리 설정
  const [day, setDay] = useState('20260403');
  const serviceKey = 'c55013eadce1f0005fae142c556a228d';

  //  2. 날짜 지정 후 버튼 클릭 시 지정한 날짜의 일일박스 오피스 정보 가져오기
  //  지정한 날짜로 일일 박스 오피스 정보를 가져오는 버튼 이벤트 처리 함수
  const getDailyBoxOfficeList = () => {
    //  템플릿 문자열을 이용하여 접속할 서비스의 url 과 전달할 데이터를 문자열로 완성
    // const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${serviceKey}&targetDt=${day}`;

//  3. axios 를 사용하여 get 방식으로 가져오기
//     axios
//       .get(url)
    axios
      // 접속할 서비스 url 만 입력하고, params 객체를 사용하여 추가 정보를 전달함
      .get(
        'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        {
          params: {
            key: serviceKey,
            targetDt: day,
          },
        },
      )
      .then((res) => {
        const { data } = res;
        const { boxOfficeResult } = data;
        const { dailyBoxOfficeList } = boxOfficeResult;

        //  4. 가져온 데이터로 화면 업데이트 (setState, 부모가 전달한 props 의 데이터 변경 시 업데이트)
        setDailyBoxOfficeList(dailyBoxOfficeList);
      })
      .catch((err) => {
        console.log('axios를 사용한 ajax 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  };

  //  박스오피스 정보 날짜 변경 시 동작하는 이벤트 처리 함수
  const handleDayChange = (e) => setDay(e.target.value);

  return (
    <div>
      <div className={'row d-flex justify-content-end'}>
        <div className={'col-sm-3'}>
          <input
            type="text"
            className={'form-control'}
            placeholder={'날짜를 8자리 숫자로 입력해주세요'}
            value={day}
            onChange={handleDayChange}
          />
        </div>
        <div className={'col-sm-1'}>
          <button type={'button'} className={'btn btn-primary'} onClick={getDailyBoxOfficeList}>
            조회
          </button>
        </div>
      </div>
      <table className={'table table-hover table-striped text-center'}>
        <colgroup>
          <col width={'5%'} />
          <col width={'65%'} />
          <col width={'10%'} />
          <col width={'10%'} />
          <col width={'10%'} />
        </colgroup>
        <thead>
          <tr>
            <th>순위</th>
            <th>제목</th>
            <th>개봉일</th>
            <th>당일 관람객</th>
            <th>누적 관람객</th>
          </tr>
        </thead>
        <tbody>
          {/*4. 가져온 데이터로 화면 업데이트 (setState, 부모가 전달한 props 의 데이터 변경 시 업데이트) */}
          {
            dailyBoxOfficeList.map((item) => {
              return (
                <tr key={item.rnum}>
                  <td>{item.rank}</td>
                  <td className={'text-start'}>{item.movieNm}</td>
                  <td>{item.openDt}</td>
                  <td>{item.audiCnt}</td>
                  <td>{item.audiAcc}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default AxiosDailyBoxOffice;
