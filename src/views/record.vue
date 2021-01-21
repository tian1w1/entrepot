<template>
  <div>
    <header>
      <p>约课记录</p>
  </header>
  <div class="cont">
      <van-tabs v-model="active" line-width="13px" line-height="1px" title-active-color="#F39600">
          <van-tab title="待上课">
              <div class="conts">
                  <img src="/约课记录.gif" alt="">
                  <br>
                  <span>还没有待上课记录</span>
              </div>
          </van-tab>
          <van-tab title="已上课">
              <div class="conts">
                  <img src="/约课记录.gif" alt="">
                  <br>
                  <span>还没有上课记录</span>
              </div>
          </van-tab>
          <van-tab title="已取消">
              <div class="conts">
                  <img src="/约课记录.gif" alt="">
                  <br>
                  <span>还没有取消上课记录</span>
              </div>
          </van-tab>

      </van-tabs>
  </div>


    <tabbar />
  </div>
</template>

<script>
import tabbar from "./tabbar";
export default {
  data() {
    return {};
  },
  created() {},
  components: {
    tabbar
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
  .wrap {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
  }

  header {

      width: 100%;
      /* height: 42px; */
      justify-content: center;

      p {
          margin: 0;
          height: 44px;
          font-size: 22px;
          line-height: 44px;
          background-color: white;
          text-align: center;
          margin-bottom: 5px;
      }

  }

  .cont {
      width: 100%;
      position: absolute;

      /* padding-top: 12px; */
      .conts {
          img {
              width: 100%;
              height: 16rem;
              margin-bottom: 0.14rem;
          }

          font-size:0.22rem;
          padding-top: 1.2rem;
          box-sizing: border-box;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 3rem;
          position: relative;
          text-align:center;
          /* left: 35%; */
          justify-content: center;
      }
  }
</style>
