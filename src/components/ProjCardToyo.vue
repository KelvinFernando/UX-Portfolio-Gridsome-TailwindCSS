<template>
  <div>
    <div
      class="rounded overflow-hidden shadow border-2 hover:border-black hover:shadow-2xl bg-white max-w-md"
    >
      <g-link to="/toyo-branding-and-website">
        <card-info-video
          vid="https://res.cloudinary.com/kelvinfernando/video/upload/v1561090754/Ux%20portfolio/Toyo-branding-and-website/hibachi_chef.mp4"
          title="Toyo Branding and
Website"
          subtitle="A new logo, mockups, and a SEO powered website for an established teppanyaki restaurant"
        />
        <div class="flex flex-wrap px-6 pb-4">
          <app-pill class="pill--gray" label="Personal Project" />
          <app-pill class="pill--gray" label="4 min read" />
          <app-pill class="pill--softblue" label="UI" />
          <app-pill class="pill--seafoamblue" label="Development" />
          <app-pill class="pill--mutedpink" label="Branding" />
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
import AppPill from "./AppPill";
import CardInfoVideo from "./CardInfoVideo";

export default {
  components: {
    AppPill,
    CardInfoVideo
  }
};
</script>

