import AccordionComp from "./accordion";

export default function WhyChooseUs() {
  return (
    <main className="w-screen h-full lg:h-screen bg-black text-white ">
      <div className="container p-3 lg:p-0 mx-auto h-full w-full flex items-center justify-center flex-col text-center">
        <div className="">
          <div>
            <h1 className="text-xl lg:text-4xl py-4 lg:py-10">
              HOW{" "}
              <span className="text-[#67e8bc]">
                AFRO AI{" "}
              </span>{" "}
              ENHANCES YOUR EXPERIENCES
            </h1>
          </div>
          <div className="grid-cols-1 lg:grid-cols-2 grid gap-20 h-full">
            <section className="col-span-1 space-y-8">
              <h2 className="lg:text-3xl text-lg">
                WHY <span className="text-[#67e8bc]">AFRO AI? </span>
              </h2>
              <p className="lg:text-lg text-sm text-justify">
              <span className="text-[#67e8bc]">Affordable AI Study Tools:</span> Interact seamlessly with your lecture notes using Campus Genie or Wisenurse via ChatGPT 4.0 or Claude 3.5 Sonnet—all 
              in one place with our AI assistant, Afro AI. Enjoy the premium features for just N3,900 (about 38 Ghanaian cedis or 311 Kenyan shillings).
              Future discounts available when you engage with our training videos on YouTube. Streamline your study experience affordably!"▌
              </p>

              <p className="lg:text-lg text-sm text-justify">
                The big idea here is not to create a new AI but to take the most
                powerful premium AI tool (ChatGPT 40 and Claude 3.5 Sonnet) that already exists and
                make it affordable for Africans. Afro AI ensures Africans can
                use the same advanced technology as anyone else, but at a price
                that makes sense for Africa.
              </p>
            </section>

            <section className="col-span-1 place-items-center flex items-center justify center h-full">
              <AccordionComp />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
