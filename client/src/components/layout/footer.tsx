import { Link } from "wouter";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/favicon.png" />
              </div>
              <span className="text-2xl font-bold">MKrop.com</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Empowering businesses with innovative software solutions and expert IT consulting services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/mkrop/about/"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/MKropCom/"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Talent Provision
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              {/* <li>
                <a href="mailto:hello@mkrop.com">hello@mkrop.com</a>
              </li> */}
              <li>+380 96 938 09 49</li>
              <li>
                Spusknyi lane 24<br />
                Kropyvnytskyi, Kirovohrad Oblast, UA, 25006
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center text-gray-300 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} MKrop.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
