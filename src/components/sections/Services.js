import React from "react";
// import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
// import Service from "../elements/Service";

// const servicesData = [
//   {
//     id: 1,
//     icon: "images/service-1.svg",
//     title: "UI/UX design",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#6C6CE5",
//     contentColor: "light",
//   },
//   {
//     id: 2,
//     icon: "images/service-2.svg",
//     title: "Web Development",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#F9D74C",
//     contentColor: "dark",
//   },
//   {
//     id: 3,
//     icon: "images/service-3.svg",
//     title: "Photography",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#F97B8B",
//     contentColor: "light",
//   },
// ];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Skills" />
        {/* <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div> */}
        <div className="text-center">
          <p className="mb-0">
            Saya terinspirasi untuk menciptakan karya hebat bersama orang-orang yang mempunyai keinginan dan ide yang bagus tentang membangun suatu karya yang luar biasa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
