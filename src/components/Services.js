import React from "react";
//icon

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <section className="section" id="services">
      {/* Services
      Web development
      blockchain development
      Android development */}
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row"
        >
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">
              <b>MY SKILLS</b>
            </h2>
            <h3 className="h3 max-w-[400] mb-10">
              {" "}
              <li>Programming language : Java, C++, Python</li>
              <li>Frontend : HTML,CSS,BOOTSTRAP,React</li>
              <li>Backend : Node js ,Express </li>
              <li>Scripting : Javascript </li>
              <li>Android Development (Java)</li>
              <li>Tools : Git , Github ,VS Code</li>
              <li>Query Language : SQL</li>
              <li>
                Blockchain development ( Basics ) | Web 3 : Know basics of
                Solidity ,Truffle ,(TEZOS )
              </li>
              <li>
                General Strengths : Algorithms ,Data Structures, Object Oriented
                Programming
              </li>{" "}
            </h3>
            <a href="#work">
              <button className="btn btn-sm">See my work</button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
