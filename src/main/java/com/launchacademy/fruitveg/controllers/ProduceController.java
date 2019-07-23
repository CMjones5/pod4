package com.launchacademy.fruitveg.controllers;

import com.launchacademy.fruitveg.models.Produce;
import com.launchacademy.fruitveg.repositories.ProduceRepository;
import javax.validation.Valid;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
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
  @GetMapping("/new")
  public String getNewForm(@ModelAttribute Produce produce, Model model) {
    model.addAttribute("produce", produce);
    return "produce/new";
  }
  @PostMapping("/new")
  public String create(@ModelAttribute @Valid Produce produce, BindingResult binding,
      Model model) {
    if (binding.hasErrors()) {
      return "produce/new";
    } else {
      produceRepository.save(produce);
      return "redirect:/index";
    }
  }
}
