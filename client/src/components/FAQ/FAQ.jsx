import { useState } from 'react';

const faqData = [
  {
    question: "How much will it cost?",
    answer: "To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote."
  },
  {
    question: "How long it takes to design?",
    answer: "The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client."
  },
  {
    question: "How do I associate with IT Company?",
    answer: "The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best. After that, we begin the process of development."
  },
  {
    question: "Can you help my current site look more professional?",
    answer: "Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!"
  },
  {
    question: "When do I pay?",
    answer: "For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq shadow-lg h-screen bg-opacity-10 bg-gray-500 p-6 flex flex-col justify-center items-center"
             style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDjrggeBHmf-uJbgYXy_kOfFF_ZDif18c0w&s")', backgroundSize: 'cover' }}>
      <h1 className="heading text-3xl font-bold text-blue-500 sm:py-4" id="faq">FAQ</h1>
      <div className="w-full max-w-4xl">
        {faqData.map((item, index) => (
          <div key={index} className="accordion mb-4">
            <div
              className="accordion-header bg-gray-700 text-white p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            <div
              className={`accordion-body bg-gray-300 p-4 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
