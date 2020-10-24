import React from 'react';
import { office, phograp, prog, design } from '../assets';

const Skill = () => {
  const listSkill = [
    {
      id: 'prog',
      gambar: prog,
      title: 'Programming',
      caption:
        'Memahami bahasa pemograman seperti: Python, HTML, CSS, C++, Java, Javascript',
    },
    {
      id: 'phograp',
      gambar: phograp,
      title: 'Photography',
      caption:
        'Mampu mengambil gambar dengan baik dan memahami cara kerja kamera',
    },
    {
      id: 'office',
      gambar: office,
      title: 'Microsoft Office',
      caption:
        'Memiliki kemampuan untuk menggunakan Ms. Word, Ms. Powerpoint, dan Ms. Excel',
    },
    {
      id: 'design',
      gambar: design,
      title: 'Designing',
      caption:
        'Mampu membuat perancangan dan mendesign suatu website, seperti UI',
    },
  ];
  return (
    <>
      {/* <div className="content"> */}
      <h2 className="con-title"> What Can I Do? </h2>

      <div className="allSkill">
        {listSkill.map((pic) => {
          return (
            <div className="bg-skill">
              <img id="logo-skill" src={pic.gambar} alt={pic.id} />
              <h3>{pic.title}</h3>
              <p>{pic.caption}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      {/* </div> */}
    </>
  );
};

export default Skill;
