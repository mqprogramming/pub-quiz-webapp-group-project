package com.example.codeclan.quizservice.repositories;

import com.example.codeclan.quizservice.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;


public interface QuizRepository extends JpaRepository<Quiz, Long> {
}
