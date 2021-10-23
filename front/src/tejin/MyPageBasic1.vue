<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
      <div class="relative">
        <img
          alt="..."
          :src="team2"
          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
      </div>
      <div class="absolute" style="z-index: 1">
        <span>1000 eth</span>
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
      <div class="py-6 px-3 mt-32 sm:mt-0">
        <button
          class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Connect
        </button>
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4 lg:order-1">
      <div class="flex justify-center py-4 lg:pt-4 pt-8 ">
        <div class="mr-2 text-center ">
          <button
            class="bg-blueGray-600 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            내 정보
          </button>
        </div>
        <div class="mr-2 text-center ">
          <button
            class="bg-blueGray-600 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            인 증
          </button>
        </div>
        <div class="text-center ">
          <button
            class="bg-blueGray-600 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            내 행적
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 내용 시작 -->
  <!-- 내용 끝 -->
</template>
<script>
import team2 from "@/assets/img/PngItem_1378758.png";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
