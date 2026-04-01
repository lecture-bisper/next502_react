//  VolumeControl.jsx

//  문제 1) 버튼 2개(+, -)를 생성하고 useState 와 useEffect 를 사용하여 볼륨값을 조절하는 프로그램을 작성하세요
//  볼륨이 변경될 때마다 console.log() 를 이용하여 변경된 볼륨값을 출력

//  state 변수명 : volume
//  volume 의 초기값(state 변수의 초기값): 0, 기본값(useEffect로 기본값 설정): 5, 최대값: 10, 최소값: 0

import { useEffect, useState } from 'react';

function VolumeControl() {

  // 화면에 출력할 데이터이므로 useState를 사용하여 state로 관리, 초기값 0
  const [volume, setVolume] = useState(0);

  // useEffect 를 사용하여 UI 렌더링 후 state 를 수정, 의존성 배열이 빈 배열이므로 1번만 동작
  useEffect(() => {
    setVolume(5);
  }, []);

  // useEffect 를 사용하여 의존성 배열의 값이 변경될 때마다 매번 호출
  useEffect(() => {
    console.log(`볼륨이 ${volume}으로 변경되었습니다.`);
  }, [volume]);

  return (
    <div
      className={'border border-2 border-primary rounded-3 m-4 p-5 d-flex justify-content-center'}
    >
      <button
        type={'button'}
        className={'btn btn-success'}
        onClick={() => {
          // 삼항연산자로 volume 의 값이 0 미만, 10 초과를 못하도록 설정
          // setVolume() 를 사용하여 state 로 관리되는 변수 volume 의 값을 수정
          volume + 1 > 10 ? setVolume(10) : setVolume(volume + 1);
        }}
      >{' + '}
      </button>
      <p>
        <span className={'fs-3 mx-3'}>{volume}</span>
      </p>
      <button
        type={'button'}
        className={'btn btn-info'}
        onClick={() => {
          volume - 1 < 0 ? setVolume(0) : setVolume(volume - 1);
        }}
      >{' - '}
      </button>
    </div>
  );
}

export default VolumeControl;