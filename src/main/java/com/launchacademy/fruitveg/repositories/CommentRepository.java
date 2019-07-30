package com.launchacademy.fruitveg.repositories;

import com.launchacademy.fruitveg.models.Comment;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface CommentRepository extends PagingAndSortingRepository <Comment, Integer> {

  @Query("SELECT c from Comment c where c.produce.id = :produceId")
  public List<Comment> findAllCommentByProduceId(@Param("produceId") Integer produceId);

}
