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
             <span className="text-[#F4F4F4]">AI Solutions</span> Tailored for African Students and Users. 
            </motion.p>
            <motion.p className="text-[#67e8bc]  md:text-xl">
            <span className="text-[#F4F4F4]">Boost academic performance by 5-10x with personalized AI assistants trained on your lecture notes and past exams questions. For students,
            professionals, and creators—unlock smarter ways to learn, work, and create.</span> 
            </motion.p>
            <motion.p className="text-[#67e8bc] flex flex-col mt-20  md:text-xl">
              <span className=" uppercase">Our Offerings</span>
              <span className=""></span>
            </motion.p>
            <div className="md:w-[60%] lg:w-[40%] pl-5 text-sm md:text-base mt-2 space-y-2">
              <motion.p className="text-[#67e8bc] flex">
                <span>●</span>
                <span>
                <b>For Students in Universities, Polytechnics, Colleges, and High/Secondary Schools: </b> 
                 <span className="text-[#F4F4F4]">
                  Interact directly with your lecture notes and past exam questions. 
                  Simplify complex topics, master concepts, and excel with Campus Genie and Wise Nurse.</span>
                </span>
              </motion.p>
              {/* <motion.p className="text-[#67e8bc] flex ">
                <span>●</span>
                <span>
                <b>Wise Nurse</b>: Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant specialized for nursing and medical students
                (Anatomy, Physiology, Biochemistry etc.)
                </span>
              </motion.p> */}
              <motion.p className="text-[#67e8bc] flex ">
                <span>●</span>
                <span>
                <b>For Everyone Else: </b>
                  <span className="text-[#F4F4F4]">
                    Afro AI Chatbot powers productivity and creativity with premium tools like ChatGPT 4o and Claude 3.5 Sonnet
                    for deeper insights and smarter solutions. </span>
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
