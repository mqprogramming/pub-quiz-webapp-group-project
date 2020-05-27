package com.example.codeclan.quizservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="rounds")
public class Round {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String topic;

    @JsonBackReference
    @OneToMany(mappedBy = "round", fetch = FetchType.LAZY)
    private List<QuizQuestion> quizQuestions;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    public Round(Quiz quiz, String topic) {
        this.quizQuestions = new ArrayList<QuizQuestion>();
        this.quiz = quiz;
        this.topic = topic;
    }

    public Round() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<QuizQuestion> getQuizQuestions() {
        return quizQuestions;
    }

    public void setQuizQuestions(List<QuizQuestion> quizQuestions) {
        this.quizQuestions = quizQuestions;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
}
