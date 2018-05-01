package com.example.kulcssoftapp.demo.service;

import com.example.kulcssoftapp.demo.model.User;

import java.util.List;

public interface UserService {

    User save(User user);
    List<User> findAll();
    void delete(long id);
    User findByUserName(String userName);
    User findById(Long id);
    User findByEmail(String email);
}
