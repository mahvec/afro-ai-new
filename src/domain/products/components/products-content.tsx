import afroAi from "/afroai.jpg";
import campus from "/campus.jpg";
import nurse from "/nurse.jpg";

export default function ProductsContents() {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto p-3 lg:p-0">
        <section className="w-full h-full py-[100px] flex items-center justify-center p-5 text-[#67e8bc]">
          <div className="mx-auto max-w-screen-lg space-y-5">
            <p className="md:text-[36px] capitalize font-bold text-center">
              afro ai products
            </p>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              doloremque saepe architecto maiores repudiandae amet perferendis
              repellendus, reprehenderit voluptas sequi. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tenetur doloremque saepe
              architecto maiores repudiandae amet perferendis repellendus,
              reprehenderit voluptas sequi.
            </p>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full mx-auto max-w-screen-lg space-y-10">
              <div
                className="group relative flex flex-col lg:flex-row w-full h-full md:min-h-[400px] border-2 rounded-bl transition-all very-smooth duration-700 
              hover:rounded-bl-3xl hover:rounded-tr-3xl shadow-md hover:shadow-xl hover:shadow-teal-400 
              border-[#67e8bc]"
              >
                <div className="md:w-3/4 p-5 space-y-4">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Afro Ai
                  </h2>

                  <p className="mt-4 text-[#67e8bc]">
                    Afro AI is revolutionizing access to world-class artificial
                    intelligence across Africa. Our innovative platform brings
                    the power of premium AI models like ChatGPT-4o to every
                    African at an affordable rate. Interact with the premium
                    model of ChatGpt 4o using our AI assistant called "Afro" You
                    can begin using it for any and every task.
                  </p>
                  <div className="text-sm">
                    <h2 className="text-[#67e8bc] font-semibold">
                      Key Features:
                    </h2>
                    <div className="space-y-2 text-[#67e8bc]">
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">
                          Affordable Access: Pay in three African currencies,
                          making advanced AI accessible to all.
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">
                          Multilingual Support: Fluent understanding of Hausa,
                          Igbo, and Yoruba languages.
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">
                          Flexible Pricing: Purchase Units and pay only for what
                          you need – no long-term commitments. With one payment
                          you get accesss to the below integrated tools
                        </span>
                      </p>
                      <br></br>
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">Integrated Tools:</span>
                      </p>
                      <div className="ml-5 space-y-2">
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Afro AI:
                            </span>
                            Direct access to ChatGPT-4o.
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Campus Genie:
                            </span>
                            Interact with your lecture notes using premium AI.
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Wise Nurse:
                            </span>
                            For Medical students, Nurses, and Health Science
                            students to interact with their lecture notes using
                            premium AI.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[400px] h-full hidden md:block">
                  <img
                    alt=""
                    loading="lazy"
                    src={afroAi}
                    className="h-full w-full object-cover transition-all duration-700 very-smooth 
                                group-hover:rounded-tr-3xl"
                  />
                  <p
                    className="absolute right-0 group-hover:rounded-tr-3xl w-[200px] -h-[100px] p-2  opacity-0 transition-all duration-700 text-teal-400 text-xs 
                group-hover:text-black  transform  group-hover:top-0 group-hover:opacity-100 group-hover:bg-[#67e8bc] group-hover:rounded-bl-xl text-center uppercase font-semibold group-hover:height-auto -top-1"
                  >
                    Afro Ai
                  </p>
                </div>
              </div>

              <div
                className="group relative flex flex-col lg:flex-row-reverse w-full border-2 rounded-bl transition-all very-smooth duration-700 
              hover:rounded-bl-3xl hover:rounded-tr-3xl shadow-md hover:shadow-xl hover:shadow-teal-400 
              border-[#67e8bc]"
              >
                <div className="md:w-3/4 p-5 space-y-4">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Wise Nurse: Your AI Study Buddy for Health Students
                  </h2>

                  <p className="mt-4 text-[#67e8bc]">
                    Imagine having a super-smart friend who knows all your class
                    notes (Anatomy, Physiology, Biochemistry etc) and can answer
                    any question about them. That's Wise Nurse! It's a cool new
                    tool that uses artificial intelligence to help all medical
                    students (Nurses, Medical Students and all Students related
                    to Health Sciences) study better and understand your
                    lectures more easily.
                  </p>

                  <div className="space-y-2 text-sm text-[#67e8bc]">
                    <h2 className="text-[#67e8bc] font-semibold">
                      How Wise Nurse Works:
                    </h2>
                    <div className="space-y-2">
                      <p className="">
                        <span>1.</span>
                        <span className="ml-2">
                          Send your lecture notes or past exam questions to{" "}
                          <span className="lowercase text-[#67e8bc]">
                            documents@afroai.ai
                          </span>
                          Name your lecture notes like this:
                          Course_University_Level ({" "}
                          <span className=" text-[#67e8bc]">
                            Anatomy401_UniversityOfJos_400level
                          </span>{" "}
                          ).
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>2.</span>
                        <span className="ml-2">
                          We run a check on the uploaded lecture note making
                          sure it's clear, readable and doesn't contain
                          profanity. If it passes our quality check, we go ahead
                          to upload it to our AI database where
                          <span className=" text-[#67e8bc]">Wise Nurse</span>
                          can interact with your lecture notes.
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>3.</span>
                        <span className="ml-2">
                          {" "}
                          We'll send you an email notifying you when to begin
                          using{" "}
                          <span className=" text-[#67e8bc]">Wise Nurse</span> to
                          study, create mock tests/examinations and explain
                          complex topics in a way a class 6 pupil can
                          understand.
                        </span>
                      </p>
                      <br></br>
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">Cool Things to Know:</span>
                      </p>
                      <div className="ml-5 space-y-2">
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Save Time:
                            </span>{" "}
                            Check our list of already uploaded courses If your
                            notes are there, you can use them right away!
                            (Coming Soon).
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Learn How to Use It:
                            </span>{" "}
                            Watch short videos on our YouTube channel or check
                            our resources section to become a Wise Nurse pro
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Select which Premium AI to use:
                            </span>{" "}
                            You can use either ChatGPT or Claude AI to interact
                            with your lecture notes on Wise Nurse.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[400px] h-full hidden md:block">
                  <img
                    alt="wise nurse"
                    loading="lazy"
                    src={nurse}
                    className="h-full w-full object-cover transition-all duration-700 very-smooth 
                                group-hover:rounded-bl-3xl"
                  />
                  <p
                    className="absolute right-0 group-hover:rounded-tr-3xl w-[200px] -h-[100px] p-2  opacity-0 transition-all duration-700 text-teal-400 text-xs 
                group-hover:text-black  transform  group-hover:top-0 group-hover:opacity-100 group-hover:bg-[#67e8bc] group-hover:rounded-bl-xl text-center uppercase font-semibold group-hover:height-auto -top-1"
                  >
                    wise nurse
                  </p>
                </div>
              </div>

              <div
                className="group relative flex flex-col lg:flex-row w-full border-2 rounded-bl transition-all very-smooth duration-700 
              hover:rounded-bl-3xl hover:rounded-tr-3xl shadow-md hover:shadow-xl hover:shadow-teal-400 
              border-[#67e8bc]"
              >
                <div className="md:w-3/4 p-5 space-y-4">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Campus Genie
                  </h2>

                  <p className="mt-4 text-[#67e8bc]">
                    Imagine having a super-smart friend who knows all your class
                    notes and can answer any question about them. That's Campus
                    Genie! It's a cool new tool that uses artificial
                    intelligence to help you study better and understand your
                    lectures more easily.
                  </p>

                  <div className="space-y-2 text-sm text-[#67e8bc]">
                    <h2 className="text-[#67e8bc] font-semibold">
                      How Campus Genie Works:
                    </h2>
                    <div className="space-y-2">
                      <p className="flex items-start">
                        <span>1.</span>
                        <span className="ml-2">
                          Send your lecture notes or past exam questions to{" "}
                          <span className="lowercase text-[#67e8bc]">
                            documents@afroai.ai
                          </span>
                          &nbsp; Name your lecture notes like this:
                          Course_University_Level ({" "}
                          <span className=" text-[#67e8bc]">
                            Biology101_UniversityOfLagos_100level
                          </span>{" "}
                          ).
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>2.</span>
                        <span className="ml-2">
                          We run a check on the uploaded lecture note making
                          sure it's clear, readable and doesn't contain
                          profanity. If it passes our quality check, we go ahead
                          to upload it to our AI database where
                          <span className=" text-[#67e8bc]">Campus Genie</span>
                          can interact with your lecture notes.
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span>3.</span>
                        <span className="ml-2">
                          {" "}
                          We'll send you an email notifying you when to begin
                          using{" "}
                          <span className=" text-[#67e8bc]">
                            Campus Genie
                          </span>{" "}
                          to study, create mock tests/examinations and explain
                          complex topics in a way a class 6 pupil can
                          understand.
                        </span>
                      </p>
                      <br></br>
                      <p className="flex items-start">
                        <span>●</span>
                        <span className="ml-2">Cool Things to Know:</span>
                      </p>
                      <div className="ml-5 space-y-2">
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Save Time:
                            </span>{" "}
                            Check our list of already uploaded courses If your
                            notes are there, you can use them right away!
                            (Coming Soon).
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Learn How to Use It:
                            </span>{" "}
                            Watch short videos on our YouTube channel or check
                            our resources section to become a Campus Genie pro
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span>●</span>
                          <span className="ml-2">
                            <span className="uppercase text-[#67e8bc]">
                              Select which Premium AI to use:
                            </span>{" "}
                            You can use either ChatGPT or Claude AI to interact
                            with your lecture notes on Campus Genie.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[400px] h-full hidden md:block">
                  <img
                    alt="campus genie"
                    loading="lazy"
                    src={campus}
                    className="h-full w-full object-cover transition-all duration-700 very-smooth 
                                group-hover:rounded-tr-3xl"
                  />
                  <p
                    className="absolute right-0 group-hover:rounded-tr-3xl w-[200px] -h-[100px] p-2  opacity-0 transition-all duration-700 text-teal-400 text-xs 
                group-hover:text-black  transform  group-hover:top-0 group-hover:opacity-100 group-hover:bg-[#67e8bc] group-hover:rounded-bl-xl text-center uppercase font-semibold group-hover:height-auto -top-1"
                  >
                    campus genie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
