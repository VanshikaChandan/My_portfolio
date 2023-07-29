import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//varient
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">
              <b>About me</b>
            </h2>
            <h3 className="h3 mb-8">
              I'm a Student currently persuing Bachelor of science in Computer
              Science (honours degree) from University of Delhi .
            </h3>
            <p className="mb-4">
              I know web Development and also working on blockchain development
              and looking for the opportunities in these domain'
            </p>
            <br />
            {/* {stats} */}

            <div className="flex gap-x-8 lg:gap-x-20 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]"></div>
                Years of <br />
                Experience
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]"></div>
                Projects
                <br />
                Completed
              </div>
            </div>
            <div className="flex max-w-max gap-x-40 mb-8 mx-auto lg:mx-0 text-[20px]">
              <button className="btn btn-sm">
                <a href="#contact">Contact me</a>
              </button>
              <a href="#" className="text-gradient btn-link text-[20px]">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
