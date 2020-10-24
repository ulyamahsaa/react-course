import React from 'react';
import { ig, email, github } from '../assets';

const Contact = () => {
  const listLogo = [
    {
      id: 'instagram',
      gambar: ig,
      caption: 'instagram.com/ulyaicha',
    },
    {
      id: 'github',
      gambar: github,
      caption: 'github.com/ulyamahsaa',
    },
    {
      id: 'email',
      gambar: email,
      caption: 'ulyamahsaa@gmail.com',
    },
  ];

  return (
    <div className="contact">
      {listLogo.map((pic) => {
        return (
          <div className="Logo-img">
            <img
              id="gambar-logo"
              src={pic.gambar}
              width="700"
              height="450"
              alt={pic.id}
            />
            {/* <a href="{pic.caption}"> </a> */}
            <p>{pic.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
