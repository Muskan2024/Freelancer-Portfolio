import React from 'react';

const Testimonials = () => {
  const feedback = [
    { name: "Ankit Sharma", text: "Muskan is very professional and her work exceeded expectations." },
    { name: "Priya Verma", text: "Delivered my portfolio with perfection. Highly recommended!" }
  ];

  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      {feedback.map((item, index) => (
        <blockquote key={index}>
          <p>"{item.text}"</p>
          <footer>- {item.name}</footer>
        </blockquote>
      ))}
    </section>
  );
};

export default Testimonials;
