<template>
  <div>
    <headroom>
      <header class="header bg-white">
        <nav
          class="container flex mx-auto py-10 text-gray-700 font-display justify-between md:justify-start"
        >
          <div
            class="mr-5 text-lg lg:text-xl leading-relaxed text-black tracking-tight;"
          >&lt;Kelvin Fernando&gt;</div>
          <ul class="flex">
            <li class="mr-5">
              <g-link
                to="/"
                class="hover:font-bold"
                active-class="text-black font-bold"
                exact
              >/Index</g-link>
            </li>
            <li class>
              <g-link
                to="/about"
                class="hover:font-bold"
                active-class="text-black font-bold"
                exact
              >/About</g-link>
            </li>
          </ul>
        </nav>
      </header>
    </headroom>

    <slot />

   <footer>
      <div class="banner--black text-center mt-24">
        <div class="pt-5">
          <p>Say Hello</p>
          <a
            href="mailto:contact@kelvinfernando.com"
            class="text-xl font-bold font-serif hover:underline"
          >contact@kelvinfernando.com</a>
        </div>
        <!-- SOCIAL PROFILE -->
        <div
          class="flex md:inline-flex pt-2 pb-5 text-lg leading-relaxed tracking-tight lg:text-xl"
        >
          <div class="w-1/3 lg:mr-12">
            <a
              href="https://www.linkedin.com/in/kelvinrfernando/"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Linkedin</a>
          </div>
          <div class="w-1/3 md:mx-4">
            <a
              href="https://medium.com/@kelvinfernando"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Medium</a>
          </div>
          <div class="w-1/3 md:mr-4 lg:mx-12">
            <a
              href="https://twitter.com/kelvineff"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Twitter</a>
          </div>
        </div>
        <div class="flex md:inline-flex text-lg leading-relaxed tracking-tight lg:text-xl pb-5">
          <div class="w-1/3">
            <a
              href="https://www.behance.net/kelvinfernando"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Behance</a>
          </div>

          <div class="w-1/3 md:mx-4 lg:mx-12">
            <a
              href="https://github.com/KelvinFernando"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Github</a>
          </div>

          <div class="w-1/3">
            <a
              href="https://dribbble.com/kelvinfernando"
              target="_blank"
              rel="noopener"
              class="hover:underline"
            >Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { headroom } from "vue-headroom";
import Vue from "vue";
import vueCobra from "vue-cobra";

Vue.component("vue-cobra", vueCobra);
export default {
  components: {
    headroom,
    vueCobra
  }
};
</script>
<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="../main.css" />


