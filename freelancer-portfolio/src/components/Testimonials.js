import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials py-12 px-6 bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Testimonials</h2>

      <div className="grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
        {/* Testimonial 1 */}
        <div className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded shadow-md transition hover:shadow-lg">
          <p className="mb-4 italic">
            "Muskan did a great job! Her code is clean and she delivered the project on time."
          </p>
          <h4 className="font-semibold text-right">- John Doe, Client</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded shadow-md transition hover:shadow-lg">
          <p className="mb-4 italic">
            "Very professional and easy to work with. I would love to work with her again!"
          </p>
          <h4 className="font-semibold text-right">- Sarah Smith, Client</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
