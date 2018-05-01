package com.example.kulcssoftapp.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String serveIndexPage() {
        return "index";
    }

}
