package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.Location;
import com.PFA.BACK_END.Entity.Login;
import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.Exceptions.UserNotFoundException;
import com.PFA.BACK_END.Repository.PatientRepository;
import com.PFA.BACK_END.Repository.SuperUserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class SuperUserService {

    @Autowired
    private SuperUserRepository superUserRepository;

    @Autowired
    private PatientRepository patientRepository;

    public SuperUser addSuperUser(SuperUser superUser){
        return this.superUserRepository.save(superUser);
    }

    public SuperUser addSuperUser(String user) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        SuperUser newUser = mapper.readValue(user, SuperUser.class);
        System.out.println(newUser.getUsername());
        return this.superUserRepository.save(newUser);
    }


    public SuperUser addSuperUser(MultipartFile file, String user) throws IOException {
//        ObjectMapper objectMapper = new ObjectMapper();
        ObjectMapper mapper = new ObjectMapper();
        SuperUser newUser = mapper.readValue(user, SuperUser.class);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if (fileName.contains("..")){
            System.out.println("not a valid file");
        }
        newUser.setProfileImage(Base64.getEncoder().encodeToString(file.getBytes()));
        newUser.setPassword(this.encodePassword(newUser.getPassword()));
        return this.superUserRepository.save(newUser);
    }

    public SuperUser getUserById(Long id){
        return this.superUserRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("no user belong with this id: "+id)
        );
    }

    public SuperUser updateUser(SuperUser user){
        SuperUser existingUser = this.superUserRepository.findById(user.getId()).orElseThrow(
                () -> new UserNotFoundException("user is not exist")
        );
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setAddress(user.getAddress());
        existingUser.setBirthDate(user.getBirthDate());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        existingUser.setPhoneNumber(user.getPhoneNumber());
        existingUser.setProfileImage(user.getProfileImage());
        return this.superUserRepository.save(existingUser);
    }

    public String encodePassword(String password){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }

    public SuperUser findByUsername(String username){
        return this.superUserRepository.findByUsername(username);
    }

    public Patient findPatientByUsername(String username){
        return this.patientRepository.findByUsername(username);
    }

    public boolean login(String loginUser) throws JsonProcessingException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        ObjectMapper mapper = new ObjectMapper();
        Login usernameAndPassword = mapper.readValue(loginUser, Login.class);
        System.out.println(loginUser);
        System.out.println(usernameAndPassword.getPassword());
        System.out.println(usernameAndPassword.getUsername());

        SuperUser user = this.findByUsername(usernameAndPassword.getUsername());
        Patient patient = this.patientRepository.findByUsername(usernameAndPassword.getUsername());
//        Patient patient = this.findPatientByUsername(usernameAndPassword.getUsername());
        if (user!=null){
            if (passwordEncoder.matches(usernameAndPassword.getPassword(), user.getPassword())){
                System.out.println("matche");
                return true;
            }else{
                    System.out.println("no matche");
                    return false;
                }
        }
        return false;

    }

    public Long getId(String username){
        return this.superUserRepository.findId(username);
    }


}
