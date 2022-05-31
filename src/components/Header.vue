<template>
    <div style="height: 45px;line-height: 45px; border-bottom: 1px solid #ccc; display: flex;">
        <div style="width: 200px;padding-left: 30px;font-weight: bold;background-color:#496C66;color: #FFFFFF">后台管理</div>
        <div style="flex:1;background-color:#496C66;"></div>
        <div style="width: 140px;background-color:#496C66;" >
            <el-dropdown style="padding-top: 17px;padding-right: 40px">
            <span class="el-dropdown-link" style="color: #FFFFFF">
                小李
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item style="--el-dropdown-menuItem-hover-color: #496C66;">个人信息</el-dropdown-item>
                        <el-dropdown-item style="--el-dropdown-menuItem-hover-color:#496C66 ">更换主题</el-dropdown-item>
                        <el-dropdown-item style="--el-dropdown-menuItem-hover-color:#496C66 " divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Header.vue",
        // data(){
        //     username:"小李"
        // }
    }
</script>

<style scoped>
    .el-dropdown-item-c {
        cursor: pointer;
        color: red;
        background-color: #496C66;
        display: flex;
        align-items: center;
    }

</style>