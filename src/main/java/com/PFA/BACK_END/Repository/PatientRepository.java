package com.PFA.BACK_END.Repository;

import com.PFA.BACK_END.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    Patient findByUserId(Long id);
    Patient findByUsername(String username);

    @Query(value = "select id FROM Patient where username = ?1", nativeQuery = true)
    Long findId(String username);


    @Query(value = "select username from Patient UNION select username from super_user")
    List<Patient> getMyPatients(String username);
}
