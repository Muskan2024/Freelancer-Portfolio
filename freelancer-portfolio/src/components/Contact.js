import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact py-12 px-6 bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>

      <form
        action="https://formspree.io/f/mqabjbnn"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />

        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
