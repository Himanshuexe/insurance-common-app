package com.monocept.service;

import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailParseException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {
	@Autowired
	private JavaMailSender javaMailSender;

	public EmailSender() {
		super();

	}

	public void sendEmail(String toEmail, String subject, String body) throws Exception {

		MimeMessage message = javaMailSender.createMimeMessage();
		SimpleMailMessage simpleMailMessage= new SimpleMailMessage();

		try {
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(toEmail);
			helper.setSubject(subject);
			helper.setText(body);
		} catch (MessagingException e) {
			throw new MailParseException(e);
		}
		message.setText(body, "UTF-8", "html");
		message.setSubject(subject);
		javaMailSender.send(message);

//		SimpleMailMessage message= new SimpleMailMessage();
//		message.setTo(toEmail);
//		message.setText(body);
//		message.setSubject(subject);
//		
//		javaMailSender.send(message);

	}
}
