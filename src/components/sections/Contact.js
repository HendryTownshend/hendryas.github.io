import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  // const [formdata, setFormdata] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // // const [error, setError] = useState(false);
  // // const [message, setMessage] = useState("");

  // // const submitHandler = (event) => {
  // //   event.preventDefault();
  // //   if (!formdata.name) {
  // //     setError(true);
  // //     setMessage("Name is required");
  // //   } else if (!formdata.email) {
  // //     setError(true);
  // //     setMessage("Email is required");
  // //   } else if (!formdata.subject) {
  // //     setError(true);
  // //     setMessage("Subject is required");
  // //   } else if (!formdata.message) {
  // //     setError(true);
  // //     setMessage("Message is required");
  // //   } else {
  // //     setError(false);
  // //     setMessage("You message has been sent!!!");
  // //   }
  // // };

  // const handleChange = (event) => {
  //   setFormdata({
  //     ...formdata,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  // const handleAlerts = () => {
  //   if (error && message) {
  //     return <div className="alert alert-danger mt-4">{message}</div>;
  //   } else if (!error && message) {
  //     return <div className="alert alert-success mt-4">{message}</div>;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Contact Me" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Siap bekerjasama dalam membuat hal yang luar biasa. Anda dapat menghubungi saya secara langsung.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            {/* Buttons */}
            <div className="d-social">
              <a href="https://www.instagram.com/henthreee/" className="a-social">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/hendryas/" className="a-social">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=6285325026752&text=Halo, Saya ingin bekerjasama dengan anda." className="a-social">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://github.com/hendryas" className="a-social">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
