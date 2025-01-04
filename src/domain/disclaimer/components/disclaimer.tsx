import { Users } from "lucide-react";

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-4 flex items-center">
      {icon}
      <span className="ml-2 text-[#67e8bc]">{title}</span>
    </h2>
    {children}
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 flex items-start">
    <span className="text-primary mr-2">●</span>
    <span>{children}</span>
  </li>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-black rounded-lg text-white py-[100px] shadow-xl overflow-hidden">
        <div className=" border-2 rounded border-[#67e8bc] text-white py-8 px-6">
          <h1 className="text-4xl font-bold text-center">Important Disclaimer</h1>
          <p className="text-xl text-center mt-2">
          Proper Use of Wise Nurse and Campus Genie
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <Section
            title="PLEASE READ CAREFULLY:"
            icon={<Users className="w-8 h-8 text-primary" />}
          >
            <p className="mb-4">Wise Nurse and Campus Genie are educational tools designed by Afro AI to enhance learning, 
            comprehension, and study efficiency for students across various disciplines, 
            including medical and health sciences. While these tools can significantly
             improve your understanding and retention of knowledge, it is crucial to understand their 
             limitations and proper use.

           </p>
            
          </Section>
          <Section
            title="Educational Purpose Only"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
            These tools are intended solely as study aids to help improve student performance and comprehension.
          </ListItem> 
          <ListItem>
            They should be used to enhance learning, not replace traditional study methods or professional instruction.
          </ListItem>
          </ul>
           </p>
          </Section>

          <Section
            title="Not for Professional Advice"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
          Wise Nurse should never be used to diagnose, treat, cure, or prevent any disease or medical condition.
          </ListItem> 
          <ListItem>
          Neither tool can or should be used to prescribe or recommend treatments.
          </ListItem>
          <ListItem>
          For medical information, always consult with qualified healthcare providers or your instructors.
          </ListItem>
          </ul>
           </p>
          </Section>

          <Section
            title="Academic Integrity"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
          We do not support or condone any form of exam malpractice or academic dishonesty.
          </ListItem> 
          <ListItem>
          These tools are designed to aid in understanding and learning, not to provide answers during exams or assessments.
          </ListItem>
          <ListItem>
          Users are expected to adhere to their institution's academic integrity policies.
          </ListItem>
          </ul>
           </p>
          </Section>

          <Section
            title="Performance Enhancement"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
          While our tools aim to improve study efficiency and comprehension, individual results may vary.
          </ListItem> 
          <ListItem>
          The effectiveness of these tools depends on proper and ethical use by the student.
          </ListItem>
          <ListItem>
          Users are expected to adhere to their institution's academic integrity policies.
          </ListItem>
          </ul>
           </p>
          </Section>

          <Section
            title="User Responsibility"

            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
          By using Wise Nurse and Campus Genie, you acknowledge that they are supplementary educational resources.
          
          </ListItem> 
          <ListItem>
          Users are responsible for verifying information and using these tools in compliance with their educational institution's policies.
          </ListItem>
         
          </ul>
           </p>
          </Section>

          <Section
            title="Document Handling and Financial Aspects"

            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">
          <ul className="list-none pl-5">
          <ListItem>
          We do not profit from the documents students upload. In fact, we incur costs to store these documents in our vector database.

          </ListItem> 
          <ListItem>
          The only fee students pay is for purchasing AI premium tokens, which allow interaction with the uploaded documents using premium AI models.
          </ListItem>
          <ListItem>
          Our goal is to provide an affordable service that enhances educational experiences, not to monetize student materials.
          </ListItem>
         
          </ul>
           </p>
          </Section>

          <Section
            title="Remember"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">Wise Nurse and Campus Genie are here to support your learning journey, 
            not to replace critical thinking or professional expertise.
             Use them responsibly to enhance your education and achieve your academic goals ethically.
             Stay curious, study smart, and use our tools responsibly!

          </p>
          </Section>
          
          <Section
            title="Contact Us"
            icon={<Users className="w-8 h-8 text-primary" />}
          >    
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:
                    AFRO AI
                    <span className="text-[#67e8bc]"> [support@afrocentricai.com] </span>
          </p>
          </Section>

          
          <div className="text-center mt-8">
            <a
              href="http://login.afroai.ai"
              className="bg-gradient-to-r from-[#67e8bc] to-[#40eab1] px-8 py-3 rounded-full text-lg text-black font-semibold hover:from-[#67e8bc] hover:to-green-600 transition-all duration-200"
            >
              Start Your Afro AI Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
