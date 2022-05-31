<template>
    <div style="width: 1120px;margin-left: 120px;padding: 10px">
<!--        功能区-->
        <div style="margin: 10px 0">
            <el-button  color="#71A4A3" bg="false"  style="color: #FFFFFF" @click="add()">新增</el-button>
        </div>
<!--        搜索区-->
        <div style="margin: 10px 0">
            <el-input v-model="search"  placeholder="请输入内容" clearable style="width: 30%"/>
            <el-button  color="#71A4A3" bg="false"  style="color: #FFFFFF;margin-left: 5px" >查询</el-button>
        </div>
<!--        表格-->
        <el-table :data="tableData"  :default-sort="{ prop: 'age', order: 'descending' }" border style="width: 100%">
            <el-table-column prop="username" label="姓名" width="180" />
            <el-table-column prop="name" label="职能" width="180" />
            <el-table-column prop="sex" label="性别" width="180" />
            <el-table-column prop="phone" label="电话号码" width="180" />
            <el-table-column prop="idNumber" label="账号" width="180" />
            <el-table-column label="操作" width="220">
                <template #default="scope">
                    <el-button size="small" type="primary" color="#71A4A3" bg="false"  style="color: #FFFFFF" @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                    >
                    <el-popconfirm title="你确定要删除吗?">
                        <template #reference>
                            <el-button type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin: 10px 0">
            <el-pagination
                    v-model:currentPage="currentPage"
                    :page-sizes="[5, 10, 15, 20]"
                    :small="small"
                    :disabled="disabled"
                    :background="background"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="10"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            />
                <el-dialog v-model="dialogFormVisible" title="新增用户" width="500px">
                    <el-form :model="form" label-width="80px">
                        <el-form-item label="姓名" style="width: 350px">
                            <el-input v-model="form.username"/>
                        </el-form-item>
                        <el-form-item label="职能">
                            <el-radio-group v-model="form.name">
                                <el-radio label="店长" />
                                <el-radio label="前台" />
                                <el-radio label="厨师" />
                                <el-radio label="普通员工" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="form.sex">
                                <el-radio label="男" />
                                <el-radio label="女" />
                                <el-radio label="未知" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="账号" style="width: 350px">
                            <el-input v-model="form. idNumber"/>
                        </el-form-item>
                        <el-form-item label="电话号码" style="width: 350px">
                            <el-input v-model="form.phone"/>
                        </el-form-item>

                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取消</el-button>
                        <el-button type="primary" @click="save()"
                         >确认</el-button
                        >
                      </span>
                    </template>
                </el-dialog>
        </div>
    </div>
</template>

<script>
   import request from "../../utils/request";

    export default {
        name: "Employee.vue",
        data(){
            return{
                search:'',
                currentPage:1,
                total:10,
                dialogFormVisible:false,
                form:{},
                tableData :[
                   ]
            }
        },
        methods:{
            //增加新员工
            add(){
                this.dialogFormVisible=true;
                //添加员工时要先清空表格
                this.form={};
            },
            //点击对话框的确认按钮将数据传到后台
            save(){
                request.post('/Employee',this.form).then(res=>{
                    console.log(res.data);
                });
                this.dialogFormVisible=false;
            },
            //员工内容修改
            handleEdit(){

            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            }

        }
    }
</script>

<style scoped>

</style>