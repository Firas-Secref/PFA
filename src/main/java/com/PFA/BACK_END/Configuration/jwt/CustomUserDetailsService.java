//package com.PFA.BACK_END.Configuration.jwt;
//
//import com.PFA.BACK_END.Entity.SuperUser;
//import com.PFA.BACK_END.services.SuperUserService;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.stream.Collectors;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    private SuperUserService userService;
//
//    public CustomUserDetailsService(SuperUserService userService) {
//        this.userService = userService;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        SuperUser userFromLocalDB = userService.findByUsername(username);
//        if (userFromLocalDB != null) {
//            return new User(userFromLocalDB.getUsername(),
//                    userFromLocalDB.getPassword(),
//                    userFromLocalDB.getRoles()
//                            .stream()
//                            .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
//                            .collect(Collectors.toList()));
//        }
//        return null;
//    }
//}
//
