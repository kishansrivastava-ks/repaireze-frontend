import styled from "styled-components";

const TestimonialSection = styled.div`
  background-color: #0056b3;
  /* padding: 50px 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
`;

const TestimonialBox = styled.div`
  background-color: #0056b3;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  min-width: 250px;
`;

const Quote = styled.div`
  font-size: 50px;
  line-height: 0.1;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const ReviewerName = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const Testimonial = () => {
  return (
    <TestimonialSection>
      <TestimonialsContainer>
        <TestimonialBox>
          <Quote>&ldquo;</Quote>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At sapiente
          omnis, eos aspernatur quod placeat nemo officiis quidem id doloremque
          ratione error maiores ad quae provident, libero voluptates voluptate
          asperiores?
          <Quote>&rdquo;</Quote>
          <ReviewerName>John Doe</ReviewerName>
        </TestimonialBox>
        <TestimonialBox>
          <Quote>&ldquo;</Quote>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam amet
          debitis suscipit, explicabo vitae tempore tenetur saepe doloribus
          magni accusamus eos assumenda quod laborum consequuntur error sit,
          atque, dolore velit.
          <Quote>&rdquo;</Quote>
          <ReviewerName>Jane Smith</ReviewerName>
        </TestimonialBox>
        <TestimonialBox>
          <Quote>&ldquo;</Quote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          rem fugit itaque animi doloremque natus nihil cupiditate, delectus
          laboriosam. Quasi modi id aut nulla dolorum maiores libero porro
          magnam dolor.
          <Quote>&rdquo;</Quote>
          <ReviewerName>Robert Johnson</ReviewerName>
        </TestimonialBox>
      </TestimonialsContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
