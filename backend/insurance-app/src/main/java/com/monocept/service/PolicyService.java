package com.monocept.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.monocept.model.Policy;
import com.monocept.model.dto.PolicyDto;
import com.monocept.repository.PolicyRepository;

@Repository
public class PolicyService {
	@Autowired
	private PolicyRepository repo;
	
	public void addPolicy(Policy policy) {
		repo.addPolicy(policy);
	}
	

	
	public String activatePolicy(int id) {
		return repo.activatePolicy(id);
	}
	
	public String deactivatePolicy(int id) {
		return repo.deactivatePolicy(id);
	}
	
	public String deletePolicy(int id) {
		return repo.deletePolicy(id);
	}
}
