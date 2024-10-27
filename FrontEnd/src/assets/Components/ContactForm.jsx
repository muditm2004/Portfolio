import React, { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  const form = useRef(null);
  const submit_btn = useRef(null);

  useEffect(() => {
    form.current.addEventListener("submit", function (e) {
      e.preventDefault();

      const loadingToast = toast.loading("Sending Details...");
      submit_btn.current.disabled = true;

      const formData = new FormData(form.current);
      const formJSON = {};
      formData.forEach((value, key) => {
        formJSON[key] = value;
      });

      fetch("https://foliobackend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formJSON),
      })
        .then((response) => {
          submit_btn.current.disabled = false;

          if (response.ok) {
            toast.update(loadingToast, {
              render: "Details Received. Will get back to you soon.",
              type: "success",
              autoClose: 5000,
              isLoading: false,
              closeOnClick: true,
            });
          } else {
            toast.update(loadingToast, {
              render: "Something went wrong. Please try again later.",
              type: "error",
              autoClose: 5000,
              isLoading: false,
              closeOnClick: true,
            });
          }
        })
        .catch((error) => {
          toast.update(loadingToast, {
            render: "Something went wrong. Please try again later.",
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeOnClick: true,
          });
          submit_btn.current.disabled = false;
        });
    });
  }, []);

  return (
    <>
    <div id="ContactSection">
      <ToastContainer position="bottom-right" />
      <div className="contactFormPhrase">
        <h2>To Get In Touch</h2>
        <p>
          Please fill the form below & I will get back to you as soon as
          possible.
        </p>
      </div>
      <form className="form" ref={form}>
        <input
          type="text"
          className="inputText"
          name="name"
          required
          placeholder="Your Name"
        />
        <input
          type="email"
          className="inputText"
          name="email"
          required
          placeholder="Your Email"
        />
        <input
          type="text"
          className="inputText"
          name="subject"
          required
          placeholder="Reason for contacting me"
        />
        <textarea
          className="inputMsgBox"
          name="message"
          required
          placeholder="Write your message here..."
        />
    
        <button
          type="submit"
          className="submitBtn"
          style={{ fontSize: 18, textAlign: "right" }}
          ref={submit_btn}
          // disabled="true"
        >

          Get in Touch
        </button>
 
      </form>
      </div>
    </>
  );
}
