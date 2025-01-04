import { ImagesSlider } from "./image_slider";
import { motion } from "framer-motion";

export default function Hero() {
  const images = ["/hero.png", "/hero2.png", "/hero3.png"];

  return (
    <ImagesSlider className="h-screen w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col"
      >
        <main className="w-full h-full p-3 lg:p-0">
          <div className="container mx-auto flex flex-col items-start justify-start lg:space-y-8">
            <motion.p className="text-2xl md:text-3xl text-[#67e8bc] uppercase md:w-[50%] font-bold ">
              Unlock AI Power Tailored for Africa
            </motion.p>
            <motion.p className="text-[#67e8bc]  md:text-xl">
            Access premium AI tools for a 5-10x boost in academic performance and productivity.
            </motion.p>
            <motion.p className="text-[#67e8bc] flex flex-col mt-20  md:text-xl">
              <span className=" uppercase">Our Offerings</span>
              <span className=""></span>
            </motion.p>
            <div className="md:w-[60%] lg:w-[40%] pl-5 text-sm md:text-base mt-2 space-y-2">
              <motion.p className="text-[#67e8bc] flex">
                <span>●</span>
                <span>
                <b>Campus Genie</b>: Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant for Universities, Polytechnics,
                Colleges of Education, Secondary/High School Students.
                </span>
              </motion.p>
              <motion.p className="text-[#67e8bc] flex ">
                <span>●</span>
                <span>
                <b>Wise Nurse</b>: Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant specialized for nursing and medical students
                (Anatomy, Physiology, Biochemistry etc.)
                </span>
              </motion.p>
              <motion.p className="text-[#67e8bc] flex ">
                <span>●</span>
                <span>
                <b>Afro AI ChatBot</b>: Interact with the premium model of ChatGpt 4o using our AI assistant called "Afro"  
                </span>
              </motion.p>
            </div>
            <motion.p className="">
              <div className="flex justify-center mt-10 ">
                <a
                  href="http://login.afroai.ai"
                  className=" py-3 bg-[#67e8bc] text-[#1a1a2e] font-bold px-10"
                >
                  Get started
                </a>
              </div>
            </motion.p>
          </div>
        </main>
      </motion.div>
    </ImagesSlider>
  );
}
