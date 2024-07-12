import { useState } from "react";
import imgOne from "../assets/Admin/img1.png";
import imgTwo from "../assets/Admin/img2.png";
import imgThree from "../assets/Admin/img3.png";
import imgFour from "../assets/Admin/img4.png";
import imgFive from "../assets/Admin/img5.png";
import imgSix from "../assets/Admin/img6.png";
import { Badge } from "@/components/ui/badge";
// import videoFile from "../assets/Business/video.mov";
export default function AdminDashboard() {
  const [currentImg, setCurrentImg] = useState(imgOne);
  const handleImageClick = (imgSrc: any) => {
    setCurrentImg(imgSrc);
  };

  return (
    <div className="w-full">
      <header className="bg-[url('/placeholder.svg')] bg-cover bg-center py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Admin Dashboard 
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl">
            Next.js 14 Admin Dashboard Template With Shadcn
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
            className="aspect-video w-full rounded-lg "
          />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <h2 className="text-2xl font-bold">Admin Dashboard </h2>
            </div>
            <div>
              <label className="text-sm font-medium">Url</label>
              <p className="text-muted-foreground">
                https://next-shadcn-dashboard-starter.vercel.app/
              </p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <p>
              Master your management tasks with our Dynamic Admin Dashboard
              Template, ideal for detail-oriented administrators. This
              user-friendly dashboard comes equipped with customizable widgets
              and essential tools to handle various administrative functions.
              Track real-time data, manage user roles, and monitor key metrics
              all in one central hub. Designed for easy integration with
              multiple data sources, our dashboard promotes a smooth and
              efficient user experience, enabling you to make informed decisions
              and efficiently oversee any size operation.
            </p>
          </div>
          <div>
            <label className="text-sm font-medium">Technologies Used</label>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  MongoDB
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Node.js
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Next.js
                </Badge>
              </li>
              <li className="bg-muted rounded-md px-3 py-1 text-sm font-medium mt-2">
                <Badge variant="secondary" className="rounded-md">
                  Typescript
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
        {/* <video
          width="1200"
          height="675"
          onClick={() => handleImageClick(videoFile)}
          controls
          className="aspect-video w-full rounded-lg object-cover"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

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
        <img
          src={imgSix}
          alt="Thumbnail 6"
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg object-cover"
          onClick={() => handleImageClick(imgFive)}
        />
      </div>
    </div>
  );
}
