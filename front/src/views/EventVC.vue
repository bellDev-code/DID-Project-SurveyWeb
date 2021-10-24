<template>
  <main class="profile-page">
    <MyPageBasic />
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <!-- <MyPageBasic1 /> -->
            <MyPageInfo />
            <CardTable />

            <!-- 내용 시작 -->
            <!-- <MyPageInfo /> -->

            <!-- 내용 끝 -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
// import team2 from "@/assets/img/PngItem_1378758.png";
import MyPageBasic from "../tejin/MyPageBasic.vue";
// import MyPageBasic1 from "../../tejin/MyPageBasic1.vue";
// import MyPageInfo from "../../tejin/MyPageInfo.vue";
import MyPageInfo from "../tejin/MyPageInfo.vue";
import CardTable from "../components/Cards/CardTable.vue";

export default {
  data() {
    return {
      hello: null,
    };
  },
  components: { MyPageBasic, MyPageInfo, CardTable },
};
</script>
