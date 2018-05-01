package com.example.kulcssoftapp.demo.repository;

import com.example.kulcssoftapp.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserName(String userName);
    User findByUserEmail(String userEmail);
    User findOne(Long userId);
    void deleteByUserId(Long userId);

}
