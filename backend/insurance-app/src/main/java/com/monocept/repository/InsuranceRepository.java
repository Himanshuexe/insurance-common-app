package com.monocept.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.InsurancePlan;
import com.monocept.model.InsuranceType;

@Repository
public class InsuranceRepository {
	@PersistenceContext
	private EntityManager em;
	
	public InsuranceRepository() {
		
	}
	
	@Transactional
	public void addInsuranceType(InsuranceType type) {
		em.persist(type);
	}
	
	public List<InsuranceType> getInsuranceTypes(){
		return em.createQuery("From InsuranceType").getResultList();
	}
	
	public InsuranceType getInsuranceTypeById(int id) {
		return (InsuranceType) em.createQuery("FROM InsuranceType WHERE id = "+id+" ").getSingleResult();
	}
	
	@Transactional
	public String activateInsuranceType(int id) {
		InsuranceType insuranceType = getInsuranceTypeById(id);
		insuranceType.setStatus(true);
		em.merge(insuranceType);
		return "activated";
	}
	
	@Transactional
	public String deactivateInsuranceType(int id) {
		InsuranceType insuranceType = getInsuranceTypeById(id);
		insuranceType.setStatus(false);
		em.merge(insuranceType);
		return "deactivated";
	}
	
	@Transactional
	public String deleteInsuranceType(int id) {
		InsuranceType insuranceType = getInsuranceTypeById(id);
		insuranceType.setDeleted(true);
		em.merge(insuranceType);
		return "deleted";
	}
	
	@Transactional
	public void addInsurancePlan(InsurancePlan plan, int insuranceTypeId) {
		InsuranceType insuranceType= (InsuranceType) em.createQuery("From InsuranceType where id = "+insuranceTypeId+" ").getSingleResult();
		System.out.println(insuranceType.toString());
		plan.setInsuranceType(insuranceType);
		insuranceType.addInsurancePlans(plan);
		em.merge(insuranceType);
	}
	
	public List<InsurancePlan> getInsurancePlans(){
		return em.createQuery("From InsurancePlan").getResultList();
	}
	
	public InsurancePlan getInsurancePlanById(int id) {
		return (InsurancePlan) em.createQuery("FROM InsurancePlan WHERE id = "+id+" ").getSingleResult();
	}
	
	@Transactional
	public String activateInsurancePlan(int id) {
		InsurancePlan insurancePlan = getInsurancePlanById(id);
		insurancePlan.setStatus(true);
		em.merge(insurancePlan);
		return "activated";
	}
	
	@Transactional
	public String deactivateInsurancePlan(int id) {
		InsurancePlan insurancePlan = getInsurancePlanById(id);
		insurancePlan.setStatus(false);
		em.merge(insurancePlan);
		return "deactivated";
	}
	
	@Transactional
	public String deleteInsurancePlan(int id) {
		InsurancePlan insurancePlan = getInsurancePlanById(id);
		insurancePlan.setDeleted(true);;
		em.merge(insurancePlan);
		return "deleted";
	}
}
