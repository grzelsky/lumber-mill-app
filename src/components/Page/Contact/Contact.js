import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <div className="contactTitle">
        <h1>feel free to contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero illo praesentium assumenda dolor eos voluptatum voluptate. Accusantium, placeat eveniet? Sed aut ex sit nisi suscipit doloremque. Ipsam culpa dicta ex.</p>
      </div>
      <div className="form">
        <input type="text" placeholder=' your name' />
        <input type="email" placeholder=' email adress' />
        <textarea name="" id="" cols="30" rows="10" placeholder=' message'></textarea>
        <button>send email</button>
      </div>
    </>
  );
}

export default Contact;