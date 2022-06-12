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

import com.monocept.model.InsurancePlan;
import com.monocept.model.InsuranceType;
import com.monocept.service.InsuranceService;

@RestController
@RequestMapping("/api/v1/insurance")
public class InsuranceController {
	@Autowired
	private InsuranceService insuranceService;
	
	@PostMapping("/addInsuranceType")
	public ResponseEntity<Boolean> addInsuranceType(@RequestBody InsuranceType type) {
		insuranceService.addInsuranceType(type);
		return ResponseEntity.ok(true);
	}
	
	@GetMapping("/insuranceType")
	public ResponseEntity<List<InsuranceType>> getInsuranceTypes(){
		return ResponseEntity.ok(insuranceService.getInsuranceTypes());
	}
	
	@GetMapping("/insuranceType/{id}")
	public ResponseEntity<InsuranceType> getInsuranceTypeById(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.getInsuranceTypeById(id));
	}
	
	@GetMapping("/insuranceType/{id}/activate")
	public ResponseEntity<String> activateInsuranceType(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.activateInsuranceType(id));
	}
	
	@GetMapping("/insuranceType/{id}/deactivate")
	public ResponseEntity<String> deactivateInsuranceType(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.deactivateInsuranceType(id));
	}
	
	@GetMapping("/insuranceType/{id}/delete")
	public ResponseEntity<String> deleteInsuranceType(@PathVariable("id") int id){
		return ResponseEntity.ok(insuranceService.deleteInsuranceType(id));
	}
	/////////////
	
	@PostMapping("/{id}/addInsurancePlan")
	public ResponseEntity<Boolean> addInsurancePlan(@RequestBody InsurancePlan plan,@PathVariable("id") int insuranceTypeId) {
		System.out.println(insuranceTypeId+"  from controller");
		insuranceService.addInsurancePlan(plan, insuranceTypeId);
		return ResponseEntity.ok(true);
	}
	//////////////////
	@GetMapping("/insurancePlan")
	public ResponseEntity<List<InsurancePlan>> getInsurancePlans(){
		return ResponseEntity.ok(insuranceService.getInsurancePlans());
	}
	
	@GetMapping("/insurancePlan/{id}")
	public ResponseEntity<InsurancePlan> getInsurancePlanById(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.getInsurancePlanById(id));
	}
	
	@GetMapping("/insurancePlan/{id}/activate")
	public ResponseEntity<String> activateInsurancePlan(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.activateInsurancePlan(id));
	}
	
	@GetMapping("/insurancePlan/{id}/deactivate")
	public ResponseEntity<String> deactivateInsurancePlan(@PathVariable("id") int id) {
		return ResponseEntity.ok(insuranceService.deactivateInsurancePlan(id));
	}
	
	@GetMapping("/insurancePlan/{id}/delete")
	public ResponseEntity<String> deleteInsurancePlan(@PathVariable("id") int id){
		return ResponseEntity.ok(insuranceService.deleteInsurancePlan(id));
	}

}
