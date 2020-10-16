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
    <>
      <div className="content">
        {listEdu.map((pic) => {
          return (
            <div className="edu-content">
              <div className="pageEdu-img">
                <img src={pic.gambar} width="700" height="450" alt={pic.id} />
              </div>
            </div>
          );
        })}
        <div className="eduText">
          <h1>S1 Informatika, Universitas Telkom</h1>
          <p>(2014 - 2017)</p>
        </div>
      </div>
    </>
  );
};

export default Edu;
