import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 text-black dark:bg-gray-900 dark:text-white py-6 text-center">
      <p className="mb-2">Made with ❤️ by Muskan Pal</p>

      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://github.com/muskanpal"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/muskan-pal-1092b0201/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:muskan2024h@gmail.com"
          className="hover:text-blue-500 transition"
        >
          Email
        </a>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Muskan Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
