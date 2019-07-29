package com.launchacademy.fruitveg.controllers;
import com.launchacademy.fruitveg.models.Produce;
import com.launchacademy.fruitveg.repositories.ProduceRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/produce")
public class ProduceController {
  private final ProduceRepository produceRepository;

  @Autowired
  public ProduceController(ProduceRepository produceRepository) {
    this.produceRepository = produceRepository;
  }
  @GetMapping
  public String getIndex() {
    return "produce/index";
  }
  @GetMapping("/{id}")
  public String produceShow (@PathVariable Integer id) {
    return "produce/show";
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
      return "redirect:/produce";
    }
  }
}
