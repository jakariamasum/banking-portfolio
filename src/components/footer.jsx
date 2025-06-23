import { Link } from "react-router-dom";
import { footerLinks } from "../constant";
import Button from "./ui/button";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    href: "#",
    label: "Twitter",
    icon: <FaTwitter className="w-5 h-5" />,
  },
  {
    href: "#",
    label: "Facebook",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
];

const Footer = () => {
  return (
    <footer className=" text-black bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span
                  size="sm"
                  className="w-fit bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 focus-visible:ring-purple-500 px-3 rounded-md py-1"
                >
                  NB
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
                Experience seamless digital finance with intelligent budgeting,
                smart investing, and control at your fingertips.
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="rounded-full bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-colors p-2 text-gray-400 hover:text-white shadow"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-black hover:text-[#7F3BEA] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-black hover:text-[#7F3BEA] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3 text-black font-medium">
              <li>
                <span className="block">Email:</span>
                <Link
                  to="mailto:support@neverbank.com"
                  className="hover:text-[#7F3BEA] transition-colors"
                >
                  support@neverbank.com
                </Link>
              </li>
              <li>
                <span className="block">Phone:</span>
                <Link
                  to="tel:+1234567890"
                  className="hover:text-[#7F3BEA] transition-colors"
                >
                  1234567890
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} NeverBank. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-[#7F3BEA] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#7F3BEA] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
