package com.launchacademy.fruitveg.repositories;

import com.launchacademy.fruitveg.models.Comment;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CommentRepository extends PagingAndSortingRepository <Comment, Integer> {

}
