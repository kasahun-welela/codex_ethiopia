import { useState } from "react";
import imgOne from "../assets/Project/imgOne.png";
import imgTwo from "../assets/Project/imgTwo.png";
import imgThree from "../assets/Project/imgThree.png";
import imgFour from "../assets/Project/imgFour.png";
import imgFive from "../assets/Project/imgFive.png";
import { Badge } from "@/components/ui/badge";

export default function ProjectManagmentComponet() {
  const [currentImg, setCurrentImg] = useState(imgOne);
  const handleImageClick = (imgSrc: any) => {
    setCurrentImg(imgSrc);
  };

  return (
    <div className="w-full">
      <header className="bg-[url('/placeholder.svg')] bg-cover bg-center py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Kanban Project Management Tools
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl">
            Kanban Flow Board is a robust project management tool designed to
            optimize workflow and enhance team collaboration across various
            industries.
          </p>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:gap-12 lg:py-16">
        <div className="col-span-2">
          <img
            src={currentImg}
            alt="Featured Image"
            width={1200}
            height={675}
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <h2 className="text-2xl font-bold">
                Kanban Project Management Tools
              </h2>
            </div>
            <div>
              <label className="text-sm font-medium">Url</label>
              <p className="text-muted-foreground">
                https://kanban-project-management-tools.vercel.app/
              </p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <p>
              Kanban Flow Board is a dynamic project management tool designed to
              enhance team collaboration and streamline workflows across
              industries. This platform enables visual task management,
              efficient project tracking, and seamless communication within a
              centralized interface. Featuring drag-and-drop tasks, customizable
              workflows, and deadline settings, it caters to diverse team sizes
              and project demands. Emphasizing precision and strategic planning,
              Kanban Flow Board is perfect for businesses of all sizes, offering
              a scalable approach to boost productivity and achieve excellent
              results with real-time updates and intelligent task management.
            </p>
          </div>
          <div>
            <label className="text-sm font-medium">Technologies Used</label>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Tailwind CSS
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  React
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Next.js
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Node.js
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Express
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Vercel
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Github
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  CI/CD
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 pb-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 lg:pb-16">
        <img
          src={imgOne}
          alt="Thumbnail 1"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgOne)}
        />
        <img
          src={imgTwo}
          alt="Thumbnail 2"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgTwo)}
        />
        <img
          src={imgThree}
          alt="Thumbnail 3"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgThree)}
        />
        <img
          src={imgFour}
          alt="Thumbnail 4"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgFour)}
        />
        <img
          src={imgFive}
          alt="Thumbnail 5"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgFive)}
        />
      </div>
    </div>
  );
}
