import React from 'react';
import { ulya } from '../assets';

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="card">
          <img className="pageHome-img1" src={ulya} alt="background1" />
          <div className="container">
            <h1 id="card-name">Ulya Mahsa Anandiwa</h1>
            <p id="card-work">FrontEnd Developer</p>
          </div>
        </div>
        <div className="aboutMe">
          <h1 id="title1">About Me</h1>
          <p id="deskripsi1">
            Saya lahir di Bekasi, 6 April 1999. Saat ini, saya adalah seorang
            mahasiswa jurusan S1 Informatika di Universitas Telkom Bandung. Saya
            sangat tertarik dengan dunia IT dan memiliki rasa keingin tahuan
            yang tinggi. Saya sangat percaya diri dengan kemampuan saya yang
            kreatif, inovatif, dan selalu penuh dengan ide. Saya juga memiliki
            semangat dan motivasi untuk belajar suatu hal yang baru.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
