package com.launchacademy.fruitveg.models;


import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "comments")
@Getter
@Setter
public class Comment {

  @Id
  @SequenceGenerator(name = "comments_generator",
      sequenceName = "comments_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "comments_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "description", nullable = false)
  private String description;

  @Column(name = "rating", nullable = false)
  private int rating;

  @ManyToOne
  @JoinColumn(name="produce_id")
  private Produce produce;

}
