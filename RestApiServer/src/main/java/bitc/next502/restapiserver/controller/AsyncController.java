package bitc.next502.restapiserver.controller;

import bitc.next502.restapiserver.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

//  @CrossOrigin(URL) : CORS 오류 발생 시 외부 서버의 접속을 허용하는 어노테이션, @Controller/@RestController 클래스 및 메소드에 사용할 수 있음
//  2개 이상의 URL을 허용하려면 @CrossOrigin 안에 {} 를 사용하여 URL 을 여러개 사용함

//@CrossOrigin({"http://localhost:5173", "http://localhost:3000", "http://localhost:4000"})
@RequestMapping("/api")
@RestController
public class AsyncController {

  @GetMapping({"", "/"})
  public String index() {
    return "비동기 통신 접속 테스트 페이지 입니다.";
  }

//  GET 방식 접속
//  지정한 메소드만 CORS 사용 설정
//  @CrossOrigin("http://localhost:5173")
  @GetMapping("/sendDataGet")
  public Object sendDataGet() {
    Map<String, String> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", "Axios 를 통한 GET 방식 비동기 통신");

    return result;
  }

//  GET 방식에 파라미터가 존재
  @GetMapping("/sendDataGetParam")
  public Object sendDataGetParam(@RequestParam("idx") int idx) {
    Map<String, String> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", "Axios 를 통한 파라미터가 있는 GET 방식 비동기 통신");

    return result;
  }

//  POST 방식에 파라미터가 존재
  @PostMapping("/sendDataPostParam")
  public Object sendDataPostParam(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) {
    Map<String, String> user = new HashMap<>();
    user.put("userId", userId);
    user.put("userPw", userPw);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", user);

    return result;
  }

//  PUT 방식에 파라미터가 존재
  @PutMapping("/sendDataPutParam")
  public Object sendDataPutParam(@RequestParam("idx") int idx, @RequestParam("title") String title) {
    Map<String, String> data = new HashMap<>();
    data.put("idx", String.valueOf(idx));
    data.put("title", title);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", data);

    return result;
  }

//  DELETE 방식에 파라미터가 존재
  @DeleteMapping("/sendDataDeleteParam")
  public Object sendDataDeleteParam(@RequestParam("idx") int idx) {
    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", idx - 10);

    return result;
  }
}















