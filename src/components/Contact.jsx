import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const message = e.target.messagebody.value;
    const data = {
      to_name: email,
      from_name: email,
      message: message,
    };
    emailjs
      .send("service_w1wqrp9", "template_j6rkvvo", data, "CspRuIYP57Sr9m8Nh")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          if (response.text) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Email Send SUCCESS",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
            e.target.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div>
      <section className="py-16 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 justify-center items-center px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka , Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+880 15 21 40 91 55</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>subroto23das@gmail.com</span>
              </p>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            >
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="block w-full text-[#7600fa] font-medium rounded-md shadow-sm dark:bg-gray-800 p-4 mt-2"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="8"
                  name="messagebody"
                  className="block w-full text-black rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800 mt-2"
                ></textarea>
              </label>
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg rounded border w-1/2 border-[#7600fa] focus:ring hover:ring  hover:ring-[#7600fa] focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span className="ml-2">Sending</span>
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
