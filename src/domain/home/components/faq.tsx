import { accordion } from "@/utils/array";
import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Faq() {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black text-[#67e8bc]">
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-4 my-20 p-3">
        <div className="flex flex-col gap-5 text-center lg:text-start">
          <p className="md:text-[80px] font-bold">Frequently Asked Questions</p>
        </div>
        <div className="">
          <div className="relative px-3 lg:px-10 ">
            {accordion.map((item, id) => (
              <div
                className={
                  "bg-black mb-2  border-b border-[#67e8bc] overflow-hidden  text-[#67e8bc]" +
                  (selected == id
                    ? " border-b rounded-md overflow-hidden "
                    : "")
                }
                key={id}
              >
                <div
                  className={
                    `flex justify-between items-center h-auto p-1  cursor-pointer transition-all duration-700 ease-in-out` +
                    (selected == id ? " bg-black text-[#67e8bc]" : "")
                  }
                  onClick={() => toggle(id)}
                >
                  <h1 className=" p-1 lg:py-2 font-semibold">{item.name}</h1>
                  <span className="h-[50px] w-[50px] flex justify-center items-center rounded font-bold">
                    {selected == id ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                <div
                  className={
                    selected == id
                      ? "text-justify overflow-hidden text-sm p-2 h-auto max-h-[9999px] transition-all duration-700 ease-in-out"
                      : "text-justify overflow-hidden text-sm px-2 max-h-0 transition-all duration-700 ease-in-out"
                  }
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
