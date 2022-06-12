package com.monocept.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.Agent;

@Repository
public class AgentRepository {
	@PersistenceContext
	private EntityManager em;

	public AgentRepository() {
	}

	@Transactional
	public void addAgent(Agent agent) {
		em.persist(agent);
	}

	public List<Agent> getAgents() {
		return em.createQuery("from Agent").getResultList();
	}

	public Agent getAgentById(int id) {
		return (Agent) em.createQuery("FROM Agent WHERE id = " + id + " ").getSingleResult();
	}

	@Transactional
	public String activateAgent(int id) {
		Agent agent = getAgentById(id);
		agent.setStatus(true);
		em.merge(agent);
		return "activated";
	}

	@Transactional
	public String deactivateAgent(int id) {
		Agent agent = getAgentById(id);
		agent.setStatus(false);
		em.merge(agent);
		return "deactivated";
	}

	@Transactional
	public String deleteAgent(int id) {
		Agent agent = getAgentById(id);
		agent.setDeleted(true);
		em.merge(agent);
		return id + " deleted";
	}
}
