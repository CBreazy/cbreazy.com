import Image from "next/image";
import Project from "@/components/Project";
import SkillPill from "@/components/SkillPill";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
      {/* bio */}
      <section className="text-center mb-16">
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8">
          {/* headshot */}
          <Image
            src="/assets/images/headshots/IMG_3117.jpg" // src of the image
            alt="Chris Brown Headshot"
            width={192} // Set the width of the image
            height={192} // Set the height of the image
            className="w-full h-full object-cover"
            priority={true} // Optional: to load the image with priority
            loading="eager" // Optional: to load the image eagerly
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Chris Brown</h1>
        <p className="text-lg mb-8">Full Stack Developer | UI/UX Specialist</p>
        <p className="text-base mb-8 max-w-2xl">
          A full stack developer specializing in frontend UI development and
          design. Over five years of experience building visually appealing and
          high-performance web applications.
        </p>
        {/* email */}
        <a
          href="mailto:cabrown02@gmail.com"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </section>

      {/* recent projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Recent Work
        </h2>

        {/* plate-calculator */}
        <Project
          title="Plate Calculator (2025)"
          screenshots={[
            {
              src: "/assets/images/projects/plate-calculator/plate-calculator-og.png",
              alt: "Plate Calculator Screenshot",
            },
          ]}
          subheading="Calculate weightlifting plate combinations quickly and easily. Determine the exact plates needed for your desired weight. Built with Vite, React, and TypeScript."
          technologies={[
            "Bolt",
            "TypeScript",
            "HTML5",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Vite",
          ]}
          description={
            <div>
              <p>
                This was a project I have toyed around with in various stages and iterations for many years, but never completed. I also was curious about prompt-based development environments, so I decided to give Bolt a try and built this. I really love barbell training in my spare time and <strong>good plate calculators are hard to find!</strong> They are generally hidden behind paywalls or crammed with ads. I gave Bolt a single-sentence prompt and it delivered the MVP in seconds!
              </p>

              <br/>

              <p>
                I have since used a combinations of prompts and manual coding to add features and polish the app. I plan to continue to iterate on this project and add more features in the future.
              </p>
            </div>
          }
        />

        {/* ------------ xenith.com --------------- */}
        <Project
          title="Xenith.com Migration & UI Facelift (2022 - 2025)"
          screenshots={[
            {
              src: "/assets/images/projects/xenith.com/home_desktop.jpg",
              alt: "Xenith.com Home Screenshot",
            }
          ]}
          subheading="Migrate flagship B2C ecom site Xenith.com from Shopify to Craft CMS, improving performance and user experience."
          technologies={[
            "Craft CMS",
            "Craft Commerce",
            "HTML5",
            "JavaScript",
            "Tailwind CSS",
            "PHP",
            "MySQL",
            "Twig",
            "Git",
          ]}
          integrations={[
            "Stripe",
            "Google Tag Manager",
            "Klaviyo",
            "Attentive",
          ]}
          description=
          {
            <div>
              <p>The Xenith project involved the development of a new e-commerce website for Xenith, LLC., a leading American Football sports equipment manufacturer. The goal was to transition the site to a platform that allowed for more custom feature development creating a modern, user-friendly online store that would enhance the customer experience and drive sales. As the front-end developer on the Xenith project, I was responsible for refining and implementing the user interface, developing interactive components, and ensuring a responsive design across various devices.</p>
              <br/>
              <p>When the front-end work stabilized, I identified opportunities to contribute to the back-end and took on tasks like handling various API integrations, writing Twig extensions, POSTing to Controllers and writing services to process that data, as well as other server side logic to extend Craft CMS. This allowed me to contribute to both the user-facing and server-side aspects of the project, ensuring a robust and efficient e-commerce platform.</p>
              <br/>
              <p>I also learned a ton! On the technical side of things there was only a two man team to deliver this and an accompanying B2B portal (which due to NDA&apos;s I can&apos;t discuss). Because of this small team, I sat-in on all the architecture brainstorming for the entire multi-site project and contributed where approppriate. This was a more &quot;traditional&quot; LAMP stack which is not very popular anymore. The new ecommerce site launched in 2023 and was supported through the end of 2024.</p>
            </div>
          }
        />
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
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-base max-w-2xl">
          I am a full stack developer with a passion for creating exceptional
          user interfaces and experiences. With a strong foundation in both
          frontend and backend technologies, I deliver comprehensive web
          solutions that are both functional and visually stunning. Most of all,
          I am a problem solver and task oriented person. I am always eager to
          learn new technologies and improve my skills. I am also a real human!
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/chris-brown-516158182/" // Replace with your LinkedIn profile
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/CBreazy" // Replace with your GitHub profile
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}