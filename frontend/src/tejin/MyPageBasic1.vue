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
    <!--코인 끝  -->

    <!-- 선택하면 화면 텍스트 변화 -->
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-blueGray-600 bg-white': openTab !== 1,
                'text-white bg-blueGray-600': openTab === 1,
              }"
            >
              <i class="fas fa-space-shuttle text-base mr-1"></i> 내 정보
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-blueGray-600 bg-white': openTab !== 2,
                'text-white bg-blueGray-600': openTab === 2,
              }"
            >
              <i class="fas fa-cog text-base mr-1"></i> 인증
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-blueGray-600 bg-white': openTab !== 3,
                'text-white bg-blueGray-600': openTab === 3,
              }"
            >
              <i class="fas fa-briefcase text-base mr-1"></i> 내 행적
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <MyPageInfo />
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }"
              >
                <MyPageInfo />
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3,
                }"
              >
                <HeaderStats />

                <CardTable /><!-- color="dark" -->
                <CardTable color="dark" /><!-- color="dark" -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 선택하면 화면 텍스트 변화 끝 -->
    </div>
  </div>
  <!-- 내용 시작 -->
  <!-- 내용 끝 -->
</template>
<script>
import team2 from "@/assets/img/PngItem_1378758.png";
import MyPageInfo from "./MyPageInfo.vue";
import CardTable from "../components/Cards/CardTable.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";

export default {
  name: "blueGray-tabs",
  data() {
    return {
      team2,
      openTab: 1,
    };
  },
  components: { MyPageInfo, CardTable, HeaderStats },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
