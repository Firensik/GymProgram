import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Contact US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Type your E-mail" required />
        <textarea placeholder="Write Here......" name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </motion.div>
  );
};

export default Contact;
