import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Universitas Dian Nuswantoro",
    years: "2018 - 2022",
    content:
      "Belajar mengenai teknologi informasi dengan peminatan Rekayasa Perangkat Lunak dan Data Mencapai kelulusan dengan mengikuti program KKI (Kuliah Kerja Industri) yang bekerjasama dengan RSUP.Dr. kariadi Semarang.",
  },
  {
    id: 2,
    title: "SMK N 1 Kandeman",
    years: "2012 - 2015",
    content:
      "Belajar mengenai teknik pemesinan. Memiliki minat dalam teknologi dan informasi serta mencoba mempelajarinya.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    years: "2022 - Sekarang",
    content:
      "Seorang freelance yang bertugas mengerjakan project aplikasi untuk  menunjang kebutuhan klien.",
  },
  {
    id: 2,
    title: "Web Developer",
    years: "September 2021 - Maret 2022",
    content:
      "Membuat aplikasi E-DIKLAT untuk menunjang kebutuhan dalam pengadaan pelatihan dan penelitian di RSUP Dr. Kariadi Semarang yang dikembangkan oleh 2 developer.",
  },
  {
    id: 3,
    title: "Web Developer",
    years: "Juli 2021 - Agustus 2021",
    content:
      "Membuat aplikasi E-KINERJA untuk menunjang kebutuhan dalam membuat laporan harian dan bulanan untuk pegawai NON ASN di Dinas Komunikasi Dan Informatika Pekalongan.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
