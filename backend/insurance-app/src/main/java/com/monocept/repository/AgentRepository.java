package com.monocept.repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.Agent;
import com.monocept.model.AgentTransaction;
import com.monocept.model.Customer;
import com.monocept.model.CustomerTransaction;

@Repository
public class AgentRepository {
	@PersistenceContext
	private EntityManager em;

	public AgentRepository() {
	}

	@Transactional
	public Agent addAgent(Agent agent) {
		agent.setType("agent");
		em.persist(agent);
		return agent;
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
	@Transactional
	public Agent agentTransaction(int agentId,AgentTransaction agentTransaction) {
		Date date = new Date();
		Timestamp time = new Timestamp(date.getTime());
		agentTransaction.setTime(time);
		Agent agent = (Agent) em.createQuery("From Agent where id= " + agentId + " ").getSingleResult();
		agentTransaction.setAgent(agent);
		agent.addTransaction(agentTransaction);
		em.merge(agent);
		return agent;
	}
	public List<AgentTransaction> getSingleAgentTransaction(int agentId){
		return em.createQuery("From AgentTransaction where agent_id= "+agentId+"").getResultList();
		
	}
	
}
