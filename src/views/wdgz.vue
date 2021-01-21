<template>
  <div class="box">
    <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh"/></span>
      我的关注
    </div>
    <!-- 内容 -->
    <div class="content">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.avatar" alt="" />
          <div>
            <p>{{ item.teacher_name }}</p>
            <p>{{ item.introduction }}</p>
          </div>
          <button>取消关注</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { myguanzhu } from "../util/http";
export default {
  components: {},
  data() {
    return {
      list: [],
      page: 0,
      limit: 10
    };
  },
  created() {},
  mounted() {
    myguanzhu().then(res => {
      console.log(res);
      this.list = res.list;
    });
  },
  methods: {
    fh() {
      this.$router.push("/register");
    },
    quxiao() {}
  }
};
</script>

<style scoped lang="scss">
.title {
  background: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  height: 50px;
  position: relative;
  font-size: 16px;
  .lefta {
    position: absolute;
    left: 20px;
    top: 5px;
    width: 20px;
  }
}
.box {
  width: 100%;
  background-color: #f0f0f0;

  .content {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 170px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        div {
          width: 60%;
          overflow: hidden;
          height: 60%;
        }
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
