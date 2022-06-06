<template>
    <van-nav-bar
            title="订单支付"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
    <van-swipe-cell>
        <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>

    <van-button type="primary" size="large">确认付款</van-button>
</template>


<script>
    import { ref } from 'vue';
    import { Toast } from 'vant';
    export default {
        name: "customer-pay",
        setup() {
            const onClickLeft = () => history.back();
            const chosenAddressId = ref('1');
            const list = [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                }
            ];
            return {
                onClickLeft,
                chosenAddressId,
                list
            };
        }
    }
</script>

<style scoped>
    .goods-card {
        margin: 0;
        background-color:floralwhite;
    }

    .delete-button {
        height: 100%;
    }
</style>