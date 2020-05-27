package com.example.codeclan.quizservice.components;

import com.example.codeclan.quizservice.models.Quiz;
import com.example.codeclan.quizservice.models.QuizQuestion;
import com.example.codeclan.quizservice.models.Round;
import com.example.codeclan.quizservice.repositories.QuizQuestionRepository;
import com.example.codeclan.quizservice.repositories.QuizRepository;
import com.example.codeclan.quizservice.repositories.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    QuizQuestionRepository quizQuestionRepository;

    @Autowired
    RoundRepository roundRepository;

    @Autowired
    QuizRepository quizRepository;

    public DataLoader() {
    }

    public void run (ApplicationArguments args){

        Quiz geographyQuiz = new Quiz("Geography Quiz");
        quizRepository.save(geographyQuiz);

        Round round1 = new Round(geographyQuiz, "Landmarks");
        roundRepository.save(round1);

        Round round2 = new Round(geographyQuiz, "Capital Cities");
        roundRepository.save(round2);

        QuizQuestion question1 = new QuizQuestion("Geography","Capital of France?","Multiple Choice","Paris","Berlin", "New York", "Madrid",round1);
        quizQuestionRepository.save(question1);

        QuizQuestion question2 = new QuizQuestion("Geography","Capital of China?","Multiple Choice","Beijing","Tokyo", "Taipei", "Seoul",round1);
        quizQuestionRepository.save(question2);
    }
}
