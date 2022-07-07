package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.Agent;
import com.monocept.model.AgentTransaction;
import com.monocept.model.Customer;
import com.monocept.repository.AgentRepository;

@Service
public class AgentService {
	@Autowired
	private AgentRepository repo;
	
	@Autowired
	EmailSender emailSender;

	public AgentService() {

	}

	public Agent addAgent(Agent agent) {
		Agent agentGet=repo.addAgent(agent);
		try {
			emailSender.sendEmail(agent.getEmail(), "Account created successfully",
					"Greetings,<br>We are excited to welcome you to our company. Your id is " + agentGet.getId()
					+ ".");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return agentGet;
	}

	public List<Agent> getAgents() {
		return repo.getAgents();
	}

	public Agent getAgentById(int id) {
		return repo.getAgentById(id);
	}

	public String activateAgent(int id) {
		return repo.activateAgent(id);
	}

	public String deactivateAgent(int id) {
		return repo.deactivateAgent(id);
	}

	public String deleteAgent(int id) {
		return repo.deleteAgent(id);
	}
	public Agent addAgentTransaction(int agentId, AgentTransaction agentTransaction) {
		return repo.agentTransaction(agentId, agentTransaction);
	}
	public List<AgentTransaction> getSingleAgentTransaction(int agentId){
		return repo.getSingleAgentTransaction(agentId);
	}
}
