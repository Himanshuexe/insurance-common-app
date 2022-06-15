package com.monocept.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.InsurancePlan;
import com.monocept.model.InsuranceType;
import com.monocept.model.dto.InsurancePlanDto;
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
	
	public List<InsurancePlanDto> getInsurancePlans(){
		return repo.getInsurancePlans().stream().map(p-> new InsurancePlanDto(p.getId(),p.getName() , p.getInsuranceType().getName(), p.getDescription(), p.getNewRegistrationCommission(), p.getInstallmentPaymentCommission(), p.getPolicyTermMin(), p.getPolicyTermMax(), p.getMinAge(), p.getMaxAge(), p.getSumAssuredMin(), p.getSumAssuredMax(), p.getProfitRatio(), p.getStatus(), p.isDeleted())).collect(Collectors.toList());
	}
	
	public InsurancePlanDto getInsurancePlanById(int id) {
		InsurancePlan p = repo.getInsurancePlanById(id);   
		return new InsurancePlanDto(p.getId(),p.getName() , p.getInsuranceType().getName(), p.getDescription(), p.getNewRegistrationCommission(), p.getInstallmentPaymentCommission(), p.getPolicyTermMin(), p.getPolicyTermMax(), p.getMinAge(), p.getMaxAge(), p.getSumAssuredMin(), p.getSumAssuredMax(), p.getProfitRatio(), p.getStatus(), p.isDeleted());
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
