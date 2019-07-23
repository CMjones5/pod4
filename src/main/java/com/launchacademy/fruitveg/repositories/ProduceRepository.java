package com.launchacademy.fruitveg.repositories;

import com.launchacademy.fruitveg.models.Produce;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProduceRepository extends PagingAndSortingRepository <Produce, Integer> {

}
