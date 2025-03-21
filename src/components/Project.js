import Image from "next/image";
import SkillPill from "@/components/SkillPill";
import { PortableText } from '@portabletext/react';

export default function Project({ title, screenshots, description, subheading, technologies, integrations }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {subheading && <h4 className="text-lg italic mb-2">{subheading}</h4>}

      {screenshots && screenshots.length > 0 && (
        <div className="mb-4">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {screenshots.map((image, index) => (
              <div key={index} style={{ width: '150px', height: '100px', cursor: 'pointer' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {description && <div className="mb-4"><PortableText value={description} /></div>}

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