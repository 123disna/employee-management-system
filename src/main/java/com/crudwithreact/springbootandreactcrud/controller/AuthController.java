package com.crudwithreact.springbootandreactcrud.controller;

import com.crudwithreact.springbootandreactcrud.config.JwtProvider;
import com.crudwithreact.springbootandreactcrud.model.User;
import com.crudwithreact.springbootandreactcrud.repo.UserRepo;
import com.crudwithreact.springbootandreactcrud.request.LoginRequest;
import com.crudwithreact.springbootandreactcrud.response.AuthResponse;
import com.crudwithreact.springbootandreactcrud.service.CustomeUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomeUserService customeUserService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user)throws Exception{
        String firstName=user.getFirstName();
        String lastName=user.getLastName();
        String email=user.getEmail();
        String password=user.getPassword();
        String role=user.getRole();

        User isEmailExist=userRepo.findByEmail(email);

        if(isEmailExist!=null){
            throw new Exception("email is already exists");
        }

        User savedUser = new User();
        savedUser.setFirstName(firstName);
        savedUser.setLastName(lastName);
        savedUser.setEmail(email);
        savedUser.setPassword(passwordEncoder.encode(password));
        savedUser.setRole(role);
        userRepo.save(savedUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=jwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse(token,"signup success");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest){
        String username=loginRequest.getEmail();
        String password=loginRequest.getPassword();

        Authentication authentication=authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=jwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse(token,"Signing success");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails= customeUserService.loadUserByUsername(username);
        if(userDetails==null){
            throw new BadCredentialsException("invalid username");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }

}
