package com.example.codeclan.quizservice.controllers;

import com.example.codeclan.quizservice.models.Quiz;
import com.example.codeclan.quizservice.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    // INDEX
    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuizzes(){
        return new ResponseEntity<>(quizRepository.findAll(), HttpStatus.OK);
    }

    //GET ONE QUIZ
    @GetMapping(value="/{id}")
    public ResponseEntity<Quiz> getQuiz(@PathVariable Long id) {
        return new ResponseEntity(quizRepository.findById(id), HttpStatus.OK);
    }

    //CREATE
    @PostMapping
    public ResponseEntity<Quiz> postQuiz(@RequestBody Quiz quiz){
        quizRepository.save(quiz);
        return new ResponseEntity<>(quiz, HttpStatus.CREATED);
    }

    //UPDATE
    @PutMapping(value="/{id}")
    public ResponseEntity<Quiz> putQuiz(@RequestBody Quiz quiz){
        quizRepository.save(quiz);
        return new ResponseEntity<>(quiz, HttpStatus.OK);
    }

    //DELETE
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteQuiz(@PathVariable Long id){
        quizRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }



}
