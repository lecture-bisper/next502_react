package bitc.next502.promisetest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/async")
public class PromiseController {

  @GetMapping("/")
  public String index() {
    return "index";
  }

//  단순 view 페이지 출력용 메소드
  @GetMapping("/div")
  public String div() {
    return "div";
  }

//  ajax 로 비동기 통신을 진행하는 메소드
//  매개변수로 int 타입의 데이터를 2개 받음
  @ResponseBody
  @PostMapping("/div")
  public Object PostData(@RequestParam("num1") int num1, @RequestParam("num2") int num2){

//    클라이언트로 전달할 HashMap 타입 데이터 선언
    Map<String, Object> resData = new HashMap<>();

//    예외처리
    try {
//      실제 연산 완료된 데이터를 저장할 HashMap 타입 데이터 선언
      Map<String, Integer> result = new HashMap<>();
      result.put("num1", num1);
      result.put("num2", num2);
//      연산 후 결과값을 저장
      result.put("result", num1 / num2);

//      연산이 정상 실행되면 클라이언트로 전달할 Map 데이터에 success 를 입력
      resData.put("result", "success");
//      연산 결과를 저장
      resData.put("data", result);

    } catch (Exception e) {
//      연산 중 오류 발생 시 클라이언트로 전달할 Map 데이터에 error 를 입력
      resData.put("result", "error");
    }

//    클라이언트로 데이터를 전달
    return resData;
  }
}















