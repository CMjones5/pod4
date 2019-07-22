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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "produce")
@Getter
@Setter
public class Produce {

  @Id
  @SequenceGenerator(name = "produce_generator",
      sequenceName = "produce_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "produce_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "image_url", nullable = false, unique = true)
  private String imageUrl;

  @Column(name = "name", nullable = false, unique = true)
  private String name;

  @Column(name = "description", unique = true)
  private String description;

  @Column(name = "type", nullable = false, unique = true)
  private String type;

@OneToMany(mappedBy = "produce")
  private Set<Comment> comments;



}