import { motion } from "framer-motion";
import Slider from "react-slick";
import imgsrc1 from "../assets/Process/image1.webp";
import imgsrc2 from "../assets/Process/image2.webp";
import imgsrc3 from "../assets/Process/image3.webp";
import imgsrc4 from "../assets/Process/image4.webp";
import imgsrc5 from "../assets/Process/image5.webp";
// import home images
import Automation from "../assets/Home/Automation.webp";
import Business from "../assets/Home/Business_Website.webp";
import Custom from "../assets/Home/Custome_Website.webp";
import Ecommerce from "../assets/Home/Ecommerce.webp";
import Job from "../assets/Home/Job_Portal.webp";
import Mobile from "../assets/Home/Mobile_App.webp";
import Payment from "../assets/Home/Payment_Integration.webp";
import Personal from "../assets/Home/Personal_Website.webp";
import Project from "../assets/Home/Project_Management.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRocket, FaBuilding, FaIndustry, FaBriefcase } from "react-icons/fa";
import "./slick-custom.css"; // Import custom slick styles
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Carousel from "./Carousal";

export default function Landing() {
  // Mapping of titles to images
  const images = {
    "Business Website": Business,
    "Personal Website": Personal,
    "E-Commerce": Ecommerce,
    Automation: Automation,
    "Payment Integration": Payment,
    "Bot Development": imgsrc1, // Placeholder image, replace with actual image if available
    "UI/UX": imgsrc2,
    "Cloud Solutions": imgsrc3,
  };

  const solutions = [
    {
      title: "Business Website",
      description:
        "Custom WordPress plugin development for unique business needs.",
      skills: [
        "PHP",
        "WordPress",
        "Plugin Development",
        "Custom Code",
        "JavaScript",
        "CSS",
      ],
      image: images["Business Website"],
    },
    {
      title: "Personal Website",
      description:
        "Tailored software solutions to meet specific business requirements.",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "API Integration",
      ],
      image: images["Personal Website"],
    },
    {
      title: "E-Commerce",
      description:
        "Comprehensive support for e-commerce platforms and businesses.",
      skills: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "Payment Gateway",
        "API Integration",
      ],
      image: images["E-Commerce"],
    },
    {
      title: "Automation",
      description:
        "Automation solutions using Zapier, Make, and Google Sheets.",
      skills: ["Zapier", "Make", "Google Sheets", "Automation", "Integration"],
      image: images["Automation"],
    },
    {
      title: "Payment Integration",
      description:
        "Seamless payment integration with Telebirr, Chapa, PayPal, and Stripe.",
      skills: [
        "Telebirr",
        "Chapa",
        "PayPal",
        "Stripe",
        "Payment Gateway",
        "API Integration",
      ],
      image: images["Payment Integration"],
    },
    {
      title: "Bot Development",
      description: "Custom bots for Telegram and other platforms.",
      skills: [
        "Telegram Bot",
        "JavaScript",
        "Node.js",
        "API Integration",
        "Automation",
      ],
      image: images["Bot Development"],
    },
    {
      title: "UI/UX",
      description:
        "End-to-end UI design and UX research for optimal user experiences.",
      skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"],
      image: images["UI/UX"],
    },
    {
      title: "Cloud Solutions",
      description:
        "Integration cloud storage and support for seamless business operations.",
      skills: ["AWS", "Azure", "Cloud Storage", "DevOps", "Docker"],
      image: images["Cloud Solutions"],
    },
  ];

  const testimonials = [
    {
      name: "Walia Jobs",
      position: "CEO of Walia Jobs",
      feedback:
        "The new Walia Jobs portal is fantastic! The intuitive design and seamless functionality have significantly enhanced our user experience.",
      website: "https://walia-jobs.vercel.app/blogs",
    },
    {
      name: "Michael Johnson",
      position: "Product Manager",
      feedback:
        "As a product manager, I'm passionate about bridging the gap between user needs and technical capabilities.",
      website: "https://walia-jobs.vercel.app/blogs",
    },
    {
      name: "Emily Davis",
      position: "Digital Marketer",
      feedback:
        "As a digital marketer, I'm passionate about leveraging data-driven strategies to help businesses reach their target audience.",
    },
    {
      name: "Solomon Mulugeta",
      position: "Lawyer",
      feedback:
        "I am thoroughly impressed with the website design! The professional look and user-friendly interface exceeded my expectations.",
      website: "http://solomonmoalawoffice.com/",
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

  // const heroImageSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   arrows: false,
  // };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Carousel />
      <main className="container">
        <section className="text-center">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <p className="mt-4 text-lg">
            With our innovative tools and solutions tailored to empower your
            business, you just need to sit back and see your problems solved and
            business operations accelerated.
          </p>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg dark:shadow-md dark:shadow-gray-700 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden ">
                  <img
                    src={solution.image}
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
                <div className="w-full mt-4">
                  <div className="flex flex-wrap gap-2">
                    {solution.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-muted text-foreground whitespace-nowrap"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* <a href="#" className="mt-4 text-[var(--primary)]">
                  Learn More →
                </a> */}
              </motion.div>
            ))}
          </div>
          <Button
            aria-label="View All Product"
            className="px-6 py-2 mt-8 text-white bg-[var(--primary)] rounded-md"
          >
            View All Products
          </Button>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">We are CodeX Africa</h2>
          <div className="flex flex-wrap my-10">
            <div className="w-full md:w-2/5">
              <div className="bg-white dark:bg-[var(--card)] shadow-md">
                <div className="bg-white dark:bg-[var(--card)] rounded-t-3xl items-center gap-6 md:flex-row justify-around md:p-10">
                  <p className="font-sans text-4xl md:text-5xl lg:text-6xl text-center py-3">
                    What we do?
                  </p>
                  <p className="font-sans text-sm text-left px-4 text-gray-900 dark:text-[var(--card-foreground)]">
                    At CodeX Africa, our mission is to empower businesses by
                    providing innovative and reliable web solutions that
                    significantly enhance their online presence and drive
                    sustainable growth. We are dedicated to understanding the
                    unique challenges and opportunities faced by our clients in
                    a rapidly evolving digital landscape. By leveraging
                    cutting-edge technologies and industry best practices, we
                    deliver tailored solutions that not only meet but exceed our
                    clients' expectations.
                  </p>
                  <p className="font-sans text-sm text-left px-4 text-gray-900 dark:text-[var(--card-foreground)] my-4">
                    To be the leading technology partner for businesses across
                    Africa and beyond, renowned for our excellence in web
                    services and products by 2030.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-2">
              <div className="flex flex-wrap -mx-2 mt-8">
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Custom} alt="Custome Website" />
                    </div>
                    <h3 className="pt-2  font-semibold font-sans text-xs text-center md:text-xss sm:text-xss">
                      Custom Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Delivering unique and innovative website solutions
                      tailored to your needs.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Business} alt="Business Website" />
                    </div>
                    <h3 className="pt-2  font-semibold font-sans text-xs text-center md:text-xss sm:text-xss">
                      Business Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      High-performance websites to boost your business presence
                      online.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Personal} alt="Personal Website" />
                    </div>
                    <h3 className="pt-2  font-semibold font-sans text-xs text-center md:text-xss sm:text-xss">
                      Personal Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Personal websites that reflect your individuality and
                      creativity.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Ecommerce} alt="Ecommerce Website" />
                    </div>
                    <h3 className="pt-2 font-sans  font-semibold text-xs text-center md:text-xss sm:text-xss">
                      Ecommerce Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Comprehensive e-commerce solutions to drive online sales.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Job} alt="Job Portal Website" />
                    </div>
                    <h3 className="pt-2 font-sans  font-semibold text-xs text-center md:text-xss sm:text-xss">
                      Job Portal Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Job portals connecting employers with top talent
                      efficiently.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Mobile} alt="Custom Product" />
                    </div>
                    <h3 className="pt-2 font-sans text-xs  font-semibold text-center md:text-xss sm:text-xss">
                      Mobile App Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Creating user-friendly mobile applications to expand your
                      business reach.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Project} alt="Project Management Tools" />
                    </div>
                    <h3 className="pt-2 font-sans text-xs text-center md:text-xss  font-semibold sm:text-xss">
                      Project Management Tools
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Tools to streamline project management and enhance
                      productivity.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Payment} alt="Payment Integration" />
                    </div>
                    <h3 className="pt-2 font-sans text-xs text-center  font-semibold md:text-xss sm:text-xss">
                      Payment Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Secure and efficient payment gateway integrations.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10"
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="relative mb-9 rounded-xl py-8 px-7 bg-[var(--card)] text-[var(--card-foreground)] shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-[var(--card)] dark:bg-white border-4 border-white rounded-full overflow-hidden">
                      <img src={Automation} alt="Automation" />
                    </div>
                    <h3 className="pt-2 font-sans text-xs text-center font-semibold md:text-xss sm:text-xss">
                      Automation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      Automation solutions to boost productivity and efficiency.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* empowering business section */}
        <div className="w-full">
          <section className="w-full md:py-8 lg:py-8">
            <div className="container px-4 md:px-6 space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Empowering Businesses of All Sizes
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our team of experts can help you build, scale, and optimize
                  your digital presence, no matter the size of your business.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <FaRocket className="text-primary-foreground w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Startups </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Have a strict budget and minimum resources? Don't worry, our
                    professionals can give much-needed tech support to turn your
                    dream idea into a reality.
                  </p>
                </div>
                <div className="card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <FaBuilding className="text-primary-foreground w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Small Business </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our proficients can help you build your brand identity
                    blending their development experience well with your
                    development requirements.
                  </p>
                </div>
                <div className="card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <FaIndustry className="text-primary-foreground w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Enterprise Business{" "}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    We help enterprise-level businesses enhance their business
                    reach and streamline processes with innovative technology.
                  </p>
                </div>
                <div className="card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <FaBriefcase className="text-primary-foreground w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Agency Business +</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Enhance the offering of your Agency business by leveraging
                    our development expertise and trending.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-16 text-center bg-[var(--muted)] dark:bg-[var(--muted)]">
          <h2 className="text-3xl font-bold">
            What People Think About Our Products
          </h2>
          <Slider {...settings} className="mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-[var(--card)] text-[var(--card-foreground)] p-6 rounded-lg shadow-md w-full max-w-sm h-72 flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Aspect ratio container added here */}
                    <div className="aspect-w-1 aspect-h-1 w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={imgsrc1} // Assuming each testimonial object has an 'imgsrc' property
                        alt={`Testimonial ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>{" "}
                  <Link to="http://solomonmoalawoffice.com/">
                    Website :{testimonial.website}
                  </Link>
                  <p className="mt-4 flex-grow">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* <Slider {...settings} className="mt-8">
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
          </Slider> */}
        </section>
      </main>
    </div>
  );
}
