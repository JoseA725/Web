import express from 'express';
import {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
  removeAllContacts
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);
router.post('/contacts', addContact);
router.put('/contacts/:id', updateContactById);
router.delete('/contacts/:id', removeContactById);
router.delete('/contacts', removeAllContacts);

export default router;