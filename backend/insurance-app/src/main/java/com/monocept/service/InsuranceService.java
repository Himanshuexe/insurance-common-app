package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.InsurancePlan;
import com.monocept.model.InsuranceType;
import com.monocept.repository.InsuranceRepository;

@Service
public class InsuranceService {
	@Autowired
	private InsuranceRepository repo;
	
	public InsuranceService() {
		
	}
	
	public void addInsuranceType(InsuranceType type) {
		repo.addInsuranceType(type);
	}
	
	public List<InsuranceType> getInsuranceTypes(){
		return repo.getInsuranceTypes();
	}
	
	public InsuranceType getInsuranceTypeById(int id) {
		return repo.getInsuranceTypeById(id);
	}
	
	public String activateInsuranceType(int id) {
		return repo.activateInsuranceType(id);
	}
	
	public String deactivateInsuranceType(int id) {
		return repo.deactivateInsuranceType(id);
	}
	
	public String deleteInsuranceType(int id) {
		return repo.deleteInsuranceType(id);
	}
	
	public void addInsurancePlan(InsurancePlan plan, int insuranceTypeId) {
		repo.addInsurancePlan(plan, insuranceTypeId);
	}
	
	public List<InsurancePlan> getInsurancePlans(){
		return repo.getInsurancePlans();
	}
	
	public InsurancePlan getInsurancePlanById(int id) {
		return repo.getInsurancePlanById(id);
	}
	
	public String activateInsurancePlan(int id) {
		return repo.activateInsurancePlan(id);
	}
	
	public String deactivateInsurancePlan(int id) {
		return repo.deactivateInsurancePlan(id);
	}
	
	public String deleteInsurancePlan(int id) {
		return repo.deleteInsurancePlan(id);
	}
}
