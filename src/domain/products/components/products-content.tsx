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
                className="group relative flex flex-col lg:flex-row w-full border-2 rounded-bl transition-all very-smooth duration-700 
              hover:rounded-bl-3xl hover:rounded-tr-3xl shadow-md hover:shadow-xl hover:shadow-teal-400 
              border-[#67e8bc]"
              >
                <div className="md:w-3/4 p-5">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Afro Ai
                  </h2>

                  <p className="mt-4 text-[#67e8bc]/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
                <div className="md:w-[300px] md:h-[400px] h-full hidden md:block">
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
                <div className="md:w-3/4 p-5">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Wise Nurse
                  </h2>

                  <p className="mt-4 text-[#67e8bc]/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
                <div className="md:w-[300px] md:h-[400px] h-full hidden md:block">
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
                <div className="md:w-3/4 p-5">
                  <h2 className="text-2xl font-semibold text-[#67e8bc] sm:text-3xl">
                    Campus Genie
                  </h2>

                  <p className="mt-4 text-[#67e8bc]/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
                <div className="md:w-[300px] md:h-[400px] h-full hidden md:block">
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
