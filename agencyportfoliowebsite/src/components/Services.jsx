import React, { Component } from "react";
import "../css/service.css";
export class Services extends Component {
  render() {
    return (
      // <main>
      // In hero.jsx

      <section
        id="services"
        class=" relative py-20 bg-gray-100 dark:bg-black transition-colors duration-300 inset-0 bg-gradient-to-t from-transparent via-blue-500 to-transparent"
      >
        <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
            Our Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:">
              <svg
                class="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">Website Development</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Craft stunning, responsive websites tailored to your brand. We
                focus on speed, user experience, and SEO optimization.
              </p>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Fastest time to production</li>
                <li>Agile methodology for continuous updates</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <svg
                class="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">AI Chatbots</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Enhance customer engagement with intelligent AI chatbots.
                Provide 24/7 support and streamline your business processes.
              </p>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Natural language processing</li>
                <li>Customizable to your brand voice</li>
                <li>Integration with existing systems</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <svg
                class="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">
                Business Process Automation
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Streamline your operations with cutting-edge automation
                solutions. Boost efficiency and reduce human error.
              </p>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Workflow optimization</li>
                <li>Custom automation scripts</li>
                <li>Integration with existing tools</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <svg
                class="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">Smart Analytics Tools</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Gain valuable insights from your data with our advanced
                analytics solutions. Make informed decisions to drive growth.
              </p>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Real-time data visualization</li>
                <li>Predictive analytics</li>
                <li>Custom reporting dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
