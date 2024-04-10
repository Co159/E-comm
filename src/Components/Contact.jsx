import React from "react";
import Map from "../contents/Map";
import Form from "../contents/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Map />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form />
      </motion.div>
    </>
  );
};

export default Contact;
