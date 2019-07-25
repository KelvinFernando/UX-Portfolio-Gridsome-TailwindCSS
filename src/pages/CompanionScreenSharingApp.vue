<template>
  <Project>
    <div class="fixed bg-white top-0 w-full shadow hidden lg:block z-50">
      <vue-cobra :height="5" :zIndex="900" color="#558ED5" :opacity="0.8" />
      <nav
        class="container flex mx-auto lg:py-8 text-gray-700 font-display justify-between md:justify-start"
      >
        <div
          class="mr-5 text-lg lg:text-xl leading-relaxed text-black tracking-tight;"
        >&lt;Companion App&gt;</div>
        <ul class="flex">
          <li>
            <g-link v-scroll-to="'#designchallenge'" class="hover:font-bold">#Design Challenge</g-link>
          </li>
          <li class="mx-5">
            <g-link v-scroll-to="'#userresearch'" class="hover:font-bold" exact>#User Research</g-link>
          </li>
          <li>
            <g-link v-scroll-to="'#ideation'" class="hover:font-bold" exact>#Ideation</g-link>
          </li>
          <li class="mx-5">
            <g-link v-scroll-to="'#wireframe'" class="hover:font-bold" exact>#Wireframe</g-link>
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
        <div class="mt-5">
          <video width="auto" height="auto" playsinline autoplay muted loop>
            <source
              src="https://res.cloudinary.com/kelvinfernando/video/upload/q_auto:best/v1563871603/Ux%20portfolio/Companion-app/Companion%20app%203d%20mockup.mov"
              type="video/mp4"
            />Your browser does not support the video tag.
          </video>
        </div>
        <div class="container-inner mx-auto">
          <h1>
            Companion
            <br />Screen Sharing App
          </h1>
          <section>
            <section-group
              title="Accessible Tech: Always with you "
              body="“Can you help me use this app?” - Mom

Sounds familiar? Helping old tenants with apps became part of my job as a doorman. As much as I love helping them, I won’t be available to assist them 24/7. One of them even had an “iPhone tutor” coming over once a week.

Technology is always evolving, but sadly, it is not always accessible to the older members of our family who wants to stay connected. "
            />
          </section>
        </div>

        <!-- DESIGN CHALLENGE -->
        <section id="designchallenge">
          <primary-banner
            class="banner--black"
            title="Design Challenge"
            body="What if there is a way to easily assist the elderly virtually?"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>This is the question that sparked the idea of this personal project. Companies like Apple and Google are always working on making phones more accessible but there will always be limitations versus a personal assistant guiding you through your screen.</p>
            </div>
            <div class="mt-10 text-center lg:text-left">
              <h2>Design process</h2>
            </div>
            <div class="text-center lg:text-left lg:flex">
              <ul class="mt-3 lg:flex">
                <div>
                  <li v-for="items in design">{{ items.process }}</li>
                </div>
                <div class="lg:mx-40">
                  <li v-for="items in design">{{ items.process2 }}</li>
                </div>
                <div>
                  <li v-for="items in design">{{ items.process3 }}</li>
                </div>
              </ul>
            </div>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563940869/Ux%20portfolio/Companion-app/Kelvin%20at%20work.jpg"
                alt="Kelvin at work"
                class="mt-10"
              ></g-image>
              <figcaption>Working as a doorman but they see me as the tech guy.</figcaption>
            </figure>
          </div>
        </section>

        <!-- USER RESEARCH -->
        <section id="userresearch">
          <secondary-banner
            class="banner--darkskyblue"
            title="User Research"
            body="User-centered approach: Understanding mobile use by elders"
          />
          <div class="container-inner mx-auto mt-12">
            <p>As more people age, we cannot deny that the advancement in technology is no less than useful for elders than to young people. By addressing accessibility, the advantages offered by tech will be usable for elders in improving their quality of life. It can serve as their second “crutch” which should aide and not frustrate them.</p>
            <section-group
              title="Aeging and Health"
              body="• Between 2015 and 2050, the proportion of the world's population over 60 years will nearly double from 12% to 22%.

• By 2020, the number of people aged 60 years and older will outnumber children younger than 5 years.

• In 2050, 80% of older people will be living in low- and middle-income countries.

• The pace of population ageing is much faster than in the past.

• All countries face major challenges to ensure that their health and social systems are ready to make the most of this demographic shift."
            />
            <div class="flex justify-end mt-5">
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/ageing-and-health"
                target="_blank"
                rel="noopener"
                class="hover:underline text-lg leading-relaxed tracking-tight lg:text-xl text-right"
              >-World Health Organization</a>
            </div>
            <section-group
              title="Mobile communication for Elders/disabled"
              body="•  Personal communication: for users with restricted movement, mobile technology enhances their chances of personal communication.

•  Security: situations of illness, home accidents and so on, require a quick communication channel.

•  Social Integration. Access to education and labour market: Services like teleworking and tele-education contributes to social inclusion and autonomy of user with disabilities.

•  Autonomy: the combination of personal communication, security, and access to integrative services
gives to people with disabilities and older people more opportunities to carry out an independent way
of life.
"
            />
            <div class="flex justify-end mt-5">
              <a
                href="https://www.sciencedirect.com/science/article/pii/S1877050914000106"
                target="_blank"
                rel="noopener"
                class="hover:underline text-lg leading-relaxed tracking-tight lg:text-xl text-right"
              >
                -José-ManuelDíaz-Bossini,
                <br />Accessibility to Mobile Interfaces for Older People
              </a>
            </div>
            <section-group
              title="Most seniors say they need help using new electronic devices"
              body="%U.S adults who say the statement, “When I get a new electronic device, I usually need someone else to get it up or show me how to use it, describes them very or somewhat well, by age. Net category rounded. 
-Pew Research Center
"
            />
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563943649/Ux%20portfolio/Companion-app/Need%20for%20help%20graph.png"
                alt="Need for help graph"
                class="mt-10 md:w-2/3 md:mx-auto"
              ></g-image>
            </figure>
            <section-group
              title="Most seniors say technology has had a mostly positive effect on society"
              body="%U.S adults age 65 and older who say they own the following. -Pew Research Center
"
            />
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563943649/Ux%20portfolio/Companion-app/Senior%20smartphone%20use%20graph.png"
                alt="Senior smartphone use graph"
                class="mt-10 md:w-2/3 md:mx-auto"
              ></g-image>
            </figure>
            <section-group
              title="Most seniors say technology has had a mostly positive effect on society"
              body="%U.S adults age 65 and older who say technology has had a _ impact on society. -Pew Research Center
"
            />
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563943649/Ux%20portfolio/Companion-app/Effect%20of%20smartphone%20pie%20chart.png"
                alt="Effect of smartphone pie chart"
                class="mt-10 md:w-2/3 md:mx-auto"
              ></g-image>
            </figure>
          </div>
        </section>

        <!-- IDEATION -->
        <section id="ideation">
          <secondary-banner
            class="banner--darkskyblue"
            title="Ideation"
            body="User persona and affinity mapping"
          />

          <div class="container-inner mx-auto">
            <p class="mt-12">
              I used whiteboarding to create a persona that would reflect a user. I did a simple affinity mapping of features that would benefit the app based on the persona and grouped according to similarity. Since this is a solo project, I did the design ideation by my self. On a team, I would’ve loved to participate in a One-Hundred-Dollar Test
              to determine the most important features. And of course, talk to developers on what is possible.
            </p>
            <div class="mt-10">
              <video width="auto" height="auto" playsinline autoplay muted loop>
                <source
                  src="https://res.cloudinary.com/kelvinfernando/video/upload/f_auto,q_auto/v1561791133/Ux%20portfolio/Companion-app/Proccess.mp4"
                  type="video/mp4"
                />Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="lg:flex">
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563941560/Ux%20portfolio/Companion-app/Whiteboarding%20persona.png"
                class="mt-10"
                alt="Whiteboarding persona"
              ></g-image>
            </figure>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563941561/Ux%20portfolio/Companion-app/Whiteboarding%20Feautures.png"
                class="lg:mt-10"
                alt="Whiteboarding Feautures"
              ></g-image>
            </figure>
          </div>
          <div class="container mx-auto">
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563941562/Ux%20portfolio/Companion-app/Ms%20Shapiro%20persona.png"
                class="mt-10 lg:w-5/6 mx-auto"
                alt="Mrs Shapiro persona"
              ></g-image>
            </figure>
          </div>
          <div class="container-inner mx-auto mt-10">
            <figure>
              <audio
                controls
                src="https://res.cloudinary.com/kelvinfernando/video/upload/v1563875608/Ux%20portfolio/Companion-app/Mrs.%20Shapiro%20Interview.m4a"
                class="mx-auto"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
              <figcaption>
                “I know what it’s like to be alone” -Mrs. Shapiro.
                A snippet from an interview turned therapy session.
              </figcaption>
            </figure>
          </div>
        </section>

        <!-- WIREFRAME AND PROTOTYPE -->
        <section id="wireframe">
          <secondary-banner
            class="banner--darkskyblue"
            title="Wireframe and prototype"
            body="Designing for simplicity"
          />
          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >The last thing I want for this app is an interface too complicated for its users. After all, this is an app that is suppose to help guide users. I decided to go with a hub-and-spoke interface and welcome users with two option to connect which identifies the assistant and the one who needs help. Idid not design the usual code/pin based confirmation since it requires cognitive load to memorize the code. In my personal experience, I even had to teach someone how to copy and paste a text in IOS. A unique shared link which will connect and prompt users to download the app if they don’t have one seems to be a better solution. Open to debate.</p>
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563955155/Ux%20portfolio/Companion-app/Link%20sharing%20wireframe.png"
              alt="Link sharing wireframe"
            ></g-image>
            <figcaption>Uniqe link sharing for authentication</figcaption>
          </figure>
          <figure class="mt-10">
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563955557/Ux%20portfolio/Companion-app/Screen%20sharing%20wireframe.png"
              alt="Screen sharing wireframe"
            ></g-image>
            <figcaption>Screen sharing user interface</figcaption>
          </figure>

          <div class="container flex flex-col text-lg leading-loose tracking-tight lg:text-xl mt-5">
            <a
              href="https://projects.invisionapp.com/freehand/document/Sf9NmcD3W"
              target="_blank"
              class="underline lg:mx-auto hover:text-bluelink"
              rel="noopener"
            >View complete Freehand wireframe</a>
            <a
              href="https://projects.invisionapp.com/prototype/companion-sketch-cjyfi3tam000qst01okwonqw9/play/b9082c6e"
              target="_blank"
              class="underline lg:mx-auto hover:text-bluelink"
              rel="noopener"
            >View homescreen prototype on Invisionapp</a>
          </div>
        </section>

        <!-- INSIGHTS -->
        <section id="insights">
          <secondary-banner
            class="banner--darkskyblue"
            title="Insights"
            body="No designer is an island"
          />
          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >This is just the initial design and it is missing more usability and user testing. I would also love to have feedback from other designers and developers for its feature’s possibility and improvement. I believe in having all hands on deck when designing an app. Every part of the team should be aware of and consulted on every design decision. That is why I also believe that designers should sit with developers during handoffs and not just send a Zepplin file. But that is for another story.</p>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563940869/Ux%20portfolio/Companion-app/Brainstorming%20illustration.png"
                alt="Axe audit result"
              ></g-image>
              <figcaption
                class="-mt-5 lg:-mt-10"
              >Illustration from The Brainstorm Session by Pablo Stanley</figcaption>
            </figure>
          </div>
        </section>
        <!-- CREDITS -->
        <section>
          <section-credits
            body="Pablo Stanley
Rotato and Invision Studio tutorial

Deen Vasquez
Assistance on whiteboarding
"
          />
          <div class="italic mt-24 text-center">Thank you for visiting my project!</div>
        </section>
      </article>

      <!-- NEXT PROJECT -->
      <div class="nextproject">
        <div class="container">
          <h2 class="text-center mb-5">More Projects</h2>
          <div class="flex flex-col items-center">
            <proj-card-portfolio />
            <proj-card-kodoo class="mt-5" />
            <proj-card-toyo class="mt-5" />
          </div>
        </div>
      </div>
    </main>
  </Project>
</template>


<script>
import ProjCardToyo from "../components/ProjCardToyo";
import ProjCardKodoo from "../components/ProjCardKodoo";
import ProjCardPortfolio from "../components/ProjCardPortfolio";
import SectionGroup from "../components/SectionGroup";
import PrimaryBanner from "../components/PrimaryBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import SectionCredits from "../components/SectionCredits";
export default {
  data() {
    return {
      design: [
        { process: "Online Research" },
        { process: "Affinity Mapping" },
        { process: "Persona" },
        { process2: "Ideation" },
        { process2: "Wireframing" },
        { process2: "Prototyping" },
        { process3: "Reflection" }
      ]
    };
  },
  metaInfo: {
    title: " Portfolio Research, Design System, & Development"
  },
  components: {
    ProjCardToyo,
    ProjCardKodoo,
    ProjCardPortfolio,
    SectionGroup,
    PrimaryBanner,
    SecondaryBanner,
    SectionCredits
  }
};
</script>

<style lang="scss" scoped>
</style>