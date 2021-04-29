package com.PFA.BACK_END.Repository;

import com.PFA.BACK_END.Entity.SuperUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuperUserRepository extends JpaRepository<SuperUser, Long> {
}
