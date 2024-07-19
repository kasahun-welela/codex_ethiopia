import { useState } from "react";
import imgOne from "../assets/Personal/img1.png";
import imgTwo from "../assets/Personal/img2.png";
import imgThree from "../assets/Personal/img3.png";
import imgFour from "../assets/Personal/img4.png";
import imgFive from "../assets/Personal/img5.png";
import { Badge } from "@/components/ui/badge";

export default function PaymetnIntegrationComponet() {
  const [currentImg, setCurrentImg] = useState(imgOne);
  const handleImageClick = (imgSrc: any) => {
    setCurrentImg(imgSrc);
  };

  return (
    <div className="w-full">
      <header className="bg-[url('/placeholder.svg')] bg-cover bg-center py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            SML Lawyers
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl">
            SML Lawyers is a new breed of law firm. We don’t stand on tradition
            or outdated ways of doing business. We don’t hide behind legalese or
            arcane legal procedures. The focus is on getting results for our
            clients, not on how our foyer looks.
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
              <h2 className="text-2xl font-bold">SML Lawyers Website</h2>
            </div>
            <div>
              <label className="text-sm font-medium">Url</label>
              <a
                href="https://solomonmoalawoffice.com/"
                target="_blank"
                className="text-muted-foreground"
              >
                https://solomonmoalawoffice.com/
              </a>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <p>
              SMA Lawyers is a multidisciplinary team of respected legal
              professionals with offices in Addis Ababa, Bahir Dar, Hawassa,
              Mekelle and the Adama. Combining years of legal experience with
              our commercially minded approach to matters, we achieve favourable
              outcomes for all our clients, no matter how complex the situation.
              With core values of attention to detail, thorough preparation,
              intelligent strategy and efficient service delivery, we provide
              comprehensive legal service to individuals, small and large
              business, and major multinational companies alike.
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
