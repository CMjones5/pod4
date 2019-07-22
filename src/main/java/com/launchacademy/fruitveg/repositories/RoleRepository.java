package com.launchacademy.fruitveg.repositories;

import com.launchacademy.fruitveg.models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
  Role findByName(String name);
}
