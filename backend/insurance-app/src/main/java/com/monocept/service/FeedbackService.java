package com.monocept.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.Feedback;
import com.monocept.model.dto.FeedbackDto;
import com.monocept.model.dto.ReplyDto;
import com.monocept.repository.FeedBackRepositroy;

@Service
public class FeedbackService {

	@Autowired
	FeedBackRepositroy feedBackRepositroy;
	public FeedbackService() {
		
	}
	public ReplyDto addFeedback(int id, ReplyDto replyDto) {
	return	feedBackRepositroy.addFeedBack(id, replyDto);
	}
	public List<FeedbackDto> getAll(){
		return feedBackRepositroy.getAllFeedBack().stream().map(f-> new FeedbackDto(f.getId(),f.getTitle() ,f.getMessage() ,f.getDate(),f.getReply(),f.getCustomer().getName(),f.getStatus(),f.isDeleted())).collect(Collectors.toList());
	}
}
