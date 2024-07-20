import React, { useEffect, useRef } from "react";
import "../css/process.css";

const Process = () => {
  const stepsRef = useRef([]);
  const processLineRef = useRef(null);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const animateProcessSteps = () => {
    stepsRef.current.forEach((step, index) => {
      if (isElementInViewport(step)) {
        setTimeout(() => {
          step.classList.add("fade-in");
          step.style.opacity = 1;
        }, index * 300);
      }
    });

    if (isElementInViewport(processLineRef.current)) {
      processLineRef.current.classList.add("animate");
    }
  };

  useEffect(() => {
    window.addEventListener("load", animateProcessSteps);
    window.addEventListener("scroll", animateProcessSteps);

    return () => {
      window.removeEventListener("load", animateProcessSteps);
      window.removeEventListener("scroll", animateProcessSteps);
    };
  }, []);

  const processSteps = [
    {
      title: "Discovery",
      description:
        "We begin by diving deep into your brand, understanding your goals, target audience, and unique challenges.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yqXkk-AjWBiVgz3mBe0xhE-VS5i6xvOLEg&s",
      alt: "Discovery phase illustration",
    },
    {
      title: "Planning",
      description:
        "We craft a comprehensive project plan using agile methodology to ensure flexibility and alignment with your vision.",
      imgSrc:
        "https://www.frevvo.com/blog/wp-content/uploads/2021/03/image1-1.png",
      alt: "Planning phase illustration",
    },
    {
      title: "Development",
      description:
        "Our expert team brings your vision to life, leveraging cutting-edge technologies with regular updates and improvements.",
      imgSrc:
        "https://www.multidots.com/wp-content/uploads/2020/01/26-Importance-of-Coding-Standard-and-Code-Quality-in-Software-Development.png",
      alt: "Development phase illustration",
    },
    {
      title: "Launch & Support",
      description:
        "After rigorous testing, we launch your project and provide ongoing support to ensure continued success.",
      imgSrc: "https://picsum.photos/seed/launch/400/300",
      alt: "Launch phase illustration",
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-white dark:bg-black shadow-2xl overflow-hidden transition-all duration-300"
    >
      <div className="p-12">
        <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
          Our Process
        </h2>
        <div className="relative">
          <div className="absolute  left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2">
            <div
              ref={processLineRef}
              className="process-line bg-blue-600 dark:bg-blue-400 w-full"
            ></div>
          </div>
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-center opacity-0"
                ref={(el) => (stepsRef.current[index] = el)}
                data-step={index + 1}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 pl-2 text-left" : "pl-8 text-right"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xl dark:text-gray-300">
                        {step.description}
                      </p>
                    </>
                  ) : (
                    <img
                      src={step.imgSrc}
                      alt={step.alt}
                      className="rounded-lg shadow-md w-full h-48 object-cover -ml-9"
                    />
                  )}
                </div>
                <div className="absolute left-1/2 w-10 h-10 -ml-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-1/2 -translate-y-1/2 pulse "></div>
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pl-8 text-left" : "pr-8 pl-3 text-right"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <img
                      src={step.imgSrc}
                      alt={step.alt}
                      className="rounded-lg shadow-md w-full h-48 object-cover justify-start "
                    />
                  ) : (
                    <>
                      <h3 className="text-4xl font-bold text-blue-600 text-right dark:text-blue-400 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xl">
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
