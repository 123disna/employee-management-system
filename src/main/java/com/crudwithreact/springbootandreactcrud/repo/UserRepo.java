package com.crudwithreact.springbootandreactcrud.repo;

import com.crudwithreact.springbootandreactcrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
    public User findByEmail(String email);
}
