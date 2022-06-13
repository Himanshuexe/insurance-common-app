package com.monocept.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.dto.LoginDto;
import com.monocept.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository loginRepository;
	
	public String login(LoginDto loginDto) {
		return loginRepository.login(loginDto);
	}

}
