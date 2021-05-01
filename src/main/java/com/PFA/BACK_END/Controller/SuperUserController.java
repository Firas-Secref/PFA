package com.PFA.BACK_END.Controller;

import com.PFA.BACK_END.Entity.SuperUser;
import com.PFA.BACK_END.services.SuperUserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class SuperUserController {

    private SuperUserService userService;

    public SuperUserController(SuperUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/addUser")
    public SuperUser addUser(@RequestBody SuperUser user){
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
}
