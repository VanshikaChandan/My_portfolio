import React from "react";
import pic from "../assets/mypic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[95vh] lg:min-h-[88vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[100px]"
            >
              VANSHIKA <span> CHANDAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mi-4">I am a</span>
              <TypeAnimation
                sequence={[" Student", 2000, " Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello! , currently pursuing a Bachelor of Science in Computer
              Science (Honors). With a strong passion for computer science, I am
              driven by the ability to create innovative solutions and overcome
              challenges through programming. I have a solid foundation in
              languages like Python, Java, and C++, along with experience in
              database management ,Web development, Blockchain development and
              Android development frameworks. Through practical projects, I have
              honed my skills in these domains . Thank you for visiting my
              portfolio, and I'm excited to explore potential collaborations and
              opportunities in computer science.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
          >
            <br />
            <br />
            <img
              src={pic}
              alt=" "
              style={{ height: "400px", width: "400px", borderRadius: "50%" }}
            />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-y-10 lg:gap-x-12"
        >
          <div className="flex max-w-max gap-x-40 mb-8 mx-auto lg:mx-0 text-[20px]">
            <button className="btn btn-sm">
              <a href="#contact">Contact me</a>
            </button>
            <a href="#" className="text-gradient btn-link text-[20px]">
              My Portfolio
            </a>
          </div>
          <div className="flex text-[40px] gap-x-8  max-w-max mx-auto lg:mx-0">
            <a href="https://github.com/VanshikaChandan">
              <FaGithub />
            </a>
            <a href="http://www.linkedin.com/in/vanshika-chandan-45587622b">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
