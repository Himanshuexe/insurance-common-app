package com.monocept.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.Policy;

@Repository
public class PolicyRepository {
	@PersistenceContext
	private EntityManager em;
	
	public PolicyRepository() {
		
	}
	
	@Transactional
	public void addPolicy(Policy policy) {
		em.persist(policy);
	}
	
	public List<Policy> getPolicies(){
		return em.createQuery("FROM Policy").getResultList();
	}
	
	public Policy getPolicyById(int id) {
		return (Policy) em.createQuery("FROM Policy WHERE id = "+id+" ").getSingleResult();
	}
	
	@Transactional
	public String activatePolicy(int id) {
		Policy policy = getPolicyById(id);
		policy.setStatus(true);
		em.merge(policy);
		return "activated";
	}
	
	@Transactional
	public String deactivatePolicy(int id) {
		Policy policy = getPolicyById(id);
		policy.setStatus(false);
		em.merge(policy);
		return "dactivated";
	}
	
	@Transactional
	public String deletePolicy(int id) {
		Policy policy = getPolicyById(id);
		policy.setDeleted(true);
		em.merge(policy);
		return "deleted";
	}
}
