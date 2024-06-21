import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10">

        <div className="footer-content py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="footer-logo mb-6">
                <a href="index.html">
                  <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="h-12" alt="logo" />
                </a>
              </div>
              <div className="footer-text mb-6">
                <p className="text-white">The CIO Sherpa Council is dedicated to empowering IT leaders with the skills and insights necessary to drive innovation and excellence in the technology sector. 
Join us in advancing the future of IT through knowledge sharing, collaboration, and strategic advancements.
</p>
              </div>
              <div className="footer-social-icon">
                <span className="block text-lg font-semibold mb-4">Follow us</span>
                <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f bg-blue-700 p-2 rounded-full"></i></a>
                <a href="#" className="text-white mr-3"><i className="fab fa-twitter bg-blue-400 p-2 rounded-full"></i></a>
                <a href="#" className="text-white"><i className="fab fa-google-plus-g bg-red-600 p-2 rounded-full"></i></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-8 relative">Useful Links
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <div className="md:flex">
                <div className="md:w-[50%]">
                  <ul>
                  <li><a href="#" className="text-white hover:text-blue-400">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">About</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Portfolio</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">About Us</a></li>
                  </ul>
                </div>
                <div className="md:w-[50%]">
                <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-blue-400">Our Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Expert Team</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Contact Us</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Latest News</a></li>
                </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-8 relative">Subscribe
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <p className="text-white mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <form className="relative">
                <input type="text" placeholder="Email Address" className="w-full py-3 px-4 bg-gray-600 border border-gray-400 text-white placeholder-gray-500 focus:outline-none" />
                <button className="absolute right-0 top-0 mt-1 mr-1 bg-blue-400 py-3 px-4 text-white">
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-gray-600 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white">Copyright &copy;  All Rights Reserved. <a href="https://codepen.io/anupkumar92/" className="text-blue-400"> © CIO Sherpa Council.</a></p>
          </div>
          <div className="footer-menu">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-blue-400">Code of conduct </a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Email advisiory</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Alert</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Policy</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
