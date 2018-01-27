package com.wsk.movie;

import com.wsk.movie.task.MainTask;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApplication {

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(MovieApplication.class);
		springApplication.addListeners(new MainTask());
		springApplication.run(args);
//		SpringApplication.run(MovieApplication.class, args);
	}
}
