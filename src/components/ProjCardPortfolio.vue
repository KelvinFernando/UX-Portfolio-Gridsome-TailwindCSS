<template>
  <div>
   <div
      class="rounded overflow-hidden shadow border-2 hover:border-black hover:shadow-2xl bg-white max-w-md"
    >
     <g-link to="/portfolio-design-process-and-development">
                <card-info
                  image="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1563513518/Ux%20portfolio/Portfolio%20Research-Design%20System-Development/Portfolio%20branding%20mockup.png"
                  alt="Portfolio branding mockup"
                  title="Portfolio Design Proccess 
& Development"
                  subtitle="Designing and developing an accessible, user-centered portfolio with user research, atomic design system, vue.js, and more"
                />
                <div class="flex flex-wrap px-6 pb-4">
                  <app-pill class="pill--gray" label="Personal Project" />
                  <app-pill class="pill--gray" label="5 min read" />
                  <app-pill class="pill--tomato" label="UX" />
                  <app-pill class="pill--softblue" label="Web Design" />
                  <app-pill class="pill--seafoamblue" label="Development" />
                </div>
            </g-link>
    </div>
  </div>
</template>

<script>
import AppPill from "./AppPill";
import CardInfo from "./CardInfo";

export default {
  components: {
    AppPill,
    CardInfo
  }
};
</script>
