<template>
    <div class="login-register">
        <div class="contain">
            <div class="big-box" :class="{active:isLogin}">
                <div class="big-contain" >
                    <div class="btitle">账户登录</div>
                    <div class="bform">
                        <input type="email" placeholder="邮箱" v-model="form.useremail">
                        <span class="errTips" v-if="emailError">* 邮箱填写错误 *</span>
                        <input type="password" placeholder="密码" v-model="form.userpwd">
                        <span class="errTips" v-if="emailError">* 密码填写错误 *</span>
                    </div>
                    <button class="bbutton" @click="login">登录</button>
                </div>
            </div>
            <div class="small-box" :class="{active:isLogin}">
                <div class="small-contain">
                    <div class="stitle">欢迎回来!</div>
                    <p class="scontent">与我们保持联系，请登录你的账户</p>
                    <button class="sbutton" @click="changeType">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>

</style>