import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import bg from "../assets/images/bg.jpg"; // Import the background image
import headshot from "../assets/images/headshot.jpg";
import { Link } from "react-router-dom";

// Import social media icons and other icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import address, phone, and email icons

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="hero" // Add an ID here
        className="relative w-full h-screen bg-cover bg-center pt-24"
        style={{
          backgroundImage: `url(${bg})`, // Corrected the template literal to properly load the image
        }}
      >
        {/* Black overlay with opacity */}
        <motion.div
          className="absolute inset-0 bg-black-50 bg-opacity-30" // Subtle overlay for the background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5, // Animation duration for the overlay
            ease: "easeOut",
          }}
        />

        {/* Text and buttons with animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }} // Start with smaller scale and hidden
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale up to full size
          transition={{
            duration: 1.2, // Duration for the text animation
            delay: 0.3, // Delay before the animation starts
            ease: "easeOut", // Smooth easing effect
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to <p className="text-gray-800">YAFCA</p>
          </h1>
          <p>Where Faith Meets Action.</p>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Follow Christ. Spread His Word. Transform Lives.
          </p>

          {/* Donate Now Button */}
          <motion.button
            className="bg-pink-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-pink-200 transition duration-300 mr-4"
            initial={{ scale: 0.8 }} // Button starts small
            animate={{ scale: 1 }} // Button scales up to normal size
            transition={{ duration: 0.3 }}
          >
            <Link to="/donate" className="text-white px-4 py-2 rounded-md">
              Donate Now
            </Link>
          </motion.button>

          {/* Join Us Now Button */}
          <motion.button
            className="bg-white text-pink-500 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-pink-200 transition duration-300 mt-4 sm:mt-0"
            initial={{ scale: 0.8 }} // Button starts small
            animate={{ scale: 1 }} // Button scales up to normal size
            transition={{ duration: 0.3 }}
          >
            <Link to="/joinus" className="text-pink-500 px-4 py-2 rounded-md">
              Join Us Now
            </Link>
          </motion.button>
        </motion.div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-center mb-10"
            initial={{ opacity: 0, x: -100 }} // Starts from the left side
            animate={{ opacity: 1, x: 0 }} // Slides in from the left to the center
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-700 mb-12"
            initial={{ opacity: 0, x: 100 }} // Starts from the right side
            animate={{ opacity: 1, x: 0 }} // Slides in from the right to the center
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Youth Ambassadors for Christ Association (YAFCA) is a dedicated
            Christian community with a mission to follow the teachings of Christ
            and actively spread the Gospel. Our purpose is to make disciples of
            all nations, guiding individuals to embrace faith and salvation
            through evangelism. We are committed to winning souls for the
            Kingdom of God, empowering people to live out their calling as
            followers of Christ. Join us as we share God's love and bring
            transformation to lives and communities worldwide.
          </motion.p>

          {/* Grid Layout for History, Mission, and Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* History Card */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 100 }} // Slide up from bottom
              animate={{ opacity: 1, y: 0 }} // Slide to original position
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our History
              </h3>
              <p className="text-gray-600">
                Our organization was founded in 2005 with the goal of improving
                lives through education and social welfare programs. Over the
                years, we have reached thousands of individuals and communities.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 100 }} // Slide up from bottom
              animate={{ opacity: 1, y: 0 }} // Slide to original position
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3, // Delay the mission card slightly
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to empower individuals and communities by
                providing resources, education, and healthcare to create
                sustainable change and a better future for all.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 100 }} // Slide up from bottom
              animate={{ opacity: 1, y: 0 }} // Slide to original position
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.6, // Delay the vision card slightly more
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Our vision is to create a world where every person has access to
                quality education, healthcare, and the opportunity to thrive in
                a sustainable environment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }} // Starts with smaller scale
            animate={{ opacity: 1, scale: 1 }} // Scales to normal size
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left side: Success Stories */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 100 }} // Starts below the screen
                animate={{ opacity: 1, y: 0 }} // Slides up into view
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Education Project in Rural Areas
                </h3>
                <p className="text-gray-700">
                  Our team brought education to remote rural areas, giving
                  children the opportunity to learn and grow. With your support,
                  we've impacted over 1,000 young lives.
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md mt-8"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Clean Water Initiative
                </h3>
                <p className="text-gray-700">
                  We provided clean and accessible water to villages in need.
                  This initiative has helped save countless lives and improved
                  living standards.
                </p>
              </motion.div>
            </div>

            {/* Right side: Testimonies */}
            <div>
              {/* Testimony 1 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              >
                <img
                  src={headshot}
                  alt="Person Sharing Testimony"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">John Doe's Testimony</h3>
                <p className="text-gray-700">
                  "Thanks to the education project, my life has completely
                  changed. I was able to pursue my dreams and become a teacher."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-center mb-10"
            initial={{ opacity: 0, y: 50 }} // Starts below the section
            animate={{ opacity: 1, y: 0 }} // Slides up into view
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Social Media Links, Address, Phone, and Email */}
            <div className="flex flex-col items-center space-y-6">
              {/* Social Media Links */}
              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, x: -50 }} // Starts from the left
                animate={{ opacity: 1, x: 0 }} // Moves to the normal position
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition duration-300" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-500 transition duration-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-8 h-8 text-pink-600 hover:text-pink-700 transition duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-800 transition duration-300" />
                </a>
              </motion.div>

              {/* Address and Contact Information Side by Side */}
              <motion.div
                className="flex space-x-8 mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                {/* "Our Office" Section */}
                <div className="text-center text-gray-700 space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <FaMapMarkerAlt className="text-red-500 w-6 h-6" />
                    <p className="font-semibold">Our Office</p>
                  </div>
                  <p>123 Main Street, Suite 456</p>
                  <p>Cityville, ST 12345</p>
                </div>

                {/* Thin Line Divider */}
                <div className="border-l border-gray-300 h-24"></div>

                {/* "Contact Information" Section */}
                <div className="text-center text-gray-700 space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <FaPhoneAlt className="text-green-500 w-6 h-6" />
                    <p className="font-semibold">Contact Information</p>
                  </div>
                  <p>Phone: (123) 456-7890</p>
                  <div className="flex items-center justify-center space-x-2">
                    <FaEnvelope className="text-blue-500 w-6 h-6" />
                    <p>Email: contact@example.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-center text-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                Follow us on social media for the latest updates and news!
              </motion.p>
            </div>

            {/* Right Side: Contact Form */}
            <div className="max-w-3xl mx-auto">
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                    whileHover={{ scale: 1.1 }} // Button grows slightly on hover
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
