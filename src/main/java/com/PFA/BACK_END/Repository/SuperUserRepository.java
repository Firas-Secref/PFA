package com.PFA.BACK_END.Repository;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SuperUserRepository extends JpaRepository<SuperUser, Long> {

    SuperUser findByUsername(String username);

    @Query(value = "select id FROM super_user where username = ?1", nativeQuery = true)
    Long findId(String username);

    @Query(value = "select * from super_user ", nativeQuery = true)
    List<SuperUser> getP();

    @Query(value = "select username from super_user ", nativeQuery = true)
    List<SuperUser> getP1();


}
