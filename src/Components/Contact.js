import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Type your E-mail" required />
        <textarea placeholder="Write Here......" name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
