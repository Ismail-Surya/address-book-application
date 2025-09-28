package in.cyclano.dao;

import java.util.List;

import in.cyclano.entity.Contact;

public interface ContactDao {

	List <Contact> findAll();
	Contact save (Contact contact);
	Contact update (Contact contact);
	void deleteById(Integer id);
	
}
