<template>
    <HeaderTop :title="长安十二时辰">
        <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo"></i>
        </router-link>
<!--        <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo': '/login'">-->
<!--        <span class="header_login_text" v-if="!userInfo._id">-->
          登录|注册
<!--        </span>-->
            <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
<!--        </router-link>-->
    </HeaderTop>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="max-height: 27vh">
        <van-swipe-item><img style="width: 100%;max-height: 27vh" src="../assets/image/daily/daily1.jpg"></van-swipe-item>
        <van-swipe-item><img style="width: 100%;max-height: 27vh" src="../assets/image/daily/daily2.jpg"></van-swipe-item>
        <van-swipe-item><img style="width: 100%;max-height: 27vh" src="../assets/image/daily/daily3.jpg"></van-swipe-item>
        <van-swipe-item><img style="width: 100%;max-height: 27vh" src="../assets/image/daily/daily4.jpg"></van-swipe-item>
<!--        <van-swipe-item>1</van-swipe-item>-->
<!--        <van-swipe-item>2</van-swipe-item>-->
    </van-swipe>
    <van-grid clickable :column-num="2" style="margin-top:2vh;">
        <van-grid-item icon="home-o" text="到点取餐" to="/customer-store" />
        <van-grid-item icon="search" text="外卖配送" to="/customer-delivery" />
    </van-grid>
</template>

<script>
    export default {
        name: "customer-index",
        data() {
            return {

            }
        },

        methods: {
        }
    }

</script>

<style>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    ul li {
        list-style: none;
    }
    .flow-box{
        background-color: #ffffff; width: 100vw; height: 100vh;
    }
    .flow-box .type-box{
        width: 100%; height: 40px; position: fixed; top: 0; font-size: 14px;
        background: #fff; color: rgba(0, 0, 0, 0.4); z-index: 99;
        border-bottom: 0.5px solid #dddddd; padding: 0 5px;
    }
    .type-box .type-list{ white-space: nowrap; overflow-x: scroll; }
    .type-list .type-item{ display: inline-block; padding: 0 12.5px; height: 40px; text-align: center; }
    .type-list .type-item .text { line-height: 37.5px; font-size: 14px; color: rgba(0, 0, 0, 0.4); margin: 0; }
    .type-list .type-item .line { background-color: #ffffff; }
    .type-list .type-item-on .text{ font-size: 16px; color: #f0142d; }
    .type-list .type-item-on .line { width: 19px; height: 2px; margin: 0 auto; background-color: #f0142d;border-radius: 2px;  }
    /* 隐藏滚动条 */
    /*.type-list::webkit-scrollbar { display: none; }*/
    /* 列表数据样式 */
    @keyframes data-item-ani{
        0% { transform: scale(0.5); }
        100% { transform: scale(1); }
    }
    .flow-box .data-list-box { position: relative; margin-height: 100vh; margin-top: 40px; }
    .data-list-box .data-item {
        height: auto; box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
        position: absolute; background-color: #ffffff; left: -1000px;
        animation: data-item-ani 0.4s;
        transition: left 0.6s, top 0.6s;
        transition-delay: 0.1s;
    }
</style>