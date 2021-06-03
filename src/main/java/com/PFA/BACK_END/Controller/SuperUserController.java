package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.Entity.Patient;
import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.services.SuperUserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/user")
public class SuperUserController {

    private SuperUserService userService;

    public SuperUserController(SuperUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/addUser")
    public SuperUser addUser(@RequestParam("file") MultipartFile file,@RequestParam("user") String user) throws IOException {
        return this.userService.addSuperUser(file, user);
    }

    @PostMapping("/addUser1")
    public SuperUser addUser1(@RequestParam("user") String user) throws IOException {
        return this.userService.addSuperUser(user);
    }

    @GetMapping("/getUser/{id}")
    public SuperUser getUser(@PathVariable Long id){
        return this.userService.getUserById(id);
    }

    @PutMapping("/updateUser")
    public SuperUser updateUser(@RequestBody SuperUser user){
        return this.userService.updateUser(user);
    }

//    @PostMapping("/login")
//    public boolean login(@RequestParam("loginUser") String loginForm) throws JsonProcessingException {
//        System.out.println("got it");
//        return this.userService.login(loginForm);
//    }

    @GetMapping("getUserByUsername/{username}")
    public SuperUser getUserByUsername(@PathVariable String username){
        return this.userService.findByUsername(username);
    }

    @GetMapping("getUserId/{username}")
    public Long getId(@PathVariable String username){
        return this.userService.getId(username);
    }

//
//    @GetMapping("get/{id}")
//    public List<Patient> getMy(@PathVariable Long id){
//        return this.userService.getMyPatients(id);
//    }


}
