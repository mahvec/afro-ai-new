import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items]);

  return (
    <div className="w-full lg:container mx-auto px-2 sm:px-0">
      {items.map((item, index) => (
        <div key={index} className="text-white border-b border-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-3 sm:p-4 text-right 
               transition-colors
              text-sm sm:text-2xl"
          >
            <span className="font-semibold truncate uppercase text-white">
              {item.title}
            </span>
            {activeIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="p-3 sm:p-4 text-gray-100 text-xs sm:text-lg">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AccordionComp: React.FC = () => {
  const accordionData: AccordionItem[] = [
    {
      title: "affordability",
      content:
        "Unlock the power of GPT-4 with very affordable pricing tailored for African contex.",
    },
    {
      title: "Localization",
      content:
        "Access innovative solutions that understand and cater to local nuances.",
    },
    {
      title: "Community",
      content:
        "Join the thriving ecosystem of like-minded individuals and organizations driving change",
    },
  ];

  return <Accordion items={accordionData} />;
};

export default AccordionComp;
