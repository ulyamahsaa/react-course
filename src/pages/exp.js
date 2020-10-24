import React from 'react';

const Exp = () => {
  const listExp = [
    {
      title: 'ASISTEN DOSEN, UNIVERSITAS TELKOM',
      year: 2020,
      content1:
        'Asisten Dosen dalam mata kuliah DAA (Design & Analisis Algoritma)',
      content2: 'Membantu dosen dalam memeriksa tugas kuliah dan kuis',
      content3:
        'Membahas dan mengajarkan materi responsi terkait mata kuliah DAA',
    },
    {
      title: 'SEKERTARIS DIVISI, FORTRAN 2019',
      year: 2019,
      content1:
        'Asisten Dosen dalam mata kuliah DAA (Design & Analisis Algoritma)',
      content2: 'Membuat laporan pertanggung jawaban (LPJ)',
      content3: 'Membuat notulensi di setiap rapat',
    },
    {
      title: 'FRONT-END WEB DEVELOPER, ENGINEER.CO.ID',
      year: 2018,
      content1: 'Membuat prototype website engineer.co.id',
      content2: 'membuat tampilan antar muka website',
      content3: 'Mendesign tampilan website',
    },
  ];
  return (
    <>
      <div className="content-exp">
        <div className="cardExp">
          <h2>MY EXPERIENCE</h2>
          <div className="garisExp" />
          {listExp.map((name) => {
            return (
              <div className="expContent">
                <ul>
                  <h4>{name.title}</h4>
                </ul>
                <ul>
                  <p>{name.year}</p>
                </ul>
                <p>
                  <li>{name.content1}</li>
                  <li>{name.content2}</li>
                  <li>{name.content3}</li>
                </p>
              </div>
            );
          })}
          <br />
        </div>
      </div>
    </>
  );
};

export default Exp;
