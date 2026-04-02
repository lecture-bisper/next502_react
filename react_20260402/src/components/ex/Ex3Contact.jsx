//  File: Ex3Contact.jsx
//  User: it
//  Date: 2026-04-02 16:20
//  Time: 오후 4:20
//  Desc :

import Ex3ContactForm from './Ex3ContactForm.jsx';

function Ex3Contact(props) {
  return (
    <div className={'row my-5'}>
      <h1 className={'mb-4'}>Contact</h1>
      <br />
      <p>
        We offer full-service catering for any event, large or small. We understand your needs and
        we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do
        not hesitate to contact us.
      </p>
      <p className={'fw-bold text-secondary'}>Catering Service, 42nd Living St, 43043 New York, NY</p>
      <p>
        You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can
        send us a message here:
      </p>

      <Ex3ContactForm />
    </div>
  );
}

export default Ex3Contact;
