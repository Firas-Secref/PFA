package com.PFA.BACK_END.services;

import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.Exceptions.UserNotFoundException;
import com.PFA.BACK_END.Repository.SuperUserRepository;
import org.springframework.stereotype.Service;

@Service
public class SuperUserService {

    private SuperUserRepository superUserRepository;

    public SuperUserService(SuperUserRepository superUserRepository) {
        this.superUserRepository = superUserRepository;
    }

    public SuperUser addSuperUser(SuperUser superUser){
        return this.superUserRepository.save(superUser);
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
        return this.superUserRepository.save(existingUser);
    }
}
