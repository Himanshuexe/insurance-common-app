package com.monocept.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class InsuranceType extends com.monocept.model.Entity {
	
	private String name;
	
	@OneToMany(mappedBy = "insuranceType", cascade = CascadeType.ALL)
	private List<InsurancePlan>  insurancePlans;
	
	public InsuranceType() {
		insurancePlans = new ArrayList<>();
	}
	
	public InsuranceType(String name, boolean status) {
		super();
		this.name = name;
		super.setStatus(status);
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public void addInsurancePlans(InsurancePlan insurancePlan) {
		insurancePlans.add(insurancePlan);
	}
	
}
