<template>
  <Project>
    <div class="fixed bg-white top-0 w-full shadow hidden lg:block z-50">
      <vue-cobra :height="5" :zIndex="900" color="#a9805c" :opacity="0.8" />
      <nav
        class="container flex mx-auto lg:py-8 text-gray-700 font-display justify-between md:justify-start"
      >
        <div
          class="mr-5 text-lg lg:text-xl leading-relaxed text-black tracking-tight;"
        >&lt;Kodoo Usability Testing&gt;</div>
        <ul class="flex">
          <li class="mr-5">
            <g-link v-scroll-to="'#designchallenge'" class="hover:font-bold">#Design Challenge</g-link>
          </li>
          <li class="mr-5">
            <g-link v-scroll-to="'#usertesting'" class="hover:font-bold" exact>#User Testing</g-link>
          </li>
          <li class="mr-5">
            <g-link v-scroll-to="'#tweaking'" class="hover:font-bold" exact>#Tweaking</g-link>
          </li>
          <li class="mr-5">
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
            src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559019710/Ux%20portfolio/Kodoo-usability-testing/Kodoo%20thumbnail.png"
            alt="Kodoo Illustration"
            class="lg:w-4/6 mx-auto"
          ></g-image>
        </figure>
        <div class="container-inner mx-auto">
          <h1>
            Usability test:
            <br />Kodoo mobile website
          </h1>
          <section>
            <section-group
              title="Forced to call customer service"
              body="Have you ever had trouble navigating a site that you needed to call customer service? Being a UX designer and website developer only rubs salt to the wound. I felt helpless and foolish, I couldn’t navigate a site!

With my previous mobile service overcharging for internet data like a stab in the back, I was sold with Kodoo’s genius marketing with the promise of shock-free data. Unfortunately, their site was not shock-free. I conducted a usability test to see how I could improve their design. "
            />
          </section>
        </div>

        <!-- DESIGN CHALLENGE -->
        <section id="designchallenge">
          <primary-banner
            class="banner--black"
            title="Design Challenge"
            body="How can I find and fix usabilty through user testing?"
          />
          <div class="container-inner mx-auto">
            <div class="mt-12">
              <p>Although I got through with the help of a wonderful customer service, the problem shouldn’t have started if I had no trouble navigating the site. To quickly test if a user would have the same problem, I did a qualitative remote user test.</p>
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
                src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559621057/Ux%20portfolio/Kodoo-usability-testing/scene_wireframe.png"
                alt="Wireframe scene illustration"
              ></g-image>
            </figure>
          </div>
        </section>

        <!-- AUDIENCE -->
        <section>
          <secondary-banner
            class="banner--darksand"
            title="Audience"
            body="Recruit loosely and grade on a curve
-Steve Krug"
          />
          <div class="container-inner mx-auto mt-12">
            <p>Kodoo mobile is only available across Canada. My only requirement for the target audience is someone living in Canada and have never visited Kodoo mobile website to capture their first experience.</p>
            <h2 class="text-center mt-6">Target audience</h2>
            <div class="flex flex-wrap md:flex-no-wrap mt-5">
              <ul class="w-1/2 lg:w-1/3">
                <li v-for="items in targetaudience">{{ items.profile }}</li>
              </ul>
              <ul class="w-1/2 lg:w-1/3 pl-4">
                <li v-for="items in targetaudience">{{ items.data }}</li>
              </ul>
              <div class="lg:w-1/3 mt-5 md:text-left text-center">
                <p>
                  Screener
                  <br />Have you visited the Kodoo mobile website?
                  <br />Yes [Reject]
                  <br />No [Accept]
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- USER TESTING -->
        <section id="usertesting">
          <secondary-banner
            class="banner--darksand"
            title="User Testing"
            body="Using scenarios and tasks"
          />

          <div class="container-inner mx-auto">
            <p
              class="mt-12"
            >The template I used for this unmoderated remote user testing is from Steve Krug.</p>
            <h2 class="mt-6">Participant Demographics</h2>
            <div class="md:flex">
              <div class="md:w-1/3">
                <figure>
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559615012/Ux%20portfolio/Kodoo-usability-testing/Bennett-cheung.png"
                    class="mt-5 mx-auto"
                    alt="Bennett Cheung's profile photo"
                  ></g-image>
                  <figcaption>Bennett Cheung</figcaption>
                </figure>
              </div>
              <div class="md:w-2/3">
                <div class="flex mt-5">
                  <ul class="w-1/2">
                    <li v-for="items in participant">{{ items.profile }}</li>
                  </ul>
                  <ul class="w-1/2 pl-4">
                    <li v-for="items in participant">{{ items.data }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <section-group title="Persona" body="You are living in Montreal, Quebec Canada." />
            <section-group
              title="Getting to know the user"
              body="Before we look at the site, I'd like to ask you just a few quick questions. 

First, what's your occupation? What do you do all day?
        
Roughly how many hours a week altogether - just a rough estimate - would you say you spend using the Internet, including Web browsing and email, at work and at home?
        
What kinds of sites (work and personal) are you looking at when you browse the Web?
        
Do you have any favorite Web sites?"
            />
          </div>
          <app-video
            vid="https://res.cloudinary.com/kelvinfernando/video/upload/q_auto:best/v1559616070/Ux%20portfolio/Kodoo-usability-testing/Intro.mp4"
          />
          <div class="container-inner mx-auto">
            <section-group
              title="Home page tour"
              body="First, I'm going to ask you to look at this page and tell me what you make of it: what strikes you about it, whose site you think it is, what you can do here, and what it's for. Just look around and do a little narrative.

You can scroll if you want to, but don't click on anything yet."
            />
          </div>
          <app-video
            vid="https://res.cloudinary.com/kelvinfernando/video/upload/f_auto,q_auto:best/v1559619836/Ux%20portfolio/Kodoo-usability-testing/Homepage_tour.mp4"
          />
          <div class="container-inner mx-auto">
            <section-group
              title="Task 1"
              body="You are tired of your old carrier overcharging for data and would like to try out a Kodoo mobile sim. You still want to keep your old phone and subscribe to a sim only plan with data on the website. Figure out the data options available for you."
            />
          </div>
          <app-video
            vid="https://res.cloudinary.com/kelvinfernando/video/upload/v1559619874/Ux%20portfolio/Kodoo-usability-testing/task_1.mp4"
          />
          <div class="container-inner mx-auto">
            <section-group
              title="Task 2"
              body="You successfully subscribed to a sim only plan. You want to login with your new Kodoo account: 
Email- usertesterlogin@zoho.com 
Password- Kodootrial456

You would like to know:
How much you are going to pay monthly and when each payment is due"
            />
          </div>
          <app-video
            vid="https://res.cloudinary.com/kelvinfernando/video/upload/v1559619892/Ux%20portfolio/Kodoo-usability-testing/Task_2.mp4"
          />
          <div class="container-inner mx-auto">
            <section-group
              title="Task 3"
              body="It's your mom's birthday and she could use a new phone. Choose any phone and plan that you think would suit her. View your cart and check if every info is clear to you. Do not proceed to checkout."
            />
          </div>
          <app-video
            vid="https://res.cloudinary.com/kelvinfernando/video/upload/v1559619895/Ux%20portfolio/Kodoo-usability-testing/task_3.mp4"
          />
        </section>

        <!-- TWEAKING -->
        <section id="tweaking">
          <secondary-banner
            class="banner--darksand"
            title="Tweaking"
            body="Using wireframes and prototyping to improve usability"
          />

          <div class="container-inner mx-auto">
            <section-group
              title="The top 3 main usability problem "
              body="1. The user was not notified with verifying the region even though the account logged in was for Quebec. It would help users to have a reminder to choose their region as the prices vary between them."
            />
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559633168/Ux%20portfolio/Kodoo-usability-testing/tweak_1.png"
              class="mt-10"
              alt="Tweaked website homepage with location confirmation"
            ></g-image>
            <figcaption
              class="container-inner mx-auto"
            >By adding confirmation, users will be reassured that they are browsing for the right province</figcaption>
          </figure>

          <div class="container-inner mx-auto">
            <section-group
              body="2. Choosing between monthly and prepaid login is confusing especially to new users or someone who is coming from different countries. Having one login system which automatically detects the user’s subscription will prevent the confusion."
            />
            <figure>
              <div class="md:flex items-center">
                <div class="md:w-1/2">
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559634052/Ux%20portfolio/Kodoo-usability-testing/login_original.png"
                    alt="Original Login page"
                    class="p-4"
                  ></g-image>
                </div>
                <div class="md:w-1/2">
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559634052/Ux%20portfolio/Kodoo-usability-testing/login_tweaked.png"
                    alt="Tweaked Login page"
                    class="px-4 pt-4"
                  ></g-image>
                </div>
              </div>
              <figcaption>By simply removing the customer-type based login on the right, the cognitive load of the user is lessened. Remembering your email and password is already a task and adding the option to select a customer type just confuses users.</figcaption>
            </figure>

            <section-group
              body="3. Adjusting the button label should help solve the confusion between “get a new phone” and “add a phone”. It removes unnecessary labels which are not important in choosing if you want to add it to the current line or create a new one. The prompt could also be moved during checkout as users may just want to browse phones."
            />
            <figure>
              <div class="md:flex">
                <div class="md:w-1/2 md:mr-10">
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559635014/Ux%20portfolio/Kodoo-usability-testing/Selection_menu_original.png"
                    alt="Original Menu"
                    class="mt-10"
                  ></g-image>
                </div>
                <div class="md:w-1/2">
                  <g-image
                    src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559635008/Ux%20portfolio/Kodoo-usability-testing/selection_menu_tweaked.png"
                    alt="Tweaked Menu"
                    class="mt-10"
                  ></g-image>
                </div>
              </div>
              <figcaption>Omitting needless words on the right reduces the site noise by quite a lot. It’s safe to say that when I clicked the “Shop” menu, I did it because I wanted a new phone or tablet.</figcaption>
            </figure>
          </div>
        </section>

        <!-- ENDING THOUGHTS -->
        <section id="insights">
          <secondary-banner
            class="banner--darksand"
            title="Teleportation made easy"
            body="Ending thoughts and future improvement"
          />

          <div class="container-inner mx-auto">
            <section-group
              body="Watching the tests reassures me that what I experienced on the site was not a human error but rather a design error. Aside from the test results, my main pain point as a customer was the “Self Serve” navigation. A common standard on the web is a clickable name after sign in to access your account. In this case, I also quickly forgot that “Self Serve” equals to “My Account” and I felt lost for a moment. Choosing common standards is a good practice as users are familiar with it. After all, since I’m shopping online, isn’t it kind of like serving my self?"
            />
          </div>
          <figure>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559635746/Ux%20portfolio/Kodoo-usability-testing/Kodoo_nav.png"
              alt="Original Navigation"
              class="mt-10"
            ></g-image>
            <g-image
              src="https://res.cloudinary.com/kelvinfernando/image/upload/f_auto,q_auto:best/v1559635746/Ux%20portfolio/Kodoo-usability-testing/kodoo_nav_tweaked.png"
              alt="Tweaked Navigation"
              class="mt-10"
            ></g-image>
            <figcaption
              class="container-inner mx-auto"
            >At one glance, the modified navigation bar at the bottom clearly shows you where to access your account.</figcaption>
          </figure>

          <div class="container-inner mx-auto my-10">
            <section-group
              body="As Steve Krug stated, user testing online has its pros and cons. I chose Usertesting.com for convenience, time and budget. It took me no more than an hour to get the results! For this small project backed by my student budget, I only tested one user instead of the recommended three users (sorry Mr. Krug). With unlimited resources, I would have done a more thorough Do-It-Yourself Usability testing.

This short test opened my eyes to the importance of user testing. As someone who design and code websites, I could not imagine not testing my site."
            />
          </div>
        </section>

        <!-- CREDITS -->
        <section>
          <section-credits
            body="Pablo Stanley 
Humaaans design library

Steve Krug
User testing template from Rocket Surgery Made Easy
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
            <div class="justify-center align-middle">
              <proj-card-toyo />
              <proj-card-companion  class="mt-5" />  
                <proj-card-portfolio class="mt-5"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Project>
</template>


<script>
import AppVideo from "../components/AppVideo";
import ProjCardToyo from "../components/ProjCardToyo";
import ProjCardCompanion from "../components/ProjCardCompanion";
import ProjCardPortfolio from "../components/ProjCardPortfolio";
import SectionGroup from "../components/SectionGroup";
import PrimaryBanner from "../components/PrimaryBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import SectionCredits from "../components/SectionCredits";
export default {
  data() {
    return {
      design: [
        { process: "Ideation" },
        { process: "Usability testing" },
        { process: "Prototyping" },
        { process2: "Audience definition" },
        { process2: "Scenarios" },
        { process2: "Reflection" },
        { process3: "Tasks" }
      ],
      targetaudience: [
        { profile: "Age" },
        { profile: "Household income" },
        { profile: "Gender" },
        { profile: "Employment status" },
        { profile: "Industry" },
        { profile: "Company size" },
        { profile: "Job role" },
        { profile: "Job level	" },
        { profile: "Countries" },
        { profile: "Web expertise" },
        { profile: "Operating system" },
        { profile: "Web browsers" },
        { profile: "Social networks	" },
        { profile: "Children" },
        { data: "18 - 65+ years old" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Canada" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" },
        { data: "Any" }
      ],
      participant: [
        { profile: "Device" },
        { profile: "Age" },
        { profile: "Annual Household income" },
        { profile: "Gender" },
        { profile: "Country" },
        { profile: "Web expertise" },
        { profile: "Operating System" },
        { profile: "Web Browser" },
        { profile: "Social Networking" },
        { data: "Computer" },
        { data: "41" },
        { data: "$60,000 - $79,999" },
        { data: "Male" },
        { data: "Canada" },
        { data: "Advanced" },
        { data: "OS X 10.13.6 64-bit" },
        { data: "Chrome" },
        { data: "Facebook, Twitter, Linkedin" }
      ]
    };
  },
  metaInfo: {
    title: "Kodoo Usability Testing"
  },
  components: {
    AppVideo,
    ProjCardToyo,
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