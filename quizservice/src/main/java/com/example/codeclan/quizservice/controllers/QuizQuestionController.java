package com.example.codeclan.quizservice.controllers;
import com.example.codeclan.quizservice.models.QuizQuestion;
import com.example.codeclan.quizservice.models.Round;
import com.example.codeclan.quizservice.repositories.QuizQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz_questions")
public class QuizQuestionController {

    @Autowired
    QuizQuestionRepository quizQuestionRepository;

    // INDEX
    @GetMapping
    public ResponseEntity<List<QuizQuestion>> getAllQuizQuestions(){
        return new ResponseEntity<>(quizQuestionRepository.findAll(), HttpStatus.OK);
    }

    //GET ONE QUESTION
    @GetMapping(value="/{id}")
    public ResponseEntity<QuizQuestion> getQuestion(@PathVariable Long id) {
        return new ResponseEntity(quizQuestionRepository.findById(id), HttpStatus.OK);
    }

    //CREATE
    @PostMapping
    public ResponseEntity<QuizQuestion> postQuizQuestion(@RequestBody QuizQuestion quizQuestion){
        quizQuestionRepository.save(quizQuestion);
        return new ResponseEntity<>(quizQuestion, HttpStatus.CREATED);
    }

    //UPDATE
    @PutMapping(value="/{id}")
    public ResponseEntity<QuizQuestion> putQuizQuestion(@RequestBody QuizQuestion quizQuestion){
        quizQuestionRepository.save(quizQuestion);
        return new ResponseEntity<>(quizQuestion, HttpStatus.OK);
    }

    //DELETE
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteQuizQuestion(@PathVariable Long id){
        quizQuestionRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }




}
