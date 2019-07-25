<template>
  <Project>
    <div class="fixed bg-white top-0 w-full shadow hidden lg:block z-50">
      <vue-cobra :height="5" :zIndex="900" color="#ed1c24" :opacity="0.8" />
      <nav
        class="container flex mx-auto lg:py-8 text-gray-700 font-display justify-between md:justify-start"
      >
        <div
          class="mr-5 text-lg lg:text-xl leading-relaxed text-black tracking-tight;"
        >&lt;Toyo Branding and Website&gt;</div>
        <ul class="flex">
          <li class="mr-5">
            <g-link v-scroll-to="'#designchallenge'" class="hover:font-bold">#Design Challenge</g-link>
          </li>
          <li class="mr-5">
            <g-link v-scroll-to="'#branding'" class="hover:font-bold">#Branding</g-link>
          </li>
          <li class="mr-5">
            <g-link v-scroll-to="'#website'" class="hover:font-bold">#Web dev &#38; design</g-link>
          </li>
          <li class="mr-5">
            <g-link v-scroll-to="'#insights'" class="hover:font-bold">#Insights</g-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- HERO SECTION -->
    <main>
      <article>
        <div class="mt-5 xl:flex xl:justify-center">
          <video width="100%" height="auto" playsinline autoplay muted loop>
            <source
              src="https://res.cloudinary.com/kelvinfernando/video/upload/v1561090754/Ux%20portfolio/Toyo-branding-and-website/hibachi_chef.mp4"
              type="video/mp4"
            />Your browser does not support the video tag.
          </video>
        </div>
        <div class="container-inner mx-auto mt-5">
          <h1>
            Toyo Branding and
            <br />Website
          </h1>
          <section>
            <section-group
              title="Old meets new"
              body="A restaurant which offers unique food and experience served to you in a Teppanyaki style cuisine. Toyo has established themselves since 1981, making them the oldest teppanyaki restaurant in Montreal.

My mission is to update Toyo’s brand identity and website which was not updated since launch."
            />
          </section>
        </div>

        <!-- DESIGN CHALLENGE -->
        <section id="designchallenge">
          <primary-banner
            class="banner--black"
            title="Design Challenge"
            body="A modern design showcasing the restaurant’s established identity."
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>Toyo is a family restaurant I worked at as a busboy. I interacted with their design and experienced the pain points of costumers first hand while working there for a year. Without a brand guideline or design system, I wanted to upgrade the restaurant while maintaining the traditional feel to it.</p>
            </div>
            <div class="mt-10 text-center md:text-left md:flex">
              <div class="md:w-1/2">
                <h2>Design</h2>
                <ul class="mt-3">
                  <div>
                    <li v-for="items in tools">{{ items.design }}</li>
                  </div>
                </ul>
              </div>
              <div class="mt-10 text-center md:text-left md:mt-0 md:w-1/2">
                <h2>Development</h2>
                <ul class="mt-3 md:flex">
                  <div class="md:w-1/3">
                    <li v-for="items in tools">{{ items.development }}</li>
                  </div>
                  <div class="md:w-1/3 md:mx-6">
                    <li v-for="items in tools">{{ items.development2 }}</li>
                  </div>
                  <div class="md:w-1/3">
                    <li v-for="items in tools">{{ items.development3 }}</li>
                  </div>
                </ul>
              </div>
            </div>
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561702996/Ux%20portfolio/Toyo-branding-and-website/Teppanyaki%20table.png"
                alt="Teppanyaki table"
                class="mt-10"
              ></g-image>
              <figcaption>Toyo’s teppanyaki table</figcaption>
            </figure>
          </div>
        </section>

        <!-- LOGO REWORK -->
        <section id="branding">
          <secondary-banner
            class="banner--cherryred"
            title="Logo rework"
            body="A logo needs to be simple 
-Sagi Haviv"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12 lg:flex">
              <div class="lg:w-1/2">
                <p>I created three logo options for the client to choose from. The brand suffers from an identity crisis since their website is “Toyo grill”, “Toyo steakhouse” for their Google business profile, and plain “Toyo” on their old logo.</p>
              </div>
              <div class="lg:w-1/2">
                <figure>
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704208/Ux%20portfolio/Toyo-branding-and-website/Toyo%20old%20logo.png"
                    alt="Toyo's old logo"
                    class="mt-10 lg:mt-0"
                  ></g-image>
                  <figcaption>Old logo</figcaption>
                </figure>
              </div>
            </div>
            <section-group
              title="The story:"
              body="Toyo steakhouse- I changed the font to a strong font. The House symbol is inspired by Shogi pieces, a Japanese chess game. 
Toyo- Taken from their old logo, I changed the colors to make it seem like a Japanese lantern
Toyo grill- The red circle at the center is taken straight from the Japanese flag."
            />
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704208/Ux%20portfolio/Toyo-branding-and-website/Toyo%20Steakhouse%20logo.png"
              alt="Toyo steakhouse logo"
              class="mt-10"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704206/Ux%20portfolio/Toyo-branding-and-website/Toyo%20logo.png"
              alt="Toyo logo"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704209/Ux%20portfolio/Toyo-branding-and-website/ToyoGrill%20logo.png"
              alt="Toyo grill logo"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704210/Ux%20portfolio/Toyo-branding-and-website/Toyo%20grill%20business%20card.png"
              alt="Toyo grill business card"
              class="-mt-10 md:-mt-24 lg:-mt-48"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704209/Ux%20portfolio/Toyo-branding-and-website/Toyo%20catalog.png"
              alt="Toyo's catalouge"
              class="-mt-10 md:-mt-24 lg:-mt-48"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704210/Ux%20portfolio/Toyo-branding-and-website/Toyo%20steakhouse%20tshirt.png"
              alt="Toyo steakhouse's tshirt"
            ></g-image>
          </figure>

          <div class="container-inner mx-auto">
            <figure>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704207/Ux%20portfolio/Toyo-branding-and-website/Montserrat%20type.png"
                alt="Montserrat typeface"
                class="lg:mt-5"
              ></g-image>
            </figure>
            <p
              class="mt-6"
            >I set the typeface of the brand to both be classic and modern reflecting the restaurant’s vision for its new brand identity.</p>
          </div>
        </section>

        <!-- WEBSITE REDESIGN AND DEVELOPMENT -->
        <section id="website">
          <secondary-banner
            class="banner--cherryred"
            title="Website redesign and development"
            body="Going responsive"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>The major problem of their website is that it is not responsive on mobile. The owner also wanted it to have a better Search Engine Optimization (SEO). For this purpose, I chose Vue and NuxtJs as a framework to have a Server Side Rendered (SSR) website to give the sit a huge SEO boost.</p>
            </div>
            <figure class="flex-col">
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704212/Ux%20portfolio/Toyo-branding-and-website/Toyogrillca%20mobile.png"
                alt="Toyo grill.ca mobile website screenshot"
                class="mt-10 w-3/4 md:w-1/2 lg:w-1/3 mx-auto"
              ></g-image>
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704209/Ux%20portfolio/Toyo-branding-and-website/toyogrillca%20audit.png"
                alt="Toyo grill.ca audit"
                class="mt-6 mx-auto"
              ></g-image>
              <figcaption>Toyo’s old website with Google’s Lighthouse Audit performance score. The code is really outdated using a CSS table layout which was not responsive</figcaption>
            </figure>
            <section-group
              title="Code challenge"
              body="One of the challenges with working on a business site here in Montreal is the requirement for French language support. Learning an internalization framework (il8n) for the project thought me a lot about the importance of reading documentations in general. My original proposed solution was a client-side rendered website with a reservation system and a Content Management System (CMS) for the owner to edit the site. Since the owner did not want a reservation system and won't make use for dynamic content, I saw NuxtJs as a perfect solution. 
"
            />
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704212/Ux%20portfolio/Toyo-branding-and-website/toyo%20netlify%20mobile%20mockup.png"
              alt="New toyomobile website mockup"
              class="mt-8 min-w-full visible xl:hidden"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1562218480/Ux%20portfolio/Toyo-branding-and-website/toyo%20netlify%20mobile%20mockup%20lg.png"
              alt="New toyomobile website mockup"
              class="mt-8 min-w-full hidden xl:block"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563228182/Ux%20portfolio/Toyo-branding-and-website/Toyo%20Imac%20mockup.png"
              alt="New toyo imac website mockup"
              class="mt-6 xl:-mt-24 mx-auto max-h-screen"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1562266558/Ux%20portfolio/Toyo-branding-and-website/toyonetlify%20audit.png"
              alt="New toyomobile website audit"
              class="mt-6 xl:-mt-24 mx-auto"
            ></g-image>
            <figcaption>By using NuxtJs, a huge performance boost was achieved.</figcaption>
          </figure>
          <div class="container flex flex-col text-lg leading-loose tracking-tight lg:text-xl mt-5">
            <a
              href="https://toyo.netlify.com/"
              target="_blank"
              class="underline mx-auto hover:text-bluelink"
              rel="noopener"
            >Visit New Site</a>
            <a
              href="https://github.com/KelvinFernando/toyosite-nuxt-il8n-veutify"
              target="_blank"
              class="underline mx-auto hover:text-bluelink"
              rel="noopener"
            >View code on Github</a>
          </div>
        </section>

        <!-- WEBSITE REDESIGN AND DEVELOPMENT -->
        <section id="insights">
          <secondary-banner
            class="banner--cherryred"
            title="Design vs code"
            body="Finding the middle ground"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>This project thought me the importance of communication between developers and designers. Although I wore both hats, my initial design based on a FullPage plugin was not compatible with the framework NuxtJs due to Server Side Rendering.</p>
            </div>
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1562635036/Ux%20portfolio/Toyo-branding-and-website/Toyo%20fullpage%20js%20mockup.png"
              alt="Initial toyo website design with fullpage js format"
              class="mx-auto"
            ></g-image>
            <figcaption>First home page design</figcaption>
          </figure>
          <div class="container-inner mx-auto">
            <div class="mt-8">
              <p>I ended up using Veutify (google’s materialize framework for Vue) instead and redesigned the project. A lot of my time could’ve been saved if only I tested the plugin with NuxtJs first. I can imagine this happening in a real-world project where designers design without consulting with the developers.</p>
            </div>
          </div>
        </section>

        <!-- CLIENT RED FLAG-->
        <section>
          <secondary-banner
            class="banner--cherryred"
            title="Client red flag"
            body="A bad client fit for a mere busboy"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>I learned a lot on this project as it was my first attempt on designing and developing for a real-world project. The client/owner was someone who didn’t see the value design but I ignored the obvious sign. After all, this was my first client and took it as a challenge. I also became close with my colleagues especially the chefs who would give me take outs because they knew I can’t cook. I just wanted to return the favor by potentially improving their branding and website for free.</p>
            </div>
          </div>
          <div class="container">
            <figure class="mt-10">
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1561704209/Ux%20portfolio/Toyo-branding-and-website/Chef%20and%20food.png"
                alt="Chef cooking meal"
                class="mx-auto lg:w-1/2"
              ></g-image>
              <figcaption
                class="container-inner mx-auto"
              >Our head chef cooking staff meal. I usually get more because they knew I go to the gym and don’t have food at home</figcaption>
            </figure>
            <figure class="mt-8">
              <g-image
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1562636220/Ux%20portfolio/Toyo-branding-and-website/Google%20maps%20review.png"
                alt="Google map 1 star review from Kimberly Bruce"
                class="mx-auto lg:w-1/2"
              ></g-image>
              <figcaption
                class="container-inner mx-auto"
              >A bad website will deter potential costumers and leave them unhappy. Taken from Google Maps Review.</figcaption>
            </figure>
          </div>

          <div class="container-inner mx-auto">
            <div class="mt-8">
              <p>I told myself that this project would serve as a parting gift and a sign for me to quit serving tables. Unfortunately, the owner was not happy about it and the project was canceled. I quit working at the restaurant with a lot of knowledgable experience, friends, and more importantly, good food in my belly.</p>
            </div>
          </div>
        </section>

        <!-- CREDITS-->
        <section>
          <section-credits
            body="Alex Chen 
 Site translation (French)

Alan Wong
Photos and video

Veutify Discord team
Veutify support
"
          />
          <div class="italic mt-24 text-center">Thank you for visiting my project!</div>
        </section>

        <!-- NEXT PROJECT -->
          <div class="nextproject">
        <div class="container">
          <h2 class="text-center mb-5">More Projects</h2>
          <div class="flex flex-col items-center">
            <proj-card-companion  />  
                <proj-card-portfolio class="mt-5"/>
                <proj-card-kodoo class="mt-5" />   
          </div>
        </div>
      </div>        
      </article>
    </main>
  </Project>
</template>

<script>
import ProjCardKodoo from "../components/ProjCardKodoo";
import ProjCardPortfolio from "../components/ProjCardPortfolio";
import ProjCardCompanion from "../components/ProjCardCompanion";
import SectionGroup from "../components/SectionGroup";
import PrimaryBanner from "../components/PrimaryBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import SectionCredits from "../components/SectionCredits";
export default {
  data() {
    return {
      tools: [
        { design: "Adobe Illustrator" },
        { design: "Figma" },
        { development: "HTML 5" },
        { development: "CSS 3" },
        { development2: "NuxtJs" },
        { development2: "Veutify" },
        { development3: "il8n" },
        { development4: "Netlify" }
      ]
    };
  },
  metaInfo: {
    title: "Toyo Branding and Website"
  },
  components: {
    ProjCardKodoo,
    SectionGroup,
    PrimaryBanner,
    SecondaryBanner,
    SectionCredits,
    ProjCardPortfolio,
    ProjCardCompanion
  }
};
</script>

<style lang="scss" scoped>
</style>
