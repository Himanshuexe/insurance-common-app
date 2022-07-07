package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Agent;
import com.monocept.model.AgentTransaction;
import com.monocept.model.Customer;
import com.monocept.model.CustomerTransaction;
import com.monocept.service.AgentService;

@RestController
@RequestMapping("/api/v1/agent")
public class AgentController {
	@Autowired
	private AgentService agentService;

//	@PreAuthorize("hasAuthority('ADMIN') || hasAuthority('NORMAl')")
	@GetMapping(path = "/all")
	public ResponseEntity<List<Agent>> getAgents() {
		return ResponseEntity.ok(agentService.getAgents());
	}

	@PostMapping("/addAgent")
	public ResponseEntity<Agent> addAgent(@RequestBody Agent agent) {
		agentService.addAgent(agent);
		return ResponseEntity.ok(agent);
	}

	@GetMapping("/single/{id}")
	public ResponseEntity<Agent> getAgentById(@PathVariable("id") int id) {
		return ResponseEntity.ok(agentService.getAgentById(id));
	}

	@GetMapping("/{id}/activate")
	public ResponseEntity<String> activateAgent(@PathVariable("id") int id) {
		return ResponseEntity.ok(agentService.activateAgent(id));
	}

	@GetMapping("/{id}/deactivate")
	public ResponseEntity<String> deactivateAgent(@PathVariable("id") int id) {
		return ResponseEntity.ok(agentService.deactivateAgent(id));
	}

	@GetMapping("/{id}/delete")
	public ResponseEntity<String> deleteAgent(@PathVariable("id") int id) {
		return ResponseEntity.ok(agentService.deleteAgent(id));
	}

	@PostMapping("/{agentId}/addAgentTransaction")
	public ResponseEntity<Agent> addCustomerTransaction(@PathVariable("agentId") int agentId,
			@RequestBody AgentTransaction agentTransaction) {
		return ResponseEntity.ok(agentService.addAgentTransaction(agentId, agentTransaction));
	}

	@GetMapping("/{agentId}/getTransactions")
	public ResponseEntity<List<AgentTransaction>> getSingleTransaction(@PathVariable("agentId") int agentId) {
		return ResponseEntity.ok(agentService.getSingleAgentTransaction(agentId));
	}
}
