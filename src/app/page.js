import Image from "next/image";
import Project from "@/components/Project";
import SkillPill from "@/components/SkillPill";
import { client, urlFor } from '../../sanity/lib/client';
import { PortableText } from '@portabletext/react';

async function getProjects() {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);
  return projects;
}

async function getAbout() {
  const query = `*[_type == "about"][0]`;
  const about = await client.fetch(query);
  return about;
}

export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
      {/* bio */}
      <section className="text-center mb-16">
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8">
          {/* headshot */}
          {about && about.headshot && (
            <Image
              src={urlFor(about.headshot).url()}
              alt={about.headshot.alt}
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority={true}
              loading="eager"
            />
          )}
        </div>
        <h1 className="text-4xl font-bold mb-4">Chris Brown</h1>
        <p className="text-lg mb-8">Full Stack Developer | UI/UX Specialist</p>
        <div className="text-base mb-8 max-w-2xl mx-auto">
          {about && about.bio && <PortableText value={about.bio} />}
        </div>
        {/* email */}
        {about && about.contactInfo && (
          <a
            href={`mailto:${about.contactInfo.email}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Contact Me
          </a>
        )}
      </section>

      {/* recent projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Recent Work
        </h2>

        {/* plate-calculator */}
        {projects.map((project) => (
          <Project
            key={project._id}
            title={project.title}
            screenshots={project.screenshots.map((screenshot) => ({
              src: urlFor(screenshot).url(),
              alt: screenshot.alt,
            }))}
            subheading={project.subheading}
            technologies={project.technologies}
            description={<PortableText value={project.description} />}
          />
        ))}

      </section>

      {/* skills */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Frontend Skills */}
          {(() => {
            const frontendSkills = [
              "React",
              "Next.js",
              "Tailwind CSS",
              "HTML5",
              "CSS3/SCSS",
              "JavaScript",
              "UI/UX Design",
            ];
            return frontendSkills.map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ));
          })()}

          {/* Backend Skills */}
          {(() => {
            const backendSkills = [
              "Node.js",
              "Express",
              "PHP",
              "MySQL",
              "REST APIs",
              "Craft CMS",
              "WordPress",
              "Git",
              "Agile",
            ];
            return backendSkills.map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ));
          })()}
          {/* E-commerce & Analytics */}
          {(() => {
            const ecommerceSkills = [
              "Stripe",
              "Google Tag Manager",
              "Performance Optimization",
            ];
            return ecommerceSkills.map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ));
          })()}
          {/* Add more skills as needed */}
          {/* Design Tools */}
          {(() => {
            const designTools = [
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Adobe InDesign",
              "Adobe XD",
            ];
            return designTools.map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ));
          })()}
        </div>
      </section>

      {/* about me */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="text-base max-w-2xl mx-auto">
          {about && about.bio && <PortableText value={about.bio} />}
        </div>
      </section>

      {/* connect with me */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
        <div className="flex justify-center gap-4">
          {about && about.contactInfo && (
            <>
              <a
                href={about.contactInfo.linkedin}
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={about.contactInfo.github}
                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </section>
    </main>
  );
}