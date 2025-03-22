import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { PortableText } from '@portabletext/react';

export default function Project({ title, subheading, mainImage, description, technologies, integrations }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {subheading && <h4 className="text-lg italic mb-2">{subheading}</h4>}

      {mainImage && (
        <div className="mb-4">
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

      {description && <div className="mb-4">{description}</div>}

      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <p className="font-semibold">Technologies:</p>
          <ul className="list-disc list-inside">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {integrations && integrations.length > 0 && (
        <div className="mb-4">
          <p className="font-semibold">Integrations:</p>
          <ul className="list-disc list-inside">
            {integrations.map((integration) => (
              <li key={integration}>{integration}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}