import React from "react";
import styles from "../styles/Contact.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zazjgc8",
        "template_1e77hsn",
        form.current,
        "83mpXeUyJy47CtyiH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent sucessfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.large}>
        <Navbar />
        <div className={styles.main}>
          <h1 className={styles.txt}>Contact us</h1>
          <p className={styles.center}>
            Any question or remarks?just write us a message
          </p>
          <div className={styles.contact}>
            <div className={styles.info}>
              <h4>Contact Information</h4>

              <p>Fill up the form and click send</p>
              <div className={styles.icon}>
                <i class="material-icons">mail_outline</i>
                <span className="px-9">ray85127@gmail.com</span>
                <br></br>

                <i class="fa fa-phone"></i>
                <span className="px-9">+9365752266</span>
                <br></br>

                <i class="fa fa-location-arrow"></i>
                <span className="px-9">Hostel4,jalukbari,GHY</span>
              </div>
              <div className={styles.social}>
                <div className={styles.circle}>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <div className={styles.maps}></div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.col}>
                <div className={styles.groups}>
                  <label>Your Name</label>
                  <br></br>
                  <input type="text" name="user_name"></input>
                </div>
                <div className={styles.groups}>
                  <label>Email</label>
                  <br></br>
                  <input type="email" name="user_email"></input>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.groups}>
                  <label>Messages</label>
                  <br></br>
                  <textarea name="message"></textarea>
                </div>
              </div>
              <div className={styles.col}>
                <input type="submit" value="Send Message" className={styles.but} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
