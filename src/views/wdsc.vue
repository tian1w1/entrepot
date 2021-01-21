<template>
  <div class="box">
    <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh"/></span>
      我的收藏
    </div>
    <!-- 内容 -->
    <div class="goods">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="con">
            <div class="goods_header">
              <p style="width:90%">{{ item.title }}</p>
              <p></p>
            </div>
            <p>共{{ item.section_num }}课时</p>
          </div>
          <div class="goods_con">
            <img :src="item.teachersAvatar" alt />
            <!-- <div> -->
            <p>{{ item.teachers }}</p>
            <!-- </div> -->
          </div>
          <div class="goods_foot">
            <p>{{ item.section_num }}人已报名</p>
            <p style="color:green">
              {{ item.price == 0 ? "免费" : `${item.price}.00` }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { wdsc } from "../util/http";
export default {
  components: {},
  data() {
    return {
      page: 0,
      limit: 10,
      list: []
    };
  },
  created() {},
  mounted() {
    this.xuan();
  },
  methods: {
    xuan() {
      wdsc({
        page: this.page,
        limit: this.limit
      }).then(res => {
        console.log(res);
        this.list = res.list;
      });
    },
    //跳转返回
    fh() {
      this.$router.push("/person");
    }
  }
};
</script>

<style lang="scss" scoped>
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
.iconfont {
  font-size: 30px;
}
.goods_header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.goods {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  .con {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    p:nth-child(1) {
      font-size: 26px;
    }
  }
  .goods_foot {
    width: 100%;
    height: 100px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    width: 100%;
    li {
      margin-bottom: 20px;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 20px;
      background-color: white;
      margin-bottom: 20px;
      .goods_con {
        display: flex;
        align-items: center;
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
</style>
