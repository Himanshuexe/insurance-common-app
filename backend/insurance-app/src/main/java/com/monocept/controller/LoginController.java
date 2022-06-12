package com.monocept.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.dto.LoginDto;
import com.monocept.service.LoginService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping(path = "/api/v1/login")
public class LoginController {
	
	public LoginController() {
		
	}
	@Autowired
	private LoginService loginService;
	@PostMapping(path = "/userlogin")
	public ResponseEntity<String> login(@RequestBody LoginDto loginDto){
		return ResponseEntity.ok(loginService.login(loginDto));
	}
	

}