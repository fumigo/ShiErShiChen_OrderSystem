<template>
    <div style="min-height: calc(100vh - 45px);">
        <el-radio-group  style="margin-bottom: 20px;margin-top: 10px">
            <el-radio-button size="small"  @click="toggleExpand">展开</el-radio-button>
            <el-radio-button size="small" @click="toggleCollapse">折叠</el-radio-button>
        </el-radio-group>
        <el-aside :width="isCollapse ? '55px' : '200px'" style="overflow: hidden;transition: width 1s">
            <el-menu
                    default-active="2"
                    :collapse="isCollapse"
                    :collapse-transition=true
                    @open="handleOpen"
                    @close="handleClose"
            >
                <el-menu-item index="1">
                    <span class="iconfont">&#xe613;</span>
                    <template #title>放映厅管理</template>
                </el-menu-item>
                <el-menu-item index="3">
                    <span class="iconfont">&#xe937;</span>
                    <template #title>座位管理</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <span class="iconfont">&#xe60a;</span>
                    <template #title>影片管理</template>
                </el-menu-item>
                <el-menu-item index="5">
                    <span class="iconfont">&#xf00e0;</span>
                    <template #title>演出计划管理</template>
                </el-menu-item>
                <el-menu-item index="6">
                    <span class="iconfont">&#xe6a5;</span>
                    <template #title>用户管理</template>
                </el-menu-item>
                <el-menu-item index="7">
                    <span class="iconfont">&#xe897;</span>
                    <template #title>订单管理</template>
                </el-menu-item>
                <el-menu-item index="8">
                    <span class="iconfont">&#xe626;</span>
                    <template #title>票房统计</template>
                </el-menu-item>
                <el-menu-item index="8">
                    <span class="iconfont">&#xe626;</span>
                    <template #title>票房统计</template>
                </el-menu-item>
                <el-menu-item index="8">

                </el-menu-item>
                <el-menu-item index="8">

                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
    export default {
        name: "Aside.vue",
        data: function() {
            return {
                // 是否折叠
                isCollapse: false,
            }
        },
        methods: {
            // 点击按钮切换菜单的折叠与展开
            toggleCollapse() {
                this.isCollapse = true;
            },
            toggleExpand(){
                this.isCollapse=false;
            }
        }
    }

</script>

<style scoped>


</style>