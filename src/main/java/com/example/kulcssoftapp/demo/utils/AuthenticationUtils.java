package com.example.kulcssoftapp.demo.utils;

import com.example.kulcssoftapp.demo.model.User;
import com.example.kulcssoftapp.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationUtils {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired private UserService userService;

    public void registerNewUser(RegisterUser registerUser) {
        User user = new User();
        user.setUserName(registerUser.getUserName());
        user.setUserEmail(registerUser.getUserEmail());
        user.setPassword(bCryptPasswordEncoder.encode(registerUser.getPassword()));
        userService.save(user);
    }
}
