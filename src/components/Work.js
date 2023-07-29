import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/Screenshot (45).png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                <b>My projects</b>
              </h2>
            </div>
            <a href="https://github.com/SaanviSingh12/Next-Trip">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="w-full h-full absolute z-40 translate-all duration-300 group-hover:bg-black/70"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=" "
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">
                    Android Application
                  </span>
                  <br></br>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Next-TRIp</span>
                </div>
              </div>
            </a>
            <div className="flex max-w-max gap-x-40 mb-8 mx-auto lg:mx-0 text-[20px]">
              <button className="btn btn-sm">
                <a href="#contact">Contact me</a>
              </button>
              <a href="#" className="text-gradient btn-link text-[20px]">
                My Portfolio
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <a href="https://crowd-funding-by-stv.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="w-full h-full absolute z-40 translate-all duration-300 group-hover:bg-black/70"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img2}
                  alt=" "
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">TEZOS DAAP</span>
                  <br></br>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">CROWDFUNDING DAPP</span>
                </div>
              </div>
            </a>
            <a href="https://github.com/VanshikaChandan/Todo_list.git">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="w-full h-full absolute z-40 translate-all duration-300 group-hover:bg-black/70"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img3}
                  alt=" "
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-2xl">
                    TODO Web Application
                  </span>
                  <br></br>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white"> Todo-list</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
