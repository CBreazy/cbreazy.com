import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { PortableText } from '@portabletext/react';
import Gallery from './Gallery';
import Link from 'next/link';

export default function Project({ title, subheading, technologies, description, mainImage, galleryImages, projectLink}) {
  return (
    // console.log(title),
    // console.log(subheading),
    // console.log(technologies),
    // console.log(description),
    // console.log(mainImage),
    // console.log('---'),

    <div className="mb-12">
      {/* Project Title */}
      <div className="flex gap-4 mb-4">
      <h3 className="text-2xl/10 font-semibold">{title}</h3>
      {projectLink && (
        <Link href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-neutral-700 mx-auto block hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">view project</button>
        </Link>
      )}
      </div>

      {/* Subheading */}
      {subheading && <h4 className="text-lg italic mb-2">{subheading}</h4>}

      {/* Technologies & Integrations */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <p className="sr-only">Technologies & Integrations</p>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {technologies.map((tech) => (
              <SkillPill key={tech} skill={tech} bgColor='bg-yellow-500'/>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="mb-4">
          <p className="sr-only">Image Gallery</p>
          <Gallery images={galleryImages} />
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