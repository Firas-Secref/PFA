package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.Login;
import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.Entity.Users;
import com.PFA.BACK_END.Repository.UsersRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public Users findByUsername(String username){
        return this.usersRepository.findByUsername(username);
    }


    public boolean login(String loginUser) throws JsonProcessingException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        ObjectMapper mapper = new ObjectMapper();
        Login usernameAndPassword = mapper.readValue(loginUser, Login.class);
        System.out.println(loginUser);
        System.out.println(usernameAndPassword.getPassword());
        System.out.println(usernameAndPassword.getUsername());
        Users user = this.findByUsername(usernameAndPassword.getUsername());

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
}
