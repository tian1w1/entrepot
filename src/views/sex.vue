<template>
  <div style="font-size: 16px; text-align: center">
    <span style="padding-left: 95px; font-size: 20px">修改个人信息</span>
    <span style="padding-left: 50px" @click="ok">保存</span>
    <div class="diva">
      <span>男</span>
      <van-radio-group v-model="radio">
        <van-radio name="0" checked-color="#ee0a24"></van-radio>
      </van-radio-group>
    </div>
    <div class="diva">
      <span>女</span>
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#ee0a24"></van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import { grzy, xgxx } from "../util/http";

export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      radio: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    grzy().then(res => {
      console.log(res);
      this.radio = String(res.sex);
    });
  },
  mounted() {},
  methods: {
    ok() {
      //   console.log(this.radio);
      xgxx({ sex: this.radio }).then(res => {
        console.log(res);
        if (res) {
          this.$toast.success("修改成功");
          this.$router.go(-1);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.diva {
  display: flex;
}
</style>
