package com.launchacademy.fruitveg.controllers;
import com.launchacademy.fruitveg.models.Comment;
import com.launchacademy.fruitveg.models.Produce;
import com.launchacademy.fruitveg.repositories.CommentRepository;
import com.launchacademy.fruitveg.repositories.ProduceRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class ProduceRestController {
  private final ProduceRepository produceRepository;
  private final CommentRepository commentRepository;

  @Autowired
  public ProduceRestController(ProduceRepository produceRepository, CommentRepository commentRepository) {
    this.produceRepository = produceRepository;
    this.commentRepository = commentRepository;
  }

  @NoArgsConstructor
  private class ProduceNotFoundException extends RuntimeException {}

  @ControllerAdvice
  private class ProduceNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ProduceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String urlNotFoundHandler(ProduceNotFoundException exception) {
      return exception.getMessage();
    }
  }
  @GetMapping("/api/v1/produce/{id}")
  public Produce getProduce(@PathVariable Integer id) {
    return produceRepository.findById(id).orElseThrow(()-> new ProduceNotFoundException());
  }
  @GetMapping("api/v1/produce")
  public Iterable<Produce> jsonObjectsShow() {
    return produceRepository.findAll();
  }
  @PostMapping("/api/v1/produce")
  public Produce addProduce(@RequestBody Produce produce) {
    return produceRepository.save(produce);
  }
  @DeleteMapping("api/v1/produce/{id}")
  public ResponseEntity<?> deleteProduce(@PathVariable Integer id) {
    produceRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }
  @PutMapping("produce/edit/{id}")
  public ResponseEntity<?> editProduce(@RequestBody Produce produceDetails, @PathVariable Integer id) {
    Produce produce = produceRepository.findById(id).orElseThrow(() -> new ProduceNotFoundException());
    produce.setImageUrl(produceDetails.getImageUrl());
    produce.setName(produceDetails.getName());
    produce.setDescription(produceDetails.getDescription());
    produce.setFoodType(produceDetails.getFoodType());
     produceRepository.save(produce);
    return ResponseEntity.ok(produce);
  }
}
