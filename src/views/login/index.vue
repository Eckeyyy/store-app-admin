<template>
  <div class="login-container">
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      class="login-form"
    >
      <a-form-model-item
        label="邮箱"
        required
        prop="email"
        has-feedback
        :label-col="{ span: 6, }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-model="form.email"
          placeholder="请输入邮箱"
        />
      </a-form-model-item>
      <a-form-model-item
        label="密码"
        required
        prop="password"
        :label-col="{ span: 6, }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-model="form.password"
          placeholder="请输入密码"
          :type="isShow ? 'text' : 'password'"
        >
          <a-tooltip
            slot="suffix"
            :title="isShow ? '隐藏密码' : '显示密码'"
          >
            <a-icon
              :type="isShow ? 'eye' : 'eye-invisible'"
              style="color: rgba(0,0,0,.45)"
              @click="handlePasswordShow"
            />
          </a-tooltip>
        </a-input>
      </a-form-model-item>
      <a-form-item :wrapper-col="{ span: 8, offset: 8, }">
        <a-button
          type="primary"
          html-type="submit"
          style="margin-right: 30px;"
          @click="executeLogin"
        >
          登陆
        </a-button>
        <a-button
          type="primary"
          html-type="submit"
        >
          注册
        </a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>
import * as user from '@/api/user.js'
export default {
    data() {
        // const validateEmail = (rule, value, callback) => {
        //     if (!value) {
        //         callback(new Error('请输入邮箱'));
        //     } else {
        //         callback(); // 验证通过时需要调用 callback()，不传参
        //     }
        // };
        return {
            form: {
                email: '',
                password: '',
            },
            rules: {
                email: [{ trigger: 'blur', required: true, message: '请输入邮箱' }],
                password: [{ trigger: 'blur', required: true, message: '请输入密码' }],
            },
            isShow: false
        };
    },
    methods: {
        executeLogin() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log('表单验证通过，执行登录逻辑');
                    user.login({ ...this.form, appkey: 'ecke_1691060018828' })
                        .then((res) => {
                            console.log(res);
                            this.$router.push('/')
                        })
                        .catch((error) => {
                            this.$message.error(error)
                            this.$router.push('/')

                        })
                } else {
                    console.log('表单验证不通过');
                }
            });
        },

        //控制密码显示
        handlePasswordShow() {
            this.isShow = !this.isShow
        }
    },
};
</script>

<style lang="less" scoped>
@import url('~@/assets/css/login.less');
</style>
