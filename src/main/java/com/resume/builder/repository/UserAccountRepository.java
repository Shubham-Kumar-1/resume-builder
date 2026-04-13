package com.resume.builder.repository;

import com.resume.builder.model.UserAccount;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserAccountRepository extends MongoRepository<UserAccount, String> {
    boolean existsByEmail(String email);
    Optional<UserAccount> findByEmail(String email);
}
