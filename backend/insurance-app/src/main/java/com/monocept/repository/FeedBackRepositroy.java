package com.monocept.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.Feedback;
import com.monocept.model.dto.ReplyDto;

@Repository
public class FeedBackRepositroy {
	@PersistenceContext
	EntityManager entityManager;
	
	@Transactional
	public ReplyDto addFeedBack(int id,ReplyDto replyDto) {
		Feedback feedBack= (Feedback) entityManager.createQuery("From Feedback WHERE id= "+id+"").getSingleResult();
		feedBack.setReply(replyDto.getMessage());
		entityManager.merge(feedBack);
		return replyDto;
	}
	public List<Feedback> getAllFeedBack(){
		return entityManager.createQuery("From Feedback").getResultList();
	}

}
