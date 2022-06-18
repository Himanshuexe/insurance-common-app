package com.monocept.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.jwthelper.JwtUtil;
import com.monocept.model.Customer;
import com.monocept.model.JwtResponse;
import com.monocept.model.dto.LoginDto;
import com.monocept.service.CustomUserDetailService;
import com.monocept.service.CustomerService;
import com.monocept.service.LoginService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping(path = "/api/v1/login")
public class LoginController {
	
	public LoginController() {
		
	}
	@Autowired
	private LoginService loginService;
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CustomUserDetailService customUserDetailService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	@GetMapping(path = "welcome")
	public String welcomeLogin() {
		return "welcome user";
	}
	
	@PostMapping(path = "/userlogin")
	public ResponseEntity<String> login(@org.springframework.web.bind.annotation.RequestBody LoginDto loginDto){
		System.out.println(loginDto.getId()+" id=================user");
		System.out.println(loginDto.getPassword()+" id=================user");
		return ResponseEntity.ok(loginService.login(loginDto));
	}
	@PostMapping(path = "/tokenlogin")
	public ResponseEntity<?> generateToken(@org.springframework.web.bind.annotation.RequestBody LoginDto loginDto) throws Exception{
		System.out.println(loginDto.getId()+" id=================");
		System.out.println(loginDto.getPassword()+" id=================");
		
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getId(), loginDto.getPassword()));
		} catch (UsernameNotFoundException e) {
			throw new Exception("bad credentials");
		}catch (BadCredentialsException e) {
		 System.out.println("bad credentials");
		 throw new Exception("bad credentials");
		}
		System.out.println("working");
		UserDetails userDetails= this.customUserDetailService.loadUserByUsername(String.valueOf(loginDto.getId()));
		String token = this.jwtUtil.generateToken(userDetails);
		System.err.println("JWT token   "+token);
		
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@PostMapping(path = "/addCustomer")
	public ResponseEntity<Customer> addCustomer(@org.springframework.web.bind.annotation.RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.addCustomer(customer));
	}
}
