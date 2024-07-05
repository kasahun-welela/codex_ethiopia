export default function CoreValue() {
  const coreValues = [
    {
      title: "Compassion",
      description:
        "We approach our work with empathy and a deep commitment to improving the lives of those we serve.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <rect x="3" y="8" width="18" height="4" rx="1"></rect>
          <path d="M12 8v13"></path>
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      title: "Integrity",
      description:
        "We are guided by a strong moral compass, ensuring our actions align with our principles.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"></path>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of working together to achieve greater impact and drive positive change.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <rect width="8" height="8" x="2" y="2" rx="2"></rect>
          <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"></path>
          <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"></path>
          <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1"></path>
          <polyline points="7 21 10 18 7 15"></polyline>
          <rect width="8" height="8" x="14" y="14" rx="2"></rect>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      title: "Innovation",
      description:
        "We constantly seek new and creative ways to address complex challenges and drive progress.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to creating lasting, positive change that continues to benefit communities for years to come.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
          <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
          <path d="m14 16-3 3 3 3"></path>
          <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
          <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
          <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      title: "Accountability",
      description:
        "We hold ourselves and our partners responsible for the impact of our work and the stewardship of our resources.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary-foreground"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      ),
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300">
            Our Core Values
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            At the heart of our NGO are the principles that guide our work and shape our impact.
          </p>
        </div>
        <div className="w-full max-w-full space-y-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 border border-gray-200 dark:border-gray-800 p-4 rounded-lg dark:shadow-md dark:shadow-gray-700 transition-transform hover:scale-105"
              >
                <div className={`rounded-full p-4 ${value.bgClass}`}>
                  {value.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
