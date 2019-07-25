<template>
  <div>
    <Layout>
      <main>
        <section class="container flex flex-col justify-center align-center mt-5">
          <div class="text-center items-center text-2xl md:text-4xl h-20 md:h-32">
            <ClientOnly>
              <vue-typer
                text="Hello World! 
I'm a <UX designer>"
                :repeat="0"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="0"
                :type-delay="25"
                :pre-erase-delay="2000"
                :erase-delay="250"
                erase-style="clear"
                :erase-on-complete="false"
                caret-animation="solid"
              ></vue-typer>
            </ClientOnly>
          </div>
          <div class="mt-2 text-lg md:text-2xl md:mt-6 mx-auto text-left">
            I’m Kelvin Fernando, a User Experience designer, coder, and storyteller
            <br class="hidden md:block" />focused on human-centered design.
          </div>
        </section>

        <section class="container flex flex-col justify-center mt-10">
          <!-- COMPANION SCREEN SHARING APP -->
          <div class="flex justify-center">
            <g-link to="/companion-screen-sharing-app">
              <div class="card hover:border-black hover:shadow-2xl">
                <card-info-video
                  vid="https://res.cloudinary.com/kelvinfernando/video/upload/f_auto,q_auto/v1563871603/Ux%20portfolio/Companion-app/Companion%20app%203d%20mockup.mov"
                  title="Companion
Screen Sharing App"
                  subtitle="You can't possibly use all your iPhone apps in your 60's. Designing for better accessibility with user research and empathy"
                />
                <div class="px-6 pt-4 pb-6 md:flex md:justify-center">
                  <app-pill class="pill--gray" label="Personal Project" />
                  <app-pill class="pill--gray" label="4 min read" />
                  <app-pill class="pill--tomato" label="UX" />
                  <app-pill class="pill--offyellow" label="UI" />
                </div>
              </div>
            </g-link>
          </div>

          <!-- PORTFOLIO DESIGN PROCCESS & DEVELOPMENT -->
          <div class="flex justify-center mt-12">
            <g-link to="/portfolio-design-process-and-development">
              <div class="card hover:border-black hover:shadow-2xl">
                <card-info
                  image="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513518/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Portfolio%20branding%20mockup.png"
                  alt="Portfolio branding mockup"
                  title="Portfolio Design Proccess 
& Development"
                  subtitle="Designing and developing an accessible, user-centered portfolio with user research, atomic design system, vue.js, and more"
                />
                <div class="px-6 pt-4 pb-6 md:flex md:justify-center">
                  <app-pill class="pill--gray" label="Personal Project" />
                  <app-pill class="pill--gray" label="5 min read" />
                  <app-pill class="pill--tomato" label="UX" />
                  <app-pill class="pill--softblue" label="Web Design" />
                  <app-pill class="pill--seafoamblue" label="Development" />
                </div>
              </div>
            </g-link>
          </div>

          <!-- USABILITY TEST:KODOO MOBILE WEBSITE-->
          <div class="flex justify-center mt-12">
            <g-link to="/kodoo-usability-testing">
              <div class="card hover:border-black hover:shadow-2xl">
                <card-info
                  image="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto/v1559019710/Ux%20portfolio/Kodoo-usability-testing/Kodoo%20thumbnail.png"
                  alt="Humaans graphic illustration"
                  title="Usability test:
Kodoo mobile website"
                  subtitle="Tweaking the website design based on the problems found through usability testing"
                />
                <div class="px-6 pt-4 pb-6 md:flex md:justify-center">
                  <app-pill class="pill--gray" label="Personal Project" />
                  <app-pill class="pill--gray" label="6 min read" />
                  <app-pill class="pill--tomato" label="UX" />
                </div>
              </div>
            </g-link>
          </div>

          <!-- TOYO BRANDING AND WEBSITE -->
          <div class="flex justify-center mt-12">
            <g-link to="/toyo-branding-and-website">
              <div class="card hover:border-black hover:shadow-2xl">
                <card-info-video
                  vid="https://res.cloudinary.com/kelvinfernando/video/upload/v1561090754/Ux%20portfolio/Toyo-branding-and-website/hibachi_chef.mp4"
                  title="Toyo Branding and
Website"
                  subtitle="A new logo, mockups, and a SEO (Search engine optimization) powered website for an established teppanyaki restaurant"
                />
                <div class="px-6 pt-4 pb-6 md:flex md:justify-center">
                  <app-pill class="pill--gray" label="Personal Project" />
                  <app-pill class="pill--gray" label="4 min read" />
                  <app-pill class="pill--softblue" label="Web Design" />
                  <app-pill class="pill--seafoamblue" label="Development" />
                  <app-pill class="pill--mutedpink" label="Branding" />
                </div>
              </div>
            </g-link>
          </div>
        </section>
      </main>
    </Layout>
  </div>
</template>

<script>
import CardInfo from "../components/CardInfo";
import AppPill from "../components/AppPill";
import CardInfoVideo from "../components/CardInfoVideo";

export default {
  name: "Index",
  metaInfo: {
    title: "Kelvin Fernando"
  },
  components: {
    CardInfo,
    AppPill,
    CardInfoVideo,
    VueTyper: () =>
      import("vue-typer")
        .then(m => m.VueTyper)
        .catch()
  }
};
</script>

<style>
</style>

