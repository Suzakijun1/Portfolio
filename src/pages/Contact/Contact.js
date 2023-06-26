import { ContactSec } from "./Contact.styles";
import { useState, useEffect } from "react";
import { validateEmail } from "../../utils/helpers";
import Flip from "react-reveal/Zoom";
export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <ContactSec className="contact-section container-fluid d-flex justify-content-center align-items-center">
      <Flip>
        <div className="col-md-4">
          <div className="contact-content">
            <h1>Contact Me</h1>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  id="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter message"
                  name="message"
                  id="message"
                  defaultValue={message}
                  onBlur={handleChange}
                ></textarea>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Flip>
    </ContactSec>
  );
}
