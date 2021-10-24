<template>
  <section class="pb-16 bg-blueGray-200 relative pt-32 shadow-2xl">
    <div
      class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div class="container mx-auto">
      <div
        class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
      >
        <div class="w-full text-center lg:w-8/12">
          <p class="text-4xl text-center">
            <span role="img" aria-label="love">
              😍
            </span>
          </p>
          <h3 class="font-semibold text-3xl">
            Do you love this Starter Kit?
          </h3>
          <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            Cause if you do, it can be yours now. Hit the buttons below to
            navigate to get the Free version for your next project. Build a new
            web app or give an old project a new look!
          </p>
          <div class="sm:block flex flex-col mt-10">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
              target="_blank"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Get started
            </a>
            <a
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
              target="_blank"
              class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              <i class="fab fa-github text-lg mr-1"></i>
              <span>Help With a Star</span>
            </a>
          </div>
          <div class="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
</template>
