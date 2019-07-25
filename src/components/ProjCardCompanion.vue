<template>
  <div>
    <div
      class="rounded overflow-hidden shadow border-2 hover:border-black hover:shadow-2xl bg-white max-w-md"
    >
      <g-link to="/companion-screen-sharing-app">
        <card-info-video
          vid="https://res.cloudinary.com/kelvinfernando/video/upload/f_auto,q_auto/v1563871603/Ux%20portfolio/Companion-app/Companion%20app%203d%20mockup.mov"
          title="Companion
Screen Sharing App"
          subtitle="You can't possibly use all your iPhone apps in your 60's. Designing for better accessibility with user research and empathy"
        />
        <div class="flex flex-wrap px-6 pb-4">
          <app-pill class="pill--gray" label="Personal Project" />
          <app-pill class="pill--gray" label="4 min read" />
          <app-pill class="pill--tomato" label="UX" />
          <app-pill class="pill--offyellow" label="UI" />
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

