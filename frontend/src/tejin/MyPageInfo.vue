<template>
  <div class="text-center mt-48">
    <section class="block relative z-1 bg-blueGray-600">
      <div class="container mx-auto">
        <div class="justify-center flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 -mt-24">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  내 정보 리스트
                </h5>

                <div
                  class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                >
                  <img
                    alt="..."
                    class="align-middle border-none max-w-full h-auto rounded-lg"
                    :src="login"
                  />
                </div>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  제출용 정보 1
                </h5>

                <div
                  class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                >
                  <img
                    alt="..."
                    class="align-middle border-none max-w-full h-auto rounded-lg"
                    :src="profile"
                  />
                </div>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  제출용 정보 2
                </h5>

                <div
                  class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                >
                  <img
                    alt="..."
                    class="align-middle border-none max-w-full h-auto rounded-lg"
                    :src="landing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";
export default {
  data() {
    return {
      login,
      profile,
      landing,
    };
  },
};
</script>
