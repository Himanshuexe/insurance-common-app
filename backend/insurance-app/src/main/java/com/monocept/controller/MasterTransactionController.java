package com.monocept.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity<String> addTransaction(MasterTransaction transaction) {
		return ResponseEntity.ok(masterTransactionService.addTransaction(transaction));
	}
