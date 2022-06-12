package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Policy;
import com.monocept.model.dto.PolicyDto;
import com.monocept.service.PolicyService;

@RestController
@RequestMapping("/api/v1/policy")
public class PolicyController {
	@Autowired
	private PolicyService policyService;
	
	@GetMapping
	public ResponseEntity<List<PolicyDto>> getPolicies(){
		return ResponseEntity.ok(policyService.getPolicies());
	}
	
	@PostMapping("/addPolicy")
	public ResponseEntity<Boolean> addPolicy(@RequestBody Policy policy){
		policyService.addPolicy(policy);
		return ResponseEntity.ok(true);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<PolicyDto> getPolicy(@PathVariable("id") int id){
		return ResponseEntity.ok(policyService.getPolicyById(id));
	}
	
	@GetMapping("/{id}/activate")
	public ResponseEntity<String> activatePolicy(@PathVariable("id") int id){
		return ResponseEntity.ok(policyService.activatePolicy(id));
	}
	
	@GetMapping("/{id}/deactivate")
	public ResponseEntity<String> deactivatePolicy(@PathVariable("id") int id){
		return ResponseEntity.ok(policyService.deactivatePolicy(id));
	}
	
	@GetMapping("/{id}/delete")
	public ResponseEntity<String> deletePolicy(@PathVariable("id") int id){
		return ResponseEntity.ok(policyService.deletePolicy(id));
	}
	
}
