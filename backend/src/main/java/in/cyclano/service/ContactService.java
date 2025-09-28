package in.cyclano.service;

import java.util.List;

import org.springframework.stereotype.Service;

import in.cyclano.dao.ContactDao;
import in.cyclano.entity.Contact;

@Service
public class ContactService {

	private final ContactDao contactDao;
	
	public ContactService (ContactDao contactDao) {
		this.contactDao = contactDao;
	}
	
	public Contact saveContact (Contact contact) {
		return contactDao.save(contact);
	}
	
	public List <Contact> listAll () {
		return contactDao.findAll();
	}

	public Contact updateContact(Contact contact) {
		return contactDao.update(contact);
	}

	public void deleteContact(Integer id) {
		contactDao.deleteById(id);
	}
	
}
