package com.example.kulcssoftapp.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userId")
    private long userId;

    @Column(name = "userName", unique = true)
    private String userName;

    @Column(name = "userEmail", unique = true)
    private String userEmail;

    @Column(name = "password")
    private String password;

    public long getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
