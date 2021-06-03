package com.PFA.BACK_END.Repository;

import com.PFA.BACK_END.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);

}
