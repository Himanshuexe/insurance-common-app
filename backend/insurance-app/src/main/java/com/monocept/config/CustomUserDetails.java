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
		this.userDetail=userDetail;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		System.out.println("------" + userDetail.getType());
		String role = userDetail.getType().toUpperCase();
		System.out.println(role + "    ===============================");
		SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(role);
		List<SimpleGrantedAuthority> lists = new ArrayList<SimpleGrantedAuthority>();
		lists.add(simpleGrantedAuthority);
		return lists;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userDetail.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return String.valueOf(userDetail.getId());
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		System.out.println(userDetail.getStatus());
		if (userDetail.getStatus())
			return true;
		return false;
	}

}
