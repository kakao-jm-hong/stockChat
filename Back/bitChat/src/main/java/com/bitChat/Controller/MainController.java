package com.bitChat.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class MainController {
	
	@GetMapping(value = {"/"})
	public String getFirstPage() {
		return "My Name is HongJeongMin";
	}
}
