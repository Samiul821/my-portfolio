import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const whatsappNumber = "01330624539";
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMsg("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setErrorMsg("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      id="contact"
      className="bg-slate-950 text-white px-6 md:px-[10%] py-16 font-body"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-2 text-base sm:text-lg">
          I’m open to collaborations, opportunities, or just a friendly chat.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Side: Info */}
        {/* Left Side: Info */}
        <div className="md:w-1/2 space-y-8">
          {/* Identity Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Md Samiul Islam
            </h3>
            <p className="text-gray-400">
              A passionate MERN stack developer from Bogura, Bangladesh, dedicated to building real-world solutions through clean and efficient code.
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-400 text-lg" />
              <p className="text-gray-300">Bogura, Bangladesh</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400 text-lg" />
              <a
                href="mailto:samiuldev72@gmail.com"
                className="text-gray-300 hover:text-white transition"
              >
                samiuldev72@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-400 text-lg" />
              <a
                href="tel:+8801330624539"
                className="text-gray-300 hover:text-white transition"
              >
                +880 1330-624539
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400 text-lg" />
              <a
                href={`https://wa.me/880${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-2xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-white" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name" // ✅ updated
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email" // ✅ updated
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              ></textarea>
            </div>

            {/* Optional: Time */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {successMsg && <p className="text-green-400 mt-2">{successMsg}</p>}
            {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
