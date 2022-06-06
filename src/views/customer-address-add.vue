<template>
    <van-nav-bar
            title="新增收货地址"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
    />


</template>

<script>
    import { ref } from 'vue';
    import { Toast } from 'vant';
    export default {
        name: "customer-address",
        setup() {
            const onClickLeft = () => history.back();
            const searchResult = ref([]);

            const onSave = () => Toast('save');
            const onDelete = () => Toast('delete');
            const onChangeDetail = (val) => {
                if (val) {
                    searchResult.value = [
                        {
                            name: '黄龙万科中心',
                            address: '杭州市西湖区',
                        },
                    ];
                } else {
                    searchResult.value = [];
                }
            }
            return {
                onClickLeft,
                onSave,
                onDelete,
                areaList,
                searchResult,
                onChangeDetail,
            };
        }
    }
</script>

<style scoped>

</style>