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

// const ListItem = ({ children }: { children: React.ReactNode }) => (
//   <li className="mb-2 flex items-start">
//     <span className="text-primary mr-2">●</span>
//     <span>{children}</span>
//   </li>
// );

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-black rounded-lg text-white py-[100px] shadow-xl overflow-hidden">
        <div className=" border-2 rounded border-[#67e8bc] text-white py-8 px-6">
          <h1 className="text-4xl font-bold text-center">Afro AI Privacy Policy</h1>
          <p className="text-xl text-center mt-2">
          Last updated: 01/10/2024
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <Section
            title="1. Introduction"
            icon={<Users className="w-8 h-8 text-primary" />}
          >
            <p className="mb-4">
            



              1. Introduction

              Welcome to AFRO AI  ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
           </p>
            
          </Section>
          <Section
            title="2. Information We Collect"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">We collect information that you provide directly to us when you use our Service:

          - Personal Information: This may include your name, email address, and profile information associated with your Google account when you use Google OAuth to sign in.
          - User Content: Any data and content that you input into our AI assistants or RAG application.
          - Usage Data: Information on how you use the Service, including your interactions with our AI models.
          </p>
          </Section>
          <Section
            title="3. How We Use Your Information"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">We use the information we collect for various purposes, including:

                  - To provide and maintain our Service
                  - To personalize your experience with our AI assistants and RAG application
                  - To improve our Service and develop new features
                  - To communicate with you about updates or changes to our Service
                  - To detect, prevent, and address technical issues
          </p>
          </Section>
          <Section
            title="4. Data Sharing and Disclosure"
            icon={<Users className="w-8 h-8 text-primary" />}
          >        


          <p className="mb-4">We may share your information in the following situations:

                  - With service providers who help us operate our Service (e.g., cloud storage providers)
                  - To comply with legal obligations
                  - To protect our rights, privacy, safety, or property
                  - With your consent or at your direction

                  We do not sell your personal information to third parties.
          </p>
          </Section>
          <Section
            title="5. Data Security"
            icon={<Users className="w-8 h-8 text-primary" />}
          >    
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          </Section>
          <Section
            title="6. Your Rights and Choices"
            icon={<Users className="w-8 h-8 text-primary" />}
          >    
          <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, such as:

            - Access to your personal information
            - Correction of inaccurate or incomplete information
            - Deletion of your personal information
            - Objection to or restriction of our use of your information

            To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>
          </Section>
          <Section
            title="7. Children's Privacy"
            icon={<Users className="w-8 h-8 text-primary" />}
          >    
          <p className="mb-4">Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
          </Section>
          <Section
            title="8. Changes to This Privacy Policy"
            icon={<Users className="w-8 h-8 text-primary" />}
          >    
          <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          </Section>
          <Section
            title="9. Contact Us"
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
