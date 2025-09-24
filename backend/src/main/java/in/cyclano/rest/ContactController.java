package in.cyclano.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.cyclano.entity.Contact;
import in.cyclano.service.ContactService;

@RestController
@RequestMapping("/contacts")
@CrossOrigin
public class ContactController {

	private final ContactService service;

	public ContactController(ContactService service) {
		this.service = service;
	}
	
	@PutMapping
	public Contact updateContact(@RequestBody Contact contact) {
		return service.updateContact(contact);
	}
	
	@PostMapping
	public Contact addContact (@RequestBody Contact contact) {
		return service.saveContact(contact);
	}
	
	@GetMapping
	public List <Contact> listAll() {
		return service.listAll();
	}
	
}
