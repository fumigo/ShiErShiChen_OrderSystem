<template>
    <div class="shop-header">
        <nav class="shop-nav" :style="{backgroundImage:  `url(${bgImg})`}">

        </nav>
    </div>
</template>

<script>
    import bgimg from '../assets/image/dessert/dessert1.jpg';
    export default {
        name: "ShopHeader.vue",
        data(){
            return{
                bgImg:bgimg,
            }
        }
    }
</script>

<style lang="stylus"  rel="stylesheet/stylus" scoped>
    @import "../assets/stylus/mixins.styl"

    .shop-header
        height 100%
        position relative
        background #fff
        color #fff
        overflow hidden

    .shop-nav
        background-size cover
        background-repeat no-repeat
        height 100px
        padding 5px 10px
        position relative
        &::before
            content ""
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            background-color rgba(119, 103, 137, .43)
</style>