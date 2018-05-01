package com.example.kulcssoftapp.demo.controller;

import com.example.kulcssoftapp.demo.model.User;
import com.example.kulcssoftapp.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired UserService userService;

    @GetMapping("/user")
    public List<User> listAllUser(){ return userService.findAll(); }

    @GetMapping("/user/{id}/deleteUser")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        if(userService.findById(id) != null) {
            userService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }



}
