import Logo from "@/assets/logo.png";
import {
    EnvelopeIcon,
    
    PhoneIcon,
  } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-17 w-20"alt="logo" src={Logo} />
          <p className="my-5">
          When it comes to searching for books, there is only one place to turn to – the Jain Book Agency. We are India's largest online book store and rightly so. Having served some of the best in the industry for over 70 years – we are your one stop solution for all your book needs.
          </p>
          <p>Designed By © Chinmayee All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Benefits</p>
          <p className="my-5">Featured Books</p>
          <p>Contact Us</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p><EnvelopeIcon className="h-6 w-6"/>bookstore123@gmail.com</p>
          <p><PhoneIcon className="h-6 w-6"/>(333)425-6825</p>
          <p><PhoneIcon className="h-6 w-6"/>(378)479-2345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;