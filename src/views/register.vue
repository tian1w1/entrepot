<template>
  <div class="box">
    <div class="img">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <!-- 表单 -->
    <van-form @submit="onSubmit" class="form">
      <van-field v-model="sms" name="用户名" placeholder="请填写手机号" />
      <div class="yanzheng" @click="zkl_yzm">
        <span>获取验证码</span>
      </div>
      <van-field v-model="value" name="密码" placeholder="请填写验证码" />
      <div class="zhuce">
        <p>*未注册的手机号将自动注册</p>
        <p @click="qie">使用密码登录</p>
      </div>
      <div style="margin: 16px;" class="btn">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { yzm, login } from "../util/http";
export default {
  data() {
    return {
      sms: "",
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.$router.push("/szmm");
    },
    qie() {
      //切换到登录
      this.$router.push("/my");
    },
    //验证码
    zkl_yzm() {
      yzm({ mobile: this.sms, sms_type: "login" }).then(res => {
        console.log(res);
        if (res == true) {
          this.$toast.success("验证码发送成功");
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  .img {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 30px 7%;
    img {
      width: 70%;
    }
  }
  .zhuce {
    width: 87%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    color: #cccccc;
    > p {
      font-size: 13px;
    }
  }
  .form {
    position: relative;
    .yanzheng {
      position: absolute;
      top: 25px;
      right: 29px;
      color: orangered;
      > span {
        font-size: 12px;
      }
    }
  }
}
</style>
