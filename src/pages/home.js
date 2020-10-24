import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './contact';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="section1">
        <div className="content">
          <p id="hello">Hello</p>
          <h2>My name is Ulya</h2>
          <p>Frontend Web Developer</p>
          <div id="btn-AboutMe">
            <a href="#section2">More About Me</a>
          </div>
          <div>
            <p>
              You clicked
              {count}
              times
            </p>
            <button
              onClick={() => {
                return setCount(count + 1);
              }}
              type="button"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>

      <div id="section2">
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
          <br />
          <br />
          <BrowserRouter>
            <Contact />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default Home;
