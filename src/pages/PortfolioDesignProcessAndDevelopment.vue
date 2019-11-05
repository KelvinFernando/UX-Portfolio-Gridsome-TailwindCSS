<template>
  <Project>
    <div class="fixed bg-white top-0 w-full shadow hidden lg:block z-50">
      <vue-cobra :height="5" :zIndex="900" color="#4a5568" :opacity="0.8" />
      <nav
        class="container flex mx-auto lg:py-8 text-gray-700 font-display justify-between md:justify-start"
      >
        <div class="mr-5 text-lg lg:text-xl leading-relaxed text-black tracking-tight;">
          &lt;Portfolio Design
          & Development&gt;
        </div>
        <ul class="flex">
          <li>
            <g-link v-scroll-to="'#designchallenge'" class="hover:font-bold">#Design Challenge</g-link>
          </li>
          <li class="mx-5">
            <g-link v-scroll-to="'#userresearch'" class="hover:font-bold" exact>#User Research</g-link>
          </li>
          <li>
            <g-link v-scroll-to="'#atomicdesign'" class="hover:font-bold" exact>#Atomic Design</g-link>
          </li>
          <li class="mx-5">
            <g-link v-scroll-to="'#development'" class="hover:font-bold" exact>#Development</g-link>
          </li>
          <li>
            <g-link v-scroll-to="'#insights'" class="hover:font-bold" exact>#Insights</g-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- HERO SECTION -->
    <main>
      <article>
        <figure>
          <g-image
            src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513518/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Portfolio%20branding%20mockup.png"
            alt="Portfolio branding mockup"
            class="w-full max-h-screen"
          ></g-image>
        </figure>
        <div class="container-inner mx-auto mt-5">
          <h1>
            Portfolio Design Process
            <br />&#38; Development
          </h1>
          <section>
            <section-group
              title="Time to build a UX portfolio"
              body="This portfolio is built with the users and developer handoff in mind. Even though I coded this website, I wanted a scalable design system in which a team member could easily get into. 

After 2 years worth of coffee, I managed to build an Atomic Design system and integrated the design using Tailwind CSS and Gridsome, a Vue.js-powered modern site generator."
            />
          </section>
        </div>

        <!-- DESIGN CHALLENGE -->
        <section id="designchallenge">
          <primary-banner
            class="banner--black"
            title="Design Challenge"
            body="Build a user-centered, scalable portfolio design system and website."
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>As a UX designer, I went through a design process to ensure my design fits the user’s needs. I also made sure that what I design is possible with the technology stack I’m using. I also did a basic accessibility audit to ensure my website is user-friendly.</p>
            </div>
            <div class="mt-10 text-center md:text-left md:flex">
              <div class="md:w-1/2">
                <h2>Design process</h2>
                <ul class="mt-3">
                  <div>
                    <li v-for="items in tools">{{ items.design }}</li>
                  </div>
                </ul>
              </div>
              <div class="mt-10 text-center md:text-left md:mt-0 md:w-1/2">
                <h2>Development</h2>
                <ul class="mt-3 md:flex">
                  <div class="md:w-1/2">
                    <li v-for="items in tools">{{ items.development }}</li>
                  </div>
                  <div class="md:w-1/2 md:mx-6">
                    <li v-for="items in tools">{{ items.development2 }}</li>
                  </div>
                </ul>
              </div>
            </div>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513524/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Laptop%20with%20code.png"
                alt="Laptop with code at work"
                class="mt-10"
              ></g-image>
              <figcaption>First day of #100days of code at work</figcaption>
            </figure>
          </div>
        </section>

        <!-- USER RESEARCH -->
        <section id="userresearch">
          <secondary-banner
            class="banner--gray"
            title="User Research"
            body="I am not the user of my UX portfolio."
          />
          <div class="container-inner mx-auto mt-12">
            <p>Joining Sarah Doody’s mailing list got me one of the best resources on making a UX portfolio. After all, she specializes in UX career building. When I was first starting my portfolio draft, one of my early mistakes was thinking about aesthetic design first.</p>

            <section-group
              title="The 3 users of a UX portfolio "
              body="1. Human Resources Recruiter

Meet Heather.

Heather works as a UX recruiter at a big e-commerce company and is hiring for 5 – 10 positions at any given time. This week, Heather has a deadline to narrow down candidates for a Junior UX Designer role. So far she has 65 applications, and she needs to give the Hiring Manager her short list.

2. Hiring Manager

Meet Latoya.

Latoya has been the design manager at the big e-commerce company for 4 years and her team is 16 people now. She is a busy woman and doesn’t have time to review every candidate’s information.

3. Your potential colleagues

Meet Penelope, Patrick, and Pamela.

These people are all members of the design team. Penelope is a senior designer, Patrick is an interface designer, and Pamela is a UX writer. They usually end up interviewing three candidates for each role: they have a group interview with the candidate, and then each has a 1:1 that’s about 20 minutes."
            />
            <div class="flex justify-end mt-5">
              <a
                href="https://www.invisionapp.com/inside-design/the-3-users-of-your-ux-portfolio/"
                target="_blank"
                rel="noopener"
                class="hover:underline text-lg leading-relaxed tracking-tight lg:text-xl text-right"
              >
                -Sarah Doody
                <br />The 3 users of your UX portfolio
              </a>
            </div>
            <section-group
              title="Design decisions"
              body="The results from various research studies on UX portfolios and its users became the basis of my design decision. I opted for cards rather than the common project selection menu to give the users a better project summary which included the read time, project type, and the relevant skills. Other added features are the header with section selection to give users the ability to skip to specific sections, added scroll indicator on top, view resume link, and a more project selection at the end of each project."
            />
          </div>
        </section>

        <!-- ATOMIC DESIGN SYSTEM -->
        <section id="atomicdesign">
          <secondary-banner
            class="banner--gray"
            title="Atomic Design System"
            body="We’re not designing pages, we’re designing systems of components.
—Stephen Hay"
          />

          <div class="container-inner mx-auto">
            <p class="mt-12">
              I follow both Dan Mall and Brad Frost when it comes to design systems and their impact on teams. I appreciated the importance of it furthermore when I tried to incorporate Brad Frost’s Atomic Design System in my portfolio design. Having components is powerful and saved me a lot of time both in design and development. The ability to redesigning a single component to change its design on every other instance is essential to design systems.
              <br />
              <br />Here is an example of a project card using atomic design.
            </p>
            <h2 class="mt-8">Atoms</h2>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Card%20hovered%20component.png"
                class="mt-5 mx-auto w-2/3"
                alt="Card hovered component"
              ></g-image>
              <figcaption>Card hovered component</figcaption>
            </figure>
            <div class="lg:flex lg:justify-end lg:mt-5">
              <figure class="lg:flex flex-col lg:justify-end">
                <g-image
                  src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513513/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Pill%20component.png"
                  class="mt-5 mx-auto"
                  alt="Gray pill component"
                ></g-image>
                <figcaption>Pill component</figcaption>
              </figure>
              <figure class="lg:mx-10">
                <g-image
                  src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/color%20component.png"
                  class="mt-5 mx-auto"
                  alt="Red color component"
                ></g-image>
                <figcaption>Color component</figcaption>
              </figure>
              <figure class="lg:flex flex-col lg:justify-end">
                <g-image
                  src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Typography%20components.png"
                  class="mt-5 mx-auto"
                  alt="Typography components"
                ></g-image>
                <figcaption>Typography components</figcaption>
              </figure>
            </div>
            <div class="mt-12">
              <h2>Molecules</h2>
            </div>

            <div class="lg:flex lg:items-end lg:mx-5">
              <figure>
                <g-image
                  src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Labeled%20pill%20component.png"
                  class="mt-5 mx-auto"
                  alt="Labeled pill component"
                ></g-image>
                <figcaption>Labeled pill component</figcaption>
              </figure>
              <figure>
                <g-image
                  src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513515/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/H2%20and%20base%20component.png"
                  class="mt-5 mx-auto lg:w-2/3"
                  alt="Heading 2 and base text using typography component"
                ></g-image>
                <figcaption>Heading 2 and base text using typography component</figcaption>
              </figure>
            </div>

            <div class="mt-12">
              <h2>Organisms</h2>
            </div>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513515/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Kodoo%20card%20component.png"
                class="mt-5 mx-auto lg:w-2/3"
                alt="Kodoo project card component"
              ></g-image>
              <figcaption>By combining atoms and molecules, a reusable card component is built which can then be used in pages and templates.</figcaption>
            </figure>
            <div
              class="container flex flex-col text-lg leading-loose tracking-tight lg:text-xl mt-5"
            >
              <iframe
                class="hidden lg:block mt-8"
                style="border: none;"
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcYLVzGBoLVCnJLvnHp8XfF%2FKelvin-s-UX-portfolio%3Fnode-id%3D0%253A1"
                allowfullscreen
              ></iframe>
              <a
                href="https://www.figma.com/file/cYLVzGBoLVCnJLvnHp8XfF/Kelvin-s-UX-portfolio?node-id=0%3A1"
                target="_blank"
                class="underline mx-auto hover:text-bluelink"
                rel="noopener"
              >Open the complete atomic design system on Figma</a>
            </div>
          </div>
        </section>

        <!-- TAILWIND CSS WITH VUE COMPONENTS -->
        <section id="development">
          <secondary-banner
            class="banner--gray"
            title="Tailwind CSS with Vue components"
            body="Design system for developers"
          />
          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >As a utility-first CSS framework, Tailwind was the perfect tool for me to incorporate it with my design system. The customization is seamless, letting me add my values from my atomic design system such as colors and typography. Along with Vue components, it becomes similar to a design system where each component is re-usable and can be easily managed.</p>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513518/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Kodoo%20Card%20Vuejs.png"
                class="mt-10 mx-auto"
                alt="Kodoo project card component code snippet with Vue.js"
              ></g-image>
              <figcaption>Kodoo Card Vuejs</figcaption>
            </figure>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513515/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Tailwind%20config.png"
                class="mx-auto"
                alt="Tailwind.config code snippet"
              ></g-image>
              <figcaption class="-mt-5 md:-mt-10">Tailwind config</figcaption>
            </figure>
          </div>
          <div class="container">
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/main%20css%20utilities.png"
                class="mt-10 mx-auto"
                alt="Main.css code snippet"
              ></g-image>
              <figcaption
                class="container-inner mx-auto"
              >By combining atoms and molecules, a reusable card component is built which can then be used in pages and templates.</figcaption>
            </figure>
          </div>

          <div class="container flex flex-col text-lg leading-loose tracking-tight lg:text-xl mt-5">
            <a
              href="https://github.com/KelvinFernando/UX-Portfolio-Gridsome-TailwindCSS"
              target="_blank"
              class="underline mx-auto hover:text-bluelink"
              rel="noopener"
            >View code on Github</a>
          </div>
        </section>

        <!-- ACCESSIBILITY AUDIT -->
        <section id="development">
          <secondary-banner
            class="banner--gray"
            title="Accessibility audit"
            body="Design and development for everyone"
          />
          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >As Christopher and Nicolas from Knowbility said, “We don’t have an accessibility problem, we have an awareness problem”. As products get introduced to the public, accessibility is often overlooked. A lot of these problems can be fixed with simple general accessibility audits such as color and contrast, and image alt attributes. I used A11y’s accessibility checklist to check this site’s accessibility.</p>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Fixed%20contrast%20pill.png"
                class="mt-10 mx-auto"
                alt="Fixing contrast pill using black text"
              ></g-image>
              <figcaption>By using black text the contrast is improved</figcaption>
            </figure>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513515/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/html%20head%20attributes.png"
                class="mt-10 mx-auto"
                alt="Html head attributes code snippet"
              ></g-image>
              <figcaption>By simply adding one line of html attribute my accesibility score improved</figcaption>
            </figure>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513515/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/ARIA%20landmarks.png"
                class="mt-10 mx-auto md:w-2/3"
                alt="ARIA landmarks code snippet"
              ></g-image>
              <figcaption>I also used ARIA landmarks for better navigation</figcaption>
            </figure>
          </div>
        </section>

        <!-- INSIGHTS -->
        <section id="insights">
          <secondary-banner
            class="banner--gray"
            title="Insights"
            body="Areas for continued development"
          />
          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >This portfolio is built with long-term updates and maintenance in mind. Accessibility improvements, portfolio usability, and user-testing are on my top to-do list. I would also like to have this site as a JAM stack project in the future with more CSS animation.</p>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513514/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Axe%20audit.png"
                class="mt-10 mx-auto lg:w-1/3"
                alt="Axe audit result"
              ></g-image>
              <figcaption>Accessibility audit using Axe</figcaption>
            </figure>
          </div>
        </section>
        <!-- CREDITS -->
        <section>
          <section-credits body="Sarah Doody
UX Portfolio research and tips
" />
          <div class="italic mt-24 text-center">Thank you for visiting my project!</div>
        </section>
      </article>

      <!-- NEXT PROJECT -->
      <div class="nextproject">
        <div class="container">
          <h2 class="text-center mb-5">More Projects</h2>
          <div class="flex flex-col items-center">
            <proj-card-kodoo />
            <proj-card-toyo class="mt-5" />
            <proj-card-companion class="mt-5" />
          </div>
        </div>
      </div>
    </main>
  </Project>
</template>


<script>
import ProjCardToyo from "../components/ProjCardToyo";
import ProjCardKodoo from "../components/ProjCardKodoo";
import ProjCardCompanion from "../components/ProjCardCompanion";
import SectionGroup from "../components/SectionGroup";
import PrimaryBanner from "../components/PrimaryBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import SectionCredits from "../components/SectionCredits";
export default {
  data() {
    return {
      tools: [
        { design: "User Research" },
        { design: "Persona" },
        { design: "Ideation" },
        { design: "Atomic design" },
        { design: "Reflection" },
        { development: "HTML 5" },
        { development: "CSS 3" },
        { development: "Vue.js" },
        { development: "Tailwind CSS" },
        { development: "Gridsome" },
        { development2: "NPM" },
        { development2: "Git" },
        { development2: "Netlify" },
        { development2: "Axe audit" }
      ]
    };
  },
  metaInfo: {
    title: " Portfolio Research, Design System, & Development"
  },
  components: {
    ProjCardToyo,
    ProjCardKodoo,
    ProjCardCompanion,
    SectionGroup,
    PrimaryBanner,
    SecondaryBanner,
    SectionCredits
  }
};
</script>

<style lang="scss" scoped>
</style>