import { motion } from "framer-motion";
import Slider from "react-slick";
import imgsrc from "../assets/Process/image2.png";
import imgsrc2 from "../assets/Process/image4.png";
import imgsrc3 from "../assets/Process/image5.png";
import imgsrc5 from "../assets/Process/image4.png";
import imgsrc6 from "../assets/Process/image5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing() {
  const solutions = [
    {
      title: "Wordpress Plugin",
      description: "Wordpress custom plugin development",
      skills: [
        "PHP",
        "WordPress",
        "Plugin Development",
        "Custom Code",
        "JavaScript",
        "CSS",
      ],
    },
    {
      title: "Custom Software",
      description:
        "We build custom software as client business need for business",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "API Integration",
      ],
    },
    {
      title: "E-Commerce",
      description: "Support for fully e-commerce based business and website",
      skills: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Payment Gateway",
        "API Integration",
      ],
    },
    {
      title: "Data Analytics",
      description: "Complex data analytics support for business",
      skills: [
        "Python",
        "Data Analysis",
        "Pandas",
        "NumPy",
        "Data Visualization",
        "PowerBI",
      ],
    },
    {
      title: "Happy Addons",
      description: "Elementor widgets to create beautiful websites",
      skills: ["Elementor", "WordPress", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Google Ads",
      description: "Increase Business sales with google ads marketing",
      skills: [
        "Google Ads",
        "PPC Campaigns",
        "Analytics",
        "SEO",
        "Marketing Strategy",
      ],
    },
    {
      title: "WooCommerce",
      description: "We provide complete woocommerce support",
      skills: [
        "WooCommerce",
        "WordPress",
        "PHP",
        "JavaScript",
        "Payment Gateway",
      ],
    },
    {
      title: "UI/UX",
      description: "Complete user interface design & user experience research",
      skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      title: "Ecloud",
      description:
        "Unlimited cloud storage provide and support for your business",
      skills: ["AWS", "Azure", "Cloud Storage", "DevOps", "Docker"],
    },
  ];

  const specialities = [
    {
      title: "We are open source",
    },
    {
      title: "Problem Solvers",
    },
    {
      title: "Highly-Rated Support",
    },
    {
      title: "Feature-Rich Free & Pro Plugins",
    },
    {
      title: "Regular Updates & Bug Fixes",
    },
    {
      title: "Extension to step-up your game",
    },
  ];

  const glance = [
    {
      title: "Team Members",
      value: "60+",
    },
    {
      title: "Amazing Products",
      value: "15+",
    },
    {
      title: "Free Downloads",
      value: "5.5 M+",
    },
    {
      title: "Happy Customers",
      value: "350k+",
    },
    {
      title: "Happy Customers",
      value: "350k+",
    },
    {
      title: "Happy Customers",
      value: "350k+",
    },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      position: "UI/UX Designer",
      feedback:
        "I'm a creative UI/UX designer with a passion for crafting intuitive and visually appealing digital experiences.",
    },
    {
      name: "Michael Johnson",
      position: "Product Manager",
      feedback:
        "As a product manager, I'm passionate about bridging the gap between user needs and technical capabilities.",
    },
    {
      name: "Emily Davis",
      position: "Digital Marketer",
      feedback:
        "As a digital marketer, I'm passionate about leveraging data-driven strategies to help businesses reach their target audience.",
    },
    {
      name: "David Lee",
      position: "Data Analyst",
      feedback:
        "As a data analyst, I'm passionate about uncovering insights that drive business decisions.",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const heroImageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 py-16">
        <section className="flex flex-col-reverse items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="space-y-4 md:w-1/2">
            <h1 className="text-4xl font-bold leading-tight">
              One Software Solution at a Time. Empowering Your Business with
              Tailored Technology Solutions
            </h1>
            <p className="text-lg">
              We provide full software support, Ecommerce support, UI/UX design,
              and custom plug in for your business.
            </p>
            <p className="text-sm">
              Empowering 5,000+ Businesses With Innovation
            </p>
            <div className="flex space-x-4">
              <img src={imgsrc} alt="Samsung" className="h-8" />
              <img src={imgsrc} alt="IBM" className="h-8" />
              <img src={imgsrc} alt="Microsoft" className="h-8" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Slider {...heroImageSettings}>
              <div>
                <img src={imgsrc} alt="Illustration 1" className="w-full" />
              </div>
              <div>
                <img src={imgsrc2} alt="Illustration 2" className="w-full" />
              </div>
              <div>
                <img src={imgsrc3} alt="Illustration 3" className="w-full" />
              </div>
              <div>
                <img src={imgsrc5} alt="Illustration 3" className="w-full" />
              </div>
              <div>
                <img src={imgsrc6} alt="Illustration 3" className="w-full" />
              </div>
            </Slider>
          </div>
        </section>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <p className="mt-4 text-lg">
            With our innovative tools and solutions tailored to empower your
            business, you just need to sit back and see your problems solved and
            business operations accelerated.
          </p>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg dark:shadow-md dark:shadow-gray-700 transition-transform hover:scale-105"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={imgsrc}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {solution.description}
                </p>
                <a href="#" className="mt-4 text-[var(--primary)]">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
          <button className="px-6 py-2 mt-8 text-white bg-[var(--primary)] rounded-md">
            View All Products
          </button>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">We are at a CodeX</h2>
          <div className="flex flex-wrap my-10">
            <div className="w-full md:w-2/5">
              <div className="bg-white dark:bg-[var(--card)] shadow-md">
                <div className="bg-white dark:bg-[var(--card)] rounded-t-3xl items-center gap-6 md:flex-row justify-around md:p-10">
                  <p className="font-sans text-4xl md:text-5xl lg:text-6xl text-center py-3">
                    What we do?
                  </p>
                  <p className="font-sans text-xs text-left px-4 text-gray-900 dark:text-[var(--card-foreground)]">
                    SMA Lawyers is a new breed of law firm. We don't stand on
                    tradition or outdated ways of doing business.
                  </p>
                  <p className="font-sans text-xs text-left px-4 text-gray-900 dark:text-[var(--card-foreground)] my-4">
                    We take a team approach to dealing with the more complex
                    legal problems that cross our desks, working on the very
                    reasonable assumption that two or more heads are better than
                    one. We take the time to understand the whole picture, and
                    our lawyers think outside the box to find solutions in even
                    the most complex legal situations.
                  </p>
                  <p className="font-sans text-xs text-left px-4 text-gray-900 dark:text-[var(--card-foreground)] my-4">
                    We don't hide behind legalese or arcane legal procedures,
                    clearly communicating our process every step of the way. The
                    focus is on getting results for our clients, not on how our
                    foyer looks.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-2">
              <div className="flex flex-wrap -mx-2 mt-8">
                {glance.map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden">
                        <img src={imgsrc} alt={item.title} />
                      </div>
                      <h3 className="pt-2 font-sans text-xs text-center md:text-xss sm:text-xss">
                        {item.value}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-[var(--muted)] dark:bg-[var(--muted)]">
          <h2 className="text-3xl font-bold">
            What People Think About Our Products
          </h2>
          <Slider {...settings} className="mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-[var(--card)] text-[var(--card-foreground)] p-6 rounded-lg shadow-md w-full max-w-sm h-72 flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={imgsrc}
                      alt={`Testimonial ${index + 1}`}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-grow">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
}
