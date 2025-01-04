import afroAi from "/afroai.jpg";
import campus from "/campus.jpg";
import nurse from "/nurse.jpg";

export default function Products() {
  return (
    <main className="bg-black w-screen h-full">
      <div className="container mx-auto p-2 lg:p-0">
        <p className="text-[38px] uppercase font-bold space-x-2">
          <span className="text-white">our</span>
          <span className="text-[#67e8bc]">products</span>
        </p>

        <p className="py-5 text-white text-lg">
          Discover a range of AI products at Afro AI, designed to boost your academic performance and aspirations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full py-10 space-y-4">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              loading="lazy"
              src={afroAi}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-[#67e8bc] sm:text-2xl">
                AFRO AI CHATBOT
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                  Interact with the premium model of ChatGpt 4o using our AI assistant called "Afro"
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              loading="lazy"
              src={campus}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-[#67e8bc] sm:text-2xl">
                CAMPUS GENIE
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                  Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant for Universities, Polytechnics,
                Colleges of Education, Secondary/High School Students.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              loading="lazy"
              src={nurse}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-[#67e8bc] sm:text-2xl">
                WISE NURSE
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                   Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant specialized for nursing and medical students
                (Anatomy, Physiology, Biochemistry etc.)
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
