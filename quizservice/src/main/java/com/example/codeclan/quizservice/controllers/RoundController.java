package com.example.codeclan.quizservice.controllers;

import com.example.codeclan.quizservice.models.Quiz;
import com.example.codeclan.quizservice.models.Round;
import com.example.codeclan.quizservice.repositories.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rounds")
public class RoundController {

    @Autowired
    RoundRepository roundRepository;

    // INDEX
    @GetMapping
    public ResponseEntity<List<Round>> getAllRounds(){
        return new ResponseEntity<>(roundRepository.findAll(), HttpStatus.OK);
    }

    //GET ONE ROUND
    @GetMapping(value="/{id}")
    public ResponseEntity<Round> getRound(@PathVariable Long id) {
        return new ResponseEntity(roundRepository.findById(id), HttpStatus.OK);
    }

    //CREATE
    @PostMapping
    public ResponseEntity<Round> postRound(@RequestBody Round round){
        roundRepository.save(round);
        return new ResponseEntity<>(round, HttpStatus.CREATED);
    }

    //UPDATE
    @PutMapping(value="/{id}")
    public ResponseEntity<Round> putRound(@RequestBody Round round){
        roundRepository.save(round);
        return new ResponseEntity<>(round, HttpStatus.OK);
    }

    //DELETE
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Long> deleteRound(@PathVariable Long id){
        roundRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
