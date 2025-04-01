import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { PortableText } from '@portabletext/react';

export default function Project({ title, subheading, technologies, description, mainImage}) {
  return (
    // console.log(title),
    // console.log(subheading),
    // console.log(technologies),
    // console.log(description),
    // console.log(mainImage),
    // console.log('---'),

    <div className="mb-12">
      {/* Project Title */}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      {/* Project Link Button */}
      {/* {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-4 inline-block"
        >
          View Project
        </a>
      )} */}

      {/* Subheading */}
      {subheading && <h4 className="text-lg italic mb-2">{subheading}</h4>}

      {/* Technologies & Integrations */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4 border-b border-t border-gray-500 py-4">
          <p className="sr-only">Technologies & Integrations</p>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {technologies.map((tech) => (
              <SkillPill key={tech} skill={tech} bgColor='bg-yellow-500'/>
            ))}
          </div>
        </div>
      )}

      {/* Project Description */}
      {description && (
        <div className="text-base mb-8 mx-auto">
          <PortableText value={description} />
        </div>
      )}

      {/* Main Image */}
      {mainImage && (
        <div className="lg:max-w-2xl lg:mx-auto mb-4">
          <div className="w-full">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              loading="lazy"
              priority={false}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}