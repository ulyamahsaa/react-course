import React from 'react';
import { edu1, edu2 } from '../assets';

const Edu = () => {
  const listEdu = [
    {
      id: 'background2',
      gambar: edu1,
    },
    {
      id: 'background3',
      gambar: edu2,
    },
  ];

  return (
    <div className="edu-content">
      {listEdu.map((pic) => {
        return (
          // <div className="edu-content">
          <img id="eduPic" src={pic.gambar} alt={pic.id} />
          // </div>
        );
      })}
      <div className="eduText">
        <h2>S1 Informatika, Universitas Telkom</h2>
        <p>(2014 - 2017)</p>
        <h4>
          Saya sedang menempuh pendidikan Informatika di Universitas Telkom
          Bandung, jurusan tersebut befokus pada bidang Informatika.
        </h4>
      </div>
    </div>
  );
};

export default Edu;
