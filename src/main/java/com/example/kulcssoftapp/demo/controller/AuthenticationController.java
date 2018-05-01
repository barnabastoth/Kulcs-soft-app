package com.example.kulcssoftapp.demo.controller;

import com.example.kulcssoftapp.demo.model.RegisterUser;
import com.example.kulcssoftapp.demo.service.UserService;
import com.example.kulcssoftapp.demo.utils.AuthenticationUtils;
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
    @Autowired AuthenticationUtils authenticationUtils;

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody RegisterUser registerUser) {
        if(userService.findByUserName(registerUser.getUserName()) == null && userService.findByEmail(registerUser.getUserEmail()) == null) {
            authenticationUtils.registerNewUser(registerUser);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Ez a felhasználónév vagy email-cím már foglalt", HttpStatus.CONFLICT);
    }


}
