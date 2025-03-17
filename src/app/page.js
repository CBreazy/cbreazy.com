import Image from 'next/image'
import Project from '@/components/Project';

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
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Chris Brown</h1>
        <p className="text-lg mb-8">Full Stack Developer | UI/UX Specialist</p>
        <p className="text-base mb-8 max-w-2xl">
          A full stack developer specializing in frontend UI development and design. Over five years of experience building visually appealing and high-performance web applications.
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
      <h2 className="text-2xl font-semibold mb-4 text-center">Recent Projects</h2>
        {/* plate-calculator */}
        <Project
            title="Plate Calculator"
            screenshots={[
              { src: '/assets/images/projects/plate-calculator/plate-calculator-og.png', alt: 'Plate Calculator Screenshot' },
            ]}
            subheading="Calculate weightlifting plate combinations quickly and easily. Determine the exact plates needed for your desired weight. Built with Vite, React, and TypeScript."
            technologies={['Bolt', 'TypeScript', 'HTML5', 'JavaScript', 'React', 'Tailwind CSS', 'Vite']}        
            description="I wanted to try a prompt-based development environment, so I built this project using Bolt. I really love barbell training in my spare time and goodplate calculators are hard to find! They are generally hidden behind paywalls, or crammed with ads.
            This was a project I have toyed around with in various stages and iterations for many years, but never completed. I gave Bolt a prompt and it delivered the MVP in seconds. I have since used a combinations of prompts and manual coding to add features and polish the app. I plan to continue to iterate on this project and add more features in the future."
        />

        {/* xenith.com */}
        <Project
            title="Xenith.com Migration & UI Facelift"
            screenshots={[
              { src: '/assets/images/projects/xenith.com/home_desktop.jpg', alt: 'Xenith.com Home Screenshot' },
            ]}
            subheading="Migrate flagship B2C ecom site Xenith.com from Shopify to Craft CMS, improving performance and user experience. Implemented a new design system for a modernized look and feel."
            technologies={['Craft CMS', 'Craft Commerce', 'HTML5', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Twig', 'Git']}
            integrations={['Stripe', 'Google Tag Manager', 'Klaviyo', 'Attentive']}
            description="My role on this project was to handle all things Frontend. A detailed write up and cleansed code samples will be available soon."
        />
      </section>

      {/* skills */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Frontend Skills */}
          <span className="bg-gray-200 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Next.js</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">UI/UX Design</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">HTML5</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">CSS3/SCSS</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">JavaScript</span>

          {/* Backend Skills */}
          <span className="bg-gray-200 px-4 py-2 rounded-full">PHP</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">MySQL</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">REST APIs</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Craft CMS</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">WordPress</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Git</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Agile</span>

          {/* E-commerce & Analytics */}
          <span className="bg-gray-200 px-4 py-2 rounded-full">Stripe</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Google Tag Manager</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Performance Optimization</span>
          {/* Add more skills as needed */}
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-base max-w-2xl">
          I am a full stack developer with a passion for creating exceptional user interfaces and experiences. With a strong foundation in both frontend and backend technologies, I deliver comprehensive web solutions that are both functional and visually stunning.
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