import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden pt-6 bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="flex h-full flex-col justify-between mb-6 md:mb-0">
              <div className="mb-4 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-300">
                Creating amazing blogging experiences.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-300">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-300">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-300">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-200 hover:text-purple-400 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4 py-2.5 px-4 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-300 text-center">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by
          Sijanbroo.
        </p>
      </div>
    </section>
  );
}

export default Footer;
