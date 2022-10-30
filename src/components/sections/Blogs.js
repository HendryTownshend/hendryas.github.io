import React from "react";
// import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Aplikasi E-KINERJA berbasis website Dinas Komunikasi dan Informatika Kota Pekalongan",
    image: "images/portfolio/screenshoot_ekinerja2.png",
    filesource: "../../blogs/app-ekinerja-dinas-komunikasi-dan-informatika-kota-pekalongan.md",
    category: "Website",
  },
  {
    id: 2,
    title: "Aplikasi E-DIKLAT berbasis website RSUP.Dr.Kariadi Semarang",
    image: "images/portfolio/screenshoot_ediklat1.png",
    filesource: "../../blogs/app-ediklat-rsup-dr-kariadi-semarang.md",
    category: "Website",
  },
  {
    id: 3,
    title: "Aplikasi E-COMMERCE berbasis website Satria Shop",
    image: "images/portfolio/screenshoot_ecommerce1.png",
    filesource: "../../blogs/app-ecommerce-satria-shop.md",
    category: "Website",
  },
  {
    id: 4,
    title: "Aplikasi PJTKI PT.ALPIN Kota Tegal",
    image: "images/portfolio/screenshoot_pjtki.png",
    filesource: "../../blogs/app-pjtki-kota-tegal.md",
    category: "Website",
  },
  {
    id: 5,
    title: "Aplikasi Boking Tiket Pesawat AIR PLANE",
    image: "images/portfolio/01.png",
    filesource: "../../blogs/app-boking-tiket-pesawat-air-plane.md",
    category: "Mobile",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="My Portfolio" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4 my-2" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
