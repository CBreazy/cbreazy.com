import Image from "next/image";
// import ThumbnailGallery from "@/components/ThumbnailGallery";
// components/Project.js
export default function Project({ title, screenshots, subheading, technologies, integrations, description }) {
    return (
      <div className="w-full mb-12">
        {/* title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {/* subheading */}
        <p className="mb-4"><span className="font-bold">Task: </span>{subheading}</p>

        {/* {screenshots && screenshots.length > 0 && (
          <div className="mb-4">
            <ThumbnailGallery images={screenshots} />
          </div>
        )} */}

        {/* technologies & integrations*/}
        {technologies && <hr className="mb-4" />}
        {technologies && <div className="flex flex-wrap justify-center gap-4 my-8">
            {technologies && technologies.map((tech, index) => (
                <span key={index} className="bg-yellow-500 px-3 py-1.5 rounded-full font-nudista text-xs text-neutral-900">{tech}</span>
            ))}

            {integrations && integrations.map((integration, index) => (
                <span key={index} className="bg-purple-800 px-3 py-1.5 rounded-full font-nudista text-xs text-neutral-200">{integration}</span>
            ))}
        </div>}

        {/* description */}
        {description && <hr className="mb-4" />}
        {description && <div className="mb-4">{description}</div>}

        {/* screenshots */}
        <div className="flex flex-1 flex-wrap gap-4">
          {screenshots && screenshots.map((screenshot, index) => ( // Added a check for screenshots    
            <Image
                key={index}
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full rounded-lg shadow-md"
                loading="lazy"
                width={800} // Adjust width as needed
                height={300} // Adjust height as needed
            />
          ))}
        </div>
      </div>
    );
  }