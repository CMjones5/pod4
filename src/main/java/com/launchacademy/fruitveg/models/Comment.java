package com.launchacademy.fruitveg.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "comments")
@Getter
@Setter
@ToString
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
  private Integer rating;

  @JsonBackReference
  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "produce_id")
  public Produce produce;
}
