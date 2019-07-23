package com.launchacademy.fruitveg.controllers;

import com.launchacademy.fruitveg.repositories.ProduceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ProduceController {
  private final ProduceRepository produceRepository;

  @Autowired
  public ProduceController(ProduceRepository produceRepository) {
    this.produceRepository = produceRepository;
  }
  @GetMapping("/index")
  public String getIndex(Model model) {
    model.addAttribute("produce", produceRepository.findAll());
    return "produce/index";
  }
}
