import { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQSection = styled.div`
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const FAQHeading = styled.h2`
  text-align: center;
  color: #0056b3;
  font-size: 36px;
  margin-bottom: 40px;
`;

const FAQContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Question = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #f1f1f1;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Answer = styled.div`
  padding: 0 20px;
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  font-size: 16px;
  color: #555;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding-top: ${(props) => (props.isOpen ? "20px" : "0")};
  padding-bottom: ${(props) => (props.isOpen ? "20px" : "0")};
`;

const FAQs = [
  {
    question: "What is your delivery coverage area?",
    answer:
      "We deliver from Worcester to the Cape, Southern New Hampshire to Rhode Island.",
  },
  {
    question: "How do I track my delivery?",
    answer:
      "You can track your delivery within a 30-minute window on the day of your delivery.",
  },
  {
    question: "Do you offer installation services?",
    answer: "Yes, we offer installation services for various appliances.",
  },
  {
    question: "What is the cost of delivery?",
    answer:
      "The delivery cost is $199.99 for multiple items to the same address.",
  },
  {
    question: "Can I request a specific delivery time?",
    answer:
      "Yes, you can request a specific time, and we will do our best to accommodate it.",
  },
  {
    question: "Do you remove old appliances?",
    answer:
      "Yes, we remove old, disconnected appliances unless purchasing Yale installation separately.",
  },
  {
    question: "Is there an extra charge for delivery to the second floor?",
    answer: "No, delivery to the second floor is included in the flat fee.",
  },
  {
    question: "What types of payment do you accept?",
    answer: "We accept all major credit cards and online payments.",
  },
  {
    question: "Can I cancel or reschedule my delivery?",
    answer:
      "Yes, you can cancel or reschedule your delivery by contacting us in advance.",
  },
  {
    question: "Do you provide delivery notifications?",
    answer:
      "Yes, we provide automatic call-ahead notifications on the day of delivery.",
  },
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <FAQSection>
      <FAQHeading>Frequently Asked Questions</FAQHeading>
      <FAQContainer>
        {FAQs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndexes.includes(index) ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </Question>
            <Answer isOpen={openIndexes.includes(index)}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default Faq;
