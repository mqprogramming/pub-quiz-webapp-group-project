package com.example.codeclan.quizservice.repositories;

import com.example.codeclan.quizservice.models.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Long> {
    public List<QuizQuestion> findAllByRoundId(Long roundId);
}
