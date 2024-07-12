import { useState } from "react";
import imgOne from "../assets/Business/imgOne.png";
import imgTwo from "../assets/Business/imgTwo.png";
import imgThree from "../assets/Business/imgThree.png";
import imgFour from "../assets/Business/imgFour.png";
import imgFive from "../assets/Business/imgFive.png";
import imgSix from "../assets/Business/imgSix.png";
import { Badge } from "@/components/ui/badge";
// import videoFile from "../assets/Business/video.mov";
export default function BusinessWebsiteComponet() {
  const [currentImg, setCurrentImg] = useState(imgOne);
  const handleImageClick = (imgSrc: any) => {
    setCurrentImg(imgSrc);
  };

  return (
    <div className="w-full">
      {/* <header className="bg-[url('/placeholder.svg')] bg-cover bg-center py-12 md:py-16 lg:py-20"> */}
      <header className="bg-gradient-to-r from-red-500 to-orange-400  py-12 md:py-16 lg:py-20 text-white">

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            WaliaJobs
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl text-white">
            Revolutionizing the job search experience, WaliaJobs introduces
            innovative methods that transform how candidates find their ideal
            roles. By leveraging cutting-edge technology and a user-focused
            approach, WaliaJobs ensures a smoother, more effective job hunting
            process for everyone.
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
              <h2 className="text-2xl font-bold">WaliaJobs</h2>
            </div>
            <div>
              <label className="text-sm font-medium">Url</label>
              <p className="text-muted-foreground">
                https://walia-jobs.vercel.app/
              </p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <p>
              WaliaJobs is changing the way we look for jobs. We don’t stick to
              old rules or slow methods. We keep things simple and avoid
              confusing steps. Our main goal is to get real results for people
              looking for jobs and for companies looking for workers. We focus
              on what truly matters—not on adding too many features, but on
              making it easier and faster to find the right job or the right
              person for a job.
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
