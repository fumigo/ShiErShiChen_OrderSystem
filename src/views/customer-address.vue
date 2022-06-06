<template>
    <van-nav-bar
            title="地址管理"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
    />

</template>

<script>
    import { ref } from 'vue';
    import { Toast } from 'vant';
    export default {
        name: "customer-address",
        setup() {
            const onAdd = () => Toast('新增地址');
            const onEdit = (item, index) => Toast('编辑地址:' + index);
            const chosenAddressId = ref('1');
            const list = [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ];


            return {
                list,
                onAdd,
                onEdit,
                chosenAddressId,
            };
        }
    }
</script>

<style scoped>

</style>