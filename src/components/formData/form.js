import { refs } from '../../refs/refs';
import{getAllContacts, postContact} from '../../api/api'
import {data} from '../../data/data' 


const contact = {
  name: '',
  number: '',
};
getAllContacts()
// .then(()=> console.log(data.contacts));

const onHandleInput = e => {
  const { name, value } = e.target;
  contact[name] = value;
};


const onHandleSubmit = e => {
  e.preventDefault();
  postContact(contact)
  .then(()=> refs.contactForm.reset())
};

refs.contactForm.addEventListener('input', onHandleInput);
refs.contactForm.addEventListener('submit', onHandleSubmit);
