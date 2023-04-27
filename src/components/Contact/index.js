import React, { useState } from "react";
function Contact() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form is submitted.");
  };

  const handleNameChange = (e) => {
    if (inputName === "") {
      alert("Name is required");
    }
  };
  const handleEmailChange = (e) => {
    if (inputEmail === "") {
      alert("Email is required");
    }
  };
  const handleMessageChange = (e) => {
    if (inputMessage === "") {
      alert("Message is required");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Contact</h1>

      <div className="form-section">
        <form class="mt-5" id="contact-form" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              required
              class="form-control"
              type="text"
              name="name"
              defaultValue={inputName}
              onBlur={handleNameChange}
              onChange={(e) => setInputName(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Please enter your preferred name
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              required
              type="email"
              class="form-control"
              name="email"
              defaultValue={inputEmail}
              onBlur={handleEmailChange}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <br></br>
            <textarea
              required
              name="message"
              defaultValue={inputMessage}
              onBlur={handleMessageChange}
              onChange={(e) => setInputMessage(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

// {
//   /* <form id="contact-form" onSubmit={handleSubmit}>
//           <div className="">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               name="name"
//               defaultValue={name}
//               onBlur={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <input
//               type="email"
//               name="email"
//               defaultValue={email}
//               onBlur={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               defaultValue={message}
//               onBlur={handleChange}
//             />
//           </div>
//           {errorMessage && (
//             <div>
//               <p className="error-text">{errorMessage}</p>
//             </div>
//           )}
//           <button type="submit">Submit</button>
//         </form> */
// }
