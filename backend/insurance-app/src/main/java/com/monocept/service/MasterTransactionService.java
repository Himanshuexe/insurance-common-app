package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.MasterTransaction;
import com.monocept.repository.MasterTransactionRepository;

@Service
public class MasterTransactionService {
	@Autowired
	private MasterTransactionRepository repo;

	public String addTransaction(MasterTransaction transaction) {
		return repo.addTransaction(transaction);
	}
	public List<MasterTransaction> getAllMasterTransaction(){
		return repo.getAllMasterTransaction();
	}
}
