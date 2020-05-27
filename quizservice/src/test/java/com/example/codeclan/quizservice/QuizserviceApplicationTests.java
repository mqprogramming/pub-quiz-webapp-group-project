package com.example.codeclan.quizservice;

import com.example.codeclan.quizservice.models.QuizQuestion;
import com.example.codeclan.quizservice.repositories.QuizQuestionRepository;
import com.example.codeclan.quizservice.repositories.QuizRepository;
import com.example.codeclan.quizservice.repositories.RoundRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class QuizserviceApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	QuizQuestionRepository quizQuestionRepository;

	@Autowired
	RoundRepository roundRepository;

	@Autowired
	QuizRepository quizRepository;

//	@Test
//	public void canGetAllQuizQuestionsForARound() {
//		List<QuizQuestion> found = quizQuestionRepository.findAllByRoundId(1L);
//		assertEquals(2, found.size());
//	}

}
