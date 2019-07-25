<template>
  <div>
    <div
      class="rounded overflow-hidden shadow border-2 hover:border-black hover:shadow-2xl bg-white max-w-md"
    >
      <g-link to="/kodoo-usability-testing">
        <card-info
          image="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto/v1559019710/Ux%20portfolio/Kodoo-usability-testing/Kodoo%20thumbnail.png"
          alt="Humans graphic"
          title="Usability test:
Kodoo mobile website"
          subtitle="Tweaking the website design based on the problems found through usability testing"
        />
        <div class="flex flex-wrap px-6 pb-4">
          <app-pill class="pill--gray" label="Personal Project" />
          <app-pill class="pill--gray" label="6 min read" />
          <app-pill class="pill--tomato" label="UX" />
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
