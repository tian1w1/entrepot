<template>
  <div class="wrapper">
    <div class="title">
      <span><van-icon class="addz" name="arrow-left" @click="fh"/></span>
      个人信息
    </div>
    <div class="zong">
      <div class="a">
        <span>头像</span>
        <div class="aa">
          <van-uploader :after-read="tx" result-type="file">
            <img width="37px" :src="dalist.avatar" alt="" />
          </van-uploader>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a" @click="username">
        <span>昵称</span>
        <div class="aa">
          <span>{{ dalist.nickname }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a">
        <span>手机号</span>
        <div class="aa">
          <span>{{ dalist.mobile }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a" @click="sex">
        <span>性别</span>
        <div class="aa">
          <span>{{ dalist.sex == 0 ? "男" : "女" }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a" @click="showpop">
        <span>出生日期</span>
        <div class="aa">
          <span>{{ dalist.birthday }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <!-- 修改生日弹出层 -->
      <van-popup
        v-model="show"
        position="down"
        :style="{ height: '50%', width: '100%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="editday"
        />
      </van-popup>

      <div class="a">
        <span>所在城市</span>
        <div class="aa">
          <span>{{ dalist.province_name }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>

      <div class="a">
        <span>学科</span>
        <div class="aa">
          <span>研究生</span>
          <span>
            <van-icon name="arrow" class="addy" />
          </span>
        </div>
      </div>
      <div class="a">
        <span>年级</span>
        <div class="aa">
          <span>大学</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { grzy, xgtx, xgxx, sheng } from "../util/http";
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      data: [],
      obj: [],
      dalist: [],
      showa: false,
      showb: false,
      areaList: [],
      // 修改生日弹出层
      show: false,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: new Date(),
      code: []
    };
  },
  created() {
    this.obj = JSON.parse(localStorage.getItem("data"));
    grzy().then(res => {
      console.log(res);
      this.dalist = res;
      // for(const i in this.dalist.attr){
      //   console.log(this.dalist.attr[i].attr_value);
      // }
    });
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    fh() {
      this.$router.push("person");
    },
    //换头像
    tx(e) {
      let content = e.file;
      let data = new FormData();
      data.append("file", content);
      xgtx(data).then(res => {
        console.log(res);
        this.$toast.success("修改成功");
        xgxx({ avatar: res.path }).then(res => {
          console.log(res);
        });
        this.data.avatar = res.path;
        localStorage.setItem("data", JSON.stringify(this.data));
      });
    },
    //修改名称
    username() {
      this.$router.push({
        name: "nickname",
        params: {
          nickname: this.dalist.nickname
        }
      });
    },
    //点击修改性别
    sex() {
      this.$router.push("/sex");
    },
    //点击弹出
    showpop() {
      this.show = true;
    },
    //确定修改
    okedit() {
      xgxx({
        province_id: this.code[0].code,
        city_id: this.code[1].code,
        district_id: this.code[2].code
      }).then(res => {
        console.log(res);
        // 获取用户信息
        this.showa = false;
        grzy().then(res => {
          this.dalist = res;
        });
      });
    },
    // 修改生日
    editday(e) {
      console.log(e);
      let year = e.getFullYear();
      let month = e.getMonth() + 1;
      let day = e.getDate();
      console.log(year, month, day);
      let data = year + "-" + month + "-" + day;
      xgxx({ birthday: data }).then(res => {
        console.log(res);
        this.show = false;
        // 获取用户信息
        grzy().then(res => {
          this.dataa = res;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #eeeeee;
  min-height: 100vh;
}
.title {
  background: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  height: 50px;
  position: relative;
  .addz {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 20px;
  }
}
.zong {
  margin-top: 10px;
  background: white;
  height: 100%;
  > .a {
    color: #8c8c8c;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 60px;
    background: white;
    border-bottom: 1px solid #eeeeee;
    .addy {
      border-radius: 50%;
      margin-top: 25px;
      padding: 0px 7px;
      height: 39px;
    }
    .img {
      height: 19px;
    }
    > .aa {
      display: flex;
      align-items: center;
    }
  }
}
</style>
