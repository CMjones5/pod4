package com.launchacademy.fruitveg.models;


import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "produce")
@Getter
@Setter
@ToString
public class Produce {
  @Id
  @SequenceGenerator(name = "produce_generator",
      sequenceName = "produce_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "produce_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "image_url", nullable = false)
  private String imageUrl;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "description")
  private String description;

  @Column(name = "food_type", nullable = false)
  private String foodType;

@OneToMany(mappedBy = "produce", orphanRemoval = true, cascade = CascadeType.ALL)
  private Set<Comment> comments;
}