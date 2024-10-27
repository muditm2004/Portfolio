import React, { useState, useEffect } from "react";
import mudit from "../Media/mm2.png";
import { motion } from "framer-motion";

export default function Hero() {
  const heroTypes = ["Design! 🎨", "Develop! 👨‍💻", "Deploy! ⬆️"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 50; // Speed of typing effect in milliseconds

  useEffect(() => {
    if (charIndex < heroTypes[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + heroTypes[textIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (textIndex < heroTypes.length - 1) {
      // Move to the next text in the array
      setTimeout(() => {
        setCurrentText(""); // Reset the current text
        setCharIndex(0); // Reset character index
        setTextIndex(textIndex + 1); // Move to the next string in the array
      }, 1000); // Pause for 1 second before starting the next text
    } else {
      // Restart from the first text after the last one is typed
      setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setTextIndex(0); // Reset to the first string
      }, 1000);
    }
  }, [charIndex, textIndex, heroTypes]);

  return (
    <>
      <div id="heroSection">
        <div className="Hero-photoContainer">
          <div className="Hero-PhotoBgBlur"></div>
          <motion.div
              initial={{ scale: 0 }}
              animate={{scale: 1.2, y:160, x:-120}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
          <div className="Hero-Photo">

            
            <img src={mudit} />
           
          </div>
          </motion.div>
          <div className="Hero-photoText">
            <h1>Mudit Mehta!</h1>
            <h3 id="HeroTypeID">I can {currentText}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
