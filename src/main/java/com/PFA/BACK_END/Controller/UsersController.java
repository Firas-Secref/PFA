package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.services.UsersService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class UsersController {

    @Autowired
    private UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }
    @PostMapping
    public boolean login(@RequestParam("loginUser") String loginForm) throws JsonProcessingException {
        return this.usersService.login(loginForm);
    }


}
