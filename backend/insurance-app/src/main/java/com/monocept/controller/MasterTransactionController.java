package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.MasterTransaction;
import com.monocept.service.MasterTransactionService;

@RestController
@RequestMapping("/api/v1/masterTransaction")
public class MasterTransactionController {
	@Autowired
	private MasterTransactionService masterTransactionService;

	@PostMapping(path = "/do")
	public ResponseEntity<String> addTransaction(@RequestBody MasterTransaction transaction) {
		return ResponseEntity.ok(masterTransactionService.addTransaction(transaction));
	}
//	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(path  ="/allTransaction")
	public ResponseEntity<List<MasterTransaction>> getAllTransaction(){
		return ResponseEntity.ok(masterTransactionService.getAllMasterTransaction());
	}

}
