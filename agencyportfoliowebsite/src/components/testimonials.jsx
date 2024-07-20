import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <section
        id="testimonials"
        class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 shadow-md">
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                "Working with this agency was a game-changer for our business.
                They delivered a website that exceeded our expectations and
                significantly boosted our online presence."
              </p>
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Client 1"
                  class="w-12 h-12 rounded-full mr-4"
                  width="48"
                  height="48"
                />
                <div>
                  <h4 class="font-bold">Sarah Johnson</h4>
                  <p class="text-gray-600 dark:text-gray-400">CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 shadow-md">
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                "The AI chatbot they developed for us has revolutionized our
                customer service. It's like having a tireless, knowledgeable
                assistant available 24/7."
              </p>
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="Client 2"
                  class="w-12 h-12 rounded-full mr-4"
                  width="48"
                  height="48"
                />
                <div>
                  <h4 class="font-bold">Michael Chen</h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    CTO, GlobalServe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default testimonials;
