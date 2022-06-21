package com.monocept.config;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.monocept.model.UserDetail;

public class CustomUserDetails implements UserDetails {
	private UserDetail userDetail;

	public CustomUserDetails(UserDetail userDetail) {
		super();
		this.userDetail = userDetail;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		String role = userDetail.getType().toUpperCase();
		SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(role);
		List<SimpleGrantedAuthority> lists = new ArrayList<SimpleGrantedAuthority>();
		lists.add(simpleGrantedAuthority);
		return lists;
	}

	@Override
	public String getPassword() {
		return userDetail.getPassword();
	}

	@Override
	public String getUsername() {
		return String.valueOf(userDetail.getId());
	}

	@Override
	public boolean isAccountNonExpired() {

		return true;
	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		if (userDetail.isDeleted())
			return false;
		return true;
	}

	@Override
	public boolean isEnabled() {
		if (userDetail.getStatus())
			return true;
		return false;
	}

}
