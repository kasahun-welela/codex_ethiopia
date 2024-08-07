import mulisa from "../assets/Teams/Mulisa.png";
import abenezer from "../assets/Teams/Abenezer.png";
import kasahun from "../assets/Teams/Kasahun.png";
import Marshalom from "../assets/Teams/Marshalom.png";
import kena from "../assets/Teams/Kena.png";
import Shimelis from "../assets/Teams/Shimelis.png"
import Skills from "@/components/Skills";

export default function About() {
  const teamMembers = [
    {
      name: "Abenezer Kifle",
      img: abenezer,
      title: "Founder, Fullstack Developer, Scrum master",
      description:
        "Abenezer is experienced full stack developer, with a background in computer science.",
      skills: [
        "HTML",
        "React",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Redux",
        "GraphQL",
        "API Integration",
        "Strapi",
        "Redux Toolkit",
        "Tailwind css",
        "Shadcn",
        "AWS",
        "Azure",
      ],
    },
    {
      name: "Kasahun Welela",
      img: kasahun,
      title: "Frontend Developer",
      description:
        "Kasahun is a creative and user-focused designer with a strong background in UI/UX design.",
      skills: [
        "HTML",
        "React",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Redux",
        "GraphQL",
        "API Integration",
        "Redux Toolkit",
        "Tailwind css",
        "Shadcn",
        "AWS",
        "Azure",
      ],
    },
    {
      name: "Mulisa Tadesse",
      img: mulisa,
      title: "Developer & Marketing Manager",
      description:
        "Mulisa Tadesse is a Software Developer committed to delivering high-quality software that meets customer needs and market demands.",
      skills: [
        "Marketing Strategy",
        "Promotion",
        "Marketing Management",
        "HTML",
        "ReactJs",
        "CSS",
        "JavaScript",
        "Java",
        "Python",
        "Flutter",
        "Data science",
        "Data Analytics",
        "Android ",
        "PHP",
        "Laravel",
        "PowerBI"
      ],
    },
    {
      name: "Marshalom ",
      img: Marshalom,
      title: "Co-Founder, Developer & Marketing Lead",
      description:
        "Marshalom has a strong background in digital marketing and is passionate about driving growth for the company.",
      skills: [
        "Digital Marketing",
        "SEO",
        "Content Marketing",
        "Social Media Strategy", 
        "Email Marketing",
        "Analytics",
        "PPC Campaigns",
        "Brand Management",
      ],
    },
    {
      name: "Kenna Taddese",
      img: kena,
      title: "Backend Developer",
      description:
        "Kenna is a proficient full-stack developer with expertise in JavaScript, React, Node.js, and backend systems.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "GraphQL",
        "TypeScript",
        "Docker",
        "CI/CD",
        "Cloud Services",
      ],
    },
    {
      name: "Shimelis Techane",
      img: Shimelis,
      title: "MuleSoft Developer",
      description:"Shimelis is a full-stack developer with a strong grasp of modern web technologies, backend systems, mobile development, and API integration.",
      skills: [
        "HTML",
        "ReactJs",
        "CSS",
        "JavaScript",
        "Java",
        "Flutter",
        "Android Development",
        "PHP",
        "Laravel",
        "C#",
       " Mule soft API development",
        "Anypoint platform",
        "Wordpress web development"
      ],
    },
  ];

  return (
    <section className="w-full py-12 bg-white dark:bg-gray-950">
    <div className="container px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300">
          Meet the Team
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 md:text-xl">
          Our talented team is dedicated to building innovative software solutions.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <li key={index} className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg dark:shadow-md dark:shadow-gray-700 transition-transform hover:scale-105">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={member.img} alt={member.name} className="object-cover"/>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {member.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {member.title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              {member.description}
            </p>
            <Skills skills={member.skills} />
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
}
