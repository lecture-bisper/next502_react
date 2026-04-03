package bitc.next502.restapiserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

//  스프링 웹 서버 설정을 위한 WebMvcConfigurer 인터페이슬르 상속받아 addCorsMappings() 메소드를 구현하여 CORS 설정을 서버 전체로 지정할 수 있음
//  addMapping(URL패턴) : CORS 설정을 지정할 경로를 패턴 방식으로 지정, /** 로 지정 시 스프링 서버의 모든 주소에 적용
//  allowedOrigins(허용URL) : 접근을 허용할 URL 을 지정, 여러개의 URL을 지정할 수 있음
//  allowedMethods(통신 방식) : 허용할 통신 방식을 지정, 여러개의 통신 방식을 지정할 수 있음

//  @Override
//  public void addCorsMappings(CorsRegistry registry) {
//    registry.addMapping("/**")
//        .allowedMethods("GET", "POST","PUT", "DELETE")
//        .allowedOrigins("http://localhost:5173");
//  }
}















