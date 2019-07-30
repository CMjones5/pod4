package com.launchacademy.fruitveg.controllers;

import com.launchacademy.fruitveg.models.Comment;
import com.launchacademy.fruitveg.repositories.CommentRepository;
import com.launchacademy.fruitveg.repositories.ProduceRepository;
import com.launchacademy.fruitveg.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentApiController {

  private final ProduceRepository produceRepository;
  private final CommentRepository commentRepository;
  private final UserRepository userRepository;

  @Autowired
  public CommentApiController(ProduceRepository produceRepository, UserRepository userRepository, CommentRepository commentRepository) {
    this.produceRepository = produceRepository;
    this.userRepository = userRepository;
    this.commentRepository = commentRepository;
  }
  @GetMapping("/api/v1/comments/{produceId}")
  public Iterable<Comment> getList(@PathVariable Integer produceId) {
    return commentRepository.findAllCommentByProduceId(produceId);
  }
  @PostMapping("/api/v1/comments")
  public Comment addComment(@RequestBody Comment comment) {
    return commentRepository.save(comment);
  }
}

