// promise.js

// 프로미스란?
//  - 자바스크립트에서 비동기 함수의 동기 방식 처리를 위해서 제공하는 객체
//  - 자바스크립트는 기본적으로 싱글 스레드 방식으로 프로그램을 실행함
//  - 자바스크립트는 비동기 방식을 통해서 프로그램을 효율적으로 실행
//  - 비동기 방식으로 프로그램을 실행 중 반드시 동기 방식으로 프로그램의 실행이 이루어져야 하는 상황이 발생하고, 이때 callback 함수를 사용하여 동기 방식처럼 실행
//  - callback 을 여러 번 사용할게 될 경우 프로그램의 복잡도가 급 상승함, 이러한 콜백지옥을 처리하기 위해서 ES6에서 프로미스를 추가함

// 프로미스는 비동기 처리를 위해서 3가지 상태를 제공함
//  - Pending(대기) : 비동기 처리 로직이 완료되지 않은 상태
//  - Fulfilled(실행) : 비동기 처리가 완료되어 프로미스가 결과값에 반환된 상태
//  - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

// 프로미스는 상태에 따른 실행함수 4가지를 제공함
//  - resolve(매개변수) : 프로미스 객체 생성 시 콜백함수의 매개변수로 추가하는 첫번째 함수, 프로미스의 상태가 Fulfilled 일 경우 호출할 수 있음
//  - reject(매개변수) : 프로미스 객체 생성 시 콜백함수의 매개변수로 추가하는 두번째 함수, 프로미스의 상태가 Rejected 일 경우 호출할 수 있음
//  - then(콜백함수) : 프로미스에서 resolve() 를 실행했을 경우 프로미스 객체 외부에서 자동으로 실행되는 함수
//  - catch(콜백함수) : 프로미스에서 reject() 을 실행했을 경우 프로젝미 객체 외부에서 자동으로 실행되는 함수

//  사용법 :
//  선언 :
//  function 프로미스로 사용할 함수명(매개변수1, 매개변수2, ... ) {
//      return new Promise(function(resolve, reject) {
//          비동기 방식 실행 소스 ;
//          비동기 방식 실행 결과에 따라 resolve(), reject() 실행 ;
//      });
//  }

//  실행 :
//  프로미스를 사용한 함수명()
//    .then(function(매개변수) {
//        성공 시 실행할 소스코드... ;
//    })
//    .catch(function(매개변수) {
//        실패 시 실행할 소스코드 ... ;
//    });

function getData() {
  return new Promise(function(resolve, reject) {
    const data = 100;
    resolve(data);
    // reject('에러 발생');
  });
}

// 프로미스를 사용한 함수를 호출
getData()
  .then(function(data) {
    console.log(`프로미스 사용 반환값 : ${data}`);
  })
  .catch(function(err) {
    console.log(`프로미스 사용 오류 시 출력 메시지 : ${err}`);
  });



function getData2() {
  return new Promise(function(resolve, reject) {

    $.ajax({
      url: 'http://localhost:8080/async/sum',
      type: 'get',
      data: {num1: 10, num2: 20},
      success: function(resData) {
        alert('ajax 통신 성공!!');
        resolve(resData);
      },
      error: function(err) {
        alert('ajax 통신 실패!!');
        reject('오류 발생 원인 : ' + err);
      }
    });
  });
}

getData2()
  .then(function(resData) {
    console.log('프로미스로 비동기 프로그램이 성공');
    console.log(`가져온 데이터 : ${resData}`);
  })
  .catch(function(errData) {
    console.log('프로미스로 비동기 프로그램 실행 실패');
    console.log(errData);
  });












