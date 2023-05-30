import { ContactSec } from "./Contact.styles";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  return (
    <ContactSec className="contact-section container-fluid d-flex justify-content-center align-items-center">
      <div className="col-md-4">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <form className="form">
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Enter message"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactSec>
  );
}
