package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Feedback;
import com.monocept.model.dto.FeedbackDto;
import com.monocept.model.dto.ReplyDto;
import com.monocept.service.FeedbackService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping(path = "/api/v1/feedback")
public class FeedbackController {
	@Autowired
	FeedbackService feedbackService;

	public FeedbackController() {

	}

	@GetMapping(path = "/all")
	public ResponseEntity<List<FeedbackDto>> gellAllFeedback() {
		return ResponseEntity.ok(feedbackService.getAll());
	}

	@PostMapping(path = "{feedbackId}/replyFeedback")
	public ResponseEntity<ReplyDto> replyFeedback(@PathVariable("feedbackId") int id, @RequestBody ReplyDto replyDto) {
		return ResponseEntity.ok(feedbackService.addFeedback(id, replyDto));
	}
}
