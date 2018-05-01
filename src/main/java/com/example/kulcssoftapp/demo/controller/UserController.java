package com.example.kulcssoftapp.demo.controller;

import com.example.kulcssoftapp.demo.model.User;
import com.example.kulcssoftapp.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired UserService userService;

    @RequestMapping(value="/user", method = RequestMethod.GET)
    public List<User> listUser(){ return userService.findAll(); }



}
