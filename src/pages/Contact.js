import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const form = useRef();
  const [copied, setCopied] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [emailError, setEmailError] = useState(""); // validation error state
  const [captchaValid, setCaptchaValid] = useState(false);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText("joannfrancisco.dev@gmail.com");
    setCoords({ x: e.clientX, y: e.clientY });
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // ✅ Simple email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.user_address.value;

    // check email format
    if (!validateEmail(emailInput)) {
      setEmailError("❌ Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); // clear error
    }

    if (!captchaValid) {
      alert("⚠️ Please verify the reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        "service_tq22k3q", // Replace with your EmailJS Service ID
        "template_0erlslr", // Replace with your EmailJS Template ID
        form.current,
        "pqcJLsMxUwzttwV2t" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 3000); // hide after 3s
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-text">
          <h2 className="secondary-font">Let's Connect!</h2>
          <p>
            If you ever want to grab a cup of coffee/bubble tea (virtually) or
            just want a quick chat, you can find me on social media or you can
            send me a message here!
          </p>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* To Email */}
            <div>
              <label>To:</label>
              <input
                onClick={copyToClipboard}
                className="email-text"
                title="Click to copy"
                type="text"
                value="joannfrancisco.dev@gmail.com"
                readOnly
              />
            </div>

            {copied && (
              <div
                className="notification-bar"
                style={{
                  top: coords.y + 15,
                  left: coords.x + 15,
                }}
              >
                Email address copied!
              </div>
            )}

            {/* From Email */}
            <div>
              <label>From:</label>
              <input
                type="text"
                name="user_address"
                required
                placeholder="enter your email address"
              />
            </div>

            {/* Message */}
            <div>
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="enter your message"
              ></textarea>
            </div>

            <div className="recaptcha-container">
              <ReCAPTCHA
                className="g-recaptcha"
                sitekey="6Lfloc0rAAAAAKTT0Z7ZQTG2VejHiD0oBOT4Bo9s"
                theme="dark"
                onChange={() => setCaptchaValid(true)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit">Send Email</button>

            {/* Success / Error Notifications */}
            {status === "success" && (
              <div className="message-bar success">
                ✅ Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="message-bar error">
                ❌ Failed to send. Please try again.
              </div>
            )}
            {/* Error message if email is invalid */}
            {emailError && <p className="error-text">{emailError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
