<template>
  <Layout>
    <div class="lg:flex container">
      <aside class="hidden lg:visible lg:flex lg:flex-col lg:w-2/12 mt-5 lg:justify-around">
        <h3>
          UX Freelance
          <br />2019
        </h3>
        <h3>
          Research Analyst
          <br />Real Estate
          <br />2017
        </h3>
        <h3>
          Article Writer
          TheGamer
          <br />2017
        </h3>
        <h3>
          Video/Still
          <br />Tempest Films
          <br />2016
        </h3>
        <h3>
          Public Relations
          <br />FCC Inc.
          <br />2015
        </h3>
        <h3>
          <a
            href="https://res.cloudinary.com/kelvinfernando/image/upload/q_auto:best/v1563248666/Ux%20portfolio/About/Kelvin%20Fernando-CV.pdf"
            class="underline mx-auto hover:text-bluelink"
            target="_blank"
            rel="noopener"
          >View Resume</a>
        </h3>
      </aside>
      <div class="lg:w-11/12">
        <g-image
          src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1560823550/Ux%20portfolio/About/Avatar.png"
          alt="Kelvin's Avatar Illustration"
        ></g-image>
      </div>
    </div>

    <div class="container-inner mx-auto mt-5">
      <h2>From Zero to Passion</h2>
      <p class="mt-5">
        I’m Kelvin Fernando, a User Experience designer, coder, and storyteller focused on human-centered design.
        <br />
        <br />From being a medical student (Asian mom’s choice), I decided to build my own path and pursued arts where I gained my Bachelor’s degree in Journalism. Hungry for more, I traveled to Montreal, Canada and completed web design and programming. I never thought I could help people with design as much as in the medical field until I discovered UX. For the first time in my life, I knew what I wanted to become.
      </p>

      <section-group
        title="Hat tip to people who made me"
        body="My greatest teachers were from youtube, podcasts and online courses. In no particular order, I present you the god’s gift to creative people."
      />
      <div class="text-lg leading-loose tracking-tight lg:text-xl mt-5">
        <div>
          <a
            href="https://www.givegoodux.com/"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Joe Natoli</a> and
          <a
            href="https://learnux.io/"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >LearnUX.io</a>. Their UX course opened the gates for me.
        </div>

        <div>
          <a
            href="https://www.youtube.com/user/TheSkoolRocks"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Chris Do and TheFutur staff (even you Eren).</a>
        </div>

        <div>
          <a
            href="https://www.designbetter.co/podcast"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >The Design Better podcast and it’s guests.</a> Benjamin Evan’s Inclusive design is probably my favorite episode.
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Gary Simons of DesignCourse.</a> If you’re looking for a design to code, look no further.
        </div>
        <div>
          <a
            href="https://www.youtube.com/user/TechGuyWeb"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Brad Traversy</a> and
          <a
            href="https://www.udemy.com/user/maximilian-schwarzmuller/"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Maximilian Schwarzmüller.</a> Youtube and Udemy Code gods.
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCu1xbgCV5o48h_BYCQD7KJg"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Chris Sean</a>,
          <a
            href="https://www.youtube.com/user/Tychos1"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Joshua Fluke</a>,
          <a
            href="https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >TechLead</a>, and
          <a
            href="https://shoptalkshow.com/"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >ShopTalkShow</a> for everyday code inspiration.
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCScRSwdX0t31gjk3MYXIuYQ"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Charli</a>,
          <a
            href="https://www.youtube.com/channel/UCvBGFeXbBrq3W9_0oNLJREQ"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Jesse</a>, and
          <a
            href="https://www.youtube.com/channel/UCmypYv02UGldiA8g7j2mCyw"
            target="_blank"
            class="hover:underline hover:text-bluelink"
            rel="noopener"
          >Alexa</a>
          , for everyday design inspiration.
        </div>
      </div>
      <section-group
        title="Books under my pillow"
        body="These books were the firestarter and are what keeps my burning passion for design alive (figuratively)."
      />
      <g-image
        src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1560823591/Ux%20portfolio/About/Books.png"
        alt="My Books"
        class="mt-5"
      ></g-image>
      <ul class="mt-5 text-center">
        <li v-for="items in books">{{ items.title }}</li>
      </ul>
      <div
        class="italic mt-24 text-center"
      >This portfolio is also dedicated to my dad who supports me and my mom. A janitor turned architect, a good husband, and the best father.</div>
    </div>
  </Layout>
</template>

<script>
import SectionGroup from "../components/SectionGroup";
export default {
  data() {
    return {
      books: [
        { title: "The Design of Everyday Things" },
        { title: "Universal Principles of Design" },
        { title: "Don’t make me think" },
        { title: "Rocket Surgery Made Easy" },
        { title: "The Non-Designer’s Design Book" },
        { title: "100 Things Every Designer Needs to Know About People" },
        { title: "The Elements of User Experience" },
        { title: "Psychology of Everyday Pricing" }
      ]
    };
  },
  metaInfo: {
    title: "About Kelvin"
  },
  components: {
    SectionGroup
  }
};
</script>
