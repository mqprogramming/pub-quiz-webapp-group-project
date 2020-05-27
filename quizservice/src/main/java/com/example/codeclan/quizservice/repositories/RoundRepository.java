package com.example.codeclan.quizservice.repositories;

import com.example.codeclan.quizservice.models.Round;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoundRepository extends JpaRepository<Round, Long> {
}
