package com.example.kulcssoftapp.demo.controller;

import com.example.kulcssoftapp.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired UserService userService;

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody RegisterUser registerUser) {
        if(userService.findByUsername(registerUser.getUsername()) == null && userService.findByEmail(registerUser.getEmail()) == null) {
            authenticationUtils.registerNewUser(registerUser);
            return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Ez a felhasználónév vagy email-cím már foglalt", HttpStatus.CONFLICT);
    }


}
