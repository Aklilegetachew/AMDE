"use client";
import { useEffect, useRef } from "react";

export default function ContactForm() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row bg-[#606060] rounded-lg overflow-hidden shadow-lg">
          <div className="bg-[#606060] text-white p-8 lg:w-1/3 relative">
            <h2 className="text-3xl font-bold mb-2">Contact Form</h2>
            <p className="mb-6 text-gray-300">Reach out to us today!</p>
            <div className="space-y-4 mt-14">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +251 911 44 86 34
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@amdedesign.com
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full -mb-24 -mr-24 z-0 opacity-20"></div>
          </div>
          <div className="p-8  lg:w-2/3 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#606060] focus:border-[#606060]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#606060] focus:border-[#606060]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#606060] focus:border-[#606060]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+251"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#606060] focus:border-[#606060]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="block text-sm font-medium text-gray-700">
                  Select Subject?
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "General Inquiry",
                    "Technical Support",
                    "Billing Question",
                    "Feedback",
                  ].map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={subject.toLowerCase().replace(" ", "-")}
                        name="subject"
                        value={subject.toLowerCase().replace(" ", "-")}
                        className="focus:ring-[#606060] h-4 w-4 text-[#606060] border-gray-300"
                      />
                      <label
                        htmlFor={subject.toLowerCase().replace(" ", "-")}
                        className="text-sm text-gray-700"
                      >
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message.."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#606060] focus:border-[#606060]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#606060] text-white py-2 px-4 rounded-md hover:bg-[#505050] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#606060]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3941.2576233608647!2d38.784975!3d8.948392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTYnNTQuMiJOIDM4wrA0NycwNS45IkU!5e0!3m2!1sen!2set!4v1727686392298!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
