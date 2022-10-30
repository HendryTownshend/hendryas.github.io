import React from "react";
// import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
// import Skill from "../elements/Skill";

const aboutContent = {
  name: "Hendry Agus Setiawan",
  avatarImage: "/images/profile/profile.png",
  content:
    "Seorang Fresh Graduate dari Universitas Dian Nuswantoro, yang memiliki minat untuk menjadi Full Stack Web Developer. Mengikuti course online dan mencari sebuah project untuk meningkatkan skill, serta mencoba banyak hal dalam mengembangkan sebuah project.",
};

// const progressData = [
//   {
//     id: 1,
//     title: "Development",
//     percantage: 85,
//     progressColor: "#FFD15C",
//   },
//   {
//     id: 2,
//     title: "UI/UX Design",
//     percantage: 95,
//     progressColor: "#FF4C60",
//   },
//   {
//     id: 3,
//     title: "Photography",
//     percantage: 70,
//     progressColor: "#6C6CE5",
//   },
// ];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/resume/Resume-HendryAgusSetiawan.pdf" target='_blank' className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  <p className="fw-bold">Basic Info</p>
                  <ul className="profile_info list_none">
                    <li>
                      <span className="title">PHONE: </span>
                      <p>+62 853 2502 6752</p>
                    </li>
                    <li>
                      <span className="title">E-MAIL: </span>
                      <a href="mailto:hendryas321@gmail.com">hendryas321@gmail.com</a>
                    </li>
                    <li>
                      <span className="title">ALAMAT: </span>
                      <p>Batang, Jawa Tengah</p>
                    </li>
                    <li>
                      <span className="title">SOCIAL: </span>
                      <p>
                        <span className="span-icons">
                          <a href="https://www.instagram.com/henthreee/" >
                            <i className="fab fa-instagram text-decoration-none"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/hendryas/" >
                            <i className="fab fa-linkedin text-decoration-none px-3"></i>
                          </a>
                          <a href="https://github.com/hendryas" >
                            <i className="fab fa-github text-decoration-none"></i>
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        {/* <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
