package com.example.kulcssoftapp.demo.controller;

import com.example.kulcssoftapp.demo.config.JwtTokenUtil;
import com.example.kulcssoftapp.demo.model.AuthToken;
import com.example.kulcssoftapp.demo.model.LogInUser;
import com.example.kulcssoftapp.demo.model.RegisterUser;
import com.example.kulcssoftapp.demo.model.User;
import com.example.kulcssoftapp.demo.service.UserService;
import com.example.kulcssoftapp.demo.utils.AuthenticationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired UserService userService;
    @Autowired AuthenticationUtils authenticationUtils;
    @Autowired JwtTokenUtil jwtTokenUtil;
    @Autowired AuthenticationManager authenticationManager;

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody RegisterUser registerUser) {
        if(userService.findByUserName(registerUser.getUserName()) == null && userService.findByEmail(registerUser.getUserEmail()) == null) {
            authenticationUtils.registerNewUser(registerUser);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Ez a felhasználónév vagy email-cím már foglalt", HttpStatus.CONFLICT);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LogInUser logInUser) throws AuthenticationException {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        logInUser.getUserName(),
                        logInUser.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final User user = userService.findByUserName(logInUser.getUserName());
        if(user != null) {
            List<Object> entities = new ArrayList<>();
            final String token = jwtTokenUtil.generateToken(user);
            entities.add(new AuthToken(token));
            entities.add(user);
            return new ResponseEntity<>(entities, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }



}
