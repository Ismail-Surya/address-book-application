package in.cyclano.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import in.cyclano.entity.Contact;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class ContactDaoImpl implements ContactDao {

	@PersistenceContext
//	@Autowired
	private EntityManager entityManager;
	
	public Contact save (Contact contact) {
		entityManager.persist(contact);
		return contact;
	}
	
	@Override
	public List<Contact> findAll() {
		return entityManager.createQuery("SELECT c FROM Contact c", Contact.class).getResultList();
	}

}
