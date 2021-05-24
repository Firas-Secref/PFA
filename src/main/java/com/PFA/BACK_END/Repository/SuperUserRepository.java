package com.PFA.BACK_END.Repository;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface SuperUserRepository extends JpaRepository<SuperUser, Long> {

    SuperUser findByUsername(String username);

    @Query(value = "select id FROM super_user where username = ?1", nativeQuery = true)
    Long findId(String username);

//    @Query(value = "select Patient from SuperUser u join u.patients p where u.id = ?1 ")
//    List<Patient> getP(Long id);



}
