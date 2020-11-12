import React, { useContext } from 'react';
import { edu1, edu2 } from '../assets';
import ThemeContext, { themes } from './theme-context';

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

  const [theme, setTheme] = useContext(ThemeContext);
  const buttonDarkHandler = () => {
    setTheme(themes.dark);
  };
  const buttonLightHandler = () => {
    setTheme(themes.light);
  };
  // eslint-disable-next-line no-console
  console.log(theme);
  return (
    <div
      style={{
        color: theme.color,
        backgroundColor: theme.background,
        height: '100vh',
      }}
    >
      <div
        className="edu-content"
        style={{
          paddingTop: '3%',
        }}
      >
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
        <button onClick={buttonDarkHandler} type="button">
          Dark
        </button>
        <button onClick={buttonLightHandler} type="button">
          Light
        </button>
      </div>
    </div>
  );
};

export default Edu;
