package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.Location;
import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.Entity.Users;
import com.PFA.BACK_END.Exceptions.PatientNotFoundException;
import com.PFA.BACK_END.Repository.PatientRepository;
import com.PFA.BACK_END.Repository.SuperUserRepository;
import com.PFA.BACK_END.Repository.UsersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private SuperUserRepository userRepository;

    @Autowired
    private UsersRepository usersRepository;

    public List<Patient> getAllPatients(){
        return this.patientRepository.findAll();
    }

    public Patient getPatient(Long id){
        return this.patientRepository.findById(id).orElseThrow(
                () -> new PatientNotFoundException("Patient with id = "+id+" does not exist. "));
    }

    public Patient addPatient(MultipartFile file, String patient, String location, String user) throws IOException {

        Patient newPatient = new ObjectMapper().readValue(patient, Patient.class);
        Location newLocation = new ObjectMapper().readValue(location, Location.class);

        SuperUser thatUser = new ObjectMapper().readValue(user, SuperUser.class);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if (fileName.contains("..")){
            System.out.println("not a valide file");
        }
//        Location l = new Location(12.5, 13.2, 200);
        newPatient.setLocation(newLocation);
        System.out.println("okk");
        newPatient.setUser(thatUser);
        newPatient.setPassword(this.encodePassword(newPatient.getPassword()));
        newPatient.setProfileImage(Base64.getEncoder().encodeToString(file.getBytes()));
        newPatient.setRole("PATIENT");
        Users loginUser = new Users(newPatient.getUsername(), newPatient.getPassword(), newPatient.getRole());
        this.usersRepository.save(loginUser);
        return this.patientRepository.save(newPatient);
    }


    public Patient updatePatient(Patient patient){
        Patient existingPatient = patientRepository.findById(patient.getId()).orElseThrow(
                () -> new PatientNotFoundException("patient not found"));
        System.out.println(existingPatient.getEmail());
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setBirthDate(patient.getBirthDate());
        existingPatient.setSexe(patient.getSexe());
        existingPatient.setFamilyNumber(patient.getFamilyNumber());
        existingPatient.setPhoneNumber(patient.getPhoneNumber());
        existingPatient.setPhoneNumber1(patient.getPhoneNumber1());
        existingPatient.setPhoneNumber2(patient.getPhoneNumber2());
        existingPatient.setProfileImage(patient.getProfileImage());

        return this.patientRepository.save(existingPatient);
    }

    public String deletePatient(Long id){
        this.patientRepository.deleteById(id);
        return "patient deleted successfully";
    }

    public String encodePassword(String password){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }

    public Long getUserId(String username){
        return this.patientRepository.findId(username);
    }

    public Long getPatientId(String username){
        return this.patientRepository.findId(username);
    }
//    public List<Patient> getMyPatients(String username){
//        return this.patientRepository.getMyPatients(username);
//    }

    public List<Patient> getMyPatients(Long id){
        return patientRepository.getMyPatients(id);
    }


}
