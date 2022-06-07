<template>
  <div>
    <el-container  style="width: 97%;height: 290px;margin: 10px auto;border-radius: 15px;background-color: #496C66">
      <div  style="width: 22%;margin: 20px ;">
        <img :src="managerImg" style="width: 80%;border-radius: 50%;margin: 5px 30px" alt="">
      </div>
      <div  style="width: 22%;margin: 20px 0px;">
        <div style="margin: 25px 0;font-size: 20px;color: #f0f0f0;font-weight: bold">
          <p style="margin: 15px 0">姓名:<span >{{name}}</span></p>
          <p style="margin: 15px 0">工号:<span >{{username}}</span></p>
          <p style="margin: 15px 0">职能:<span >{{role}}</span></p>
          <p style="margin: 15px 0">性别:<span >{{sex}}</span></p>
          <p style="margin: 15px 0">电话:<span >{{phone}}</span></p>

        </div>

      </div>
    </el-container>

<!--    卡片-->
    <el-row :gutter="20" style="width: 98%;margin: 10px auto;border-radius: 20px;">
      <el-col :span="8">
        <el-card shadow="hover" class="el-card" @click="$router.push('/order')">
          <div style="font-size: 20px">
            <span class="iconfont">&#xe897;</span>
            订单数量
          </div>
          <div class="num">
            {{orderNum}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="el-card" @click="$router.push('/order')">
          <div style="font-size: 20px">
            <span class="iconfont">&#xe6a5;</span>
            用户数量
          </div>
          <div class="num">
            {{userNum}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="el-card"  @click="$router.push('/food')">
          <div style="font-size: 20px">
            <span class="iconfont">&#xe601;</span>
            菜品数量
          </div>
          <div class="num">
            {{foodNum}}
          </div>
        </el-card>
      </el-col>
    </el-row>


<!--排行-->
    <el-row :gutter="20" style="width: 98%;height: 290px;margin: 10px auto;border-radius: 20px;">
      <el-col :span="12">
        <el-card shadow="hover" class="el-card" @click="$router.push('/order')">
          <p style="font-size: 20px;border-bottom: #496C66 5px solid">菜品排行</p>
          <el-table :data="tableData1" style="width: 100%">
            <el-table-column prop="name" label="菜品名称" width="230" />
            <el-table-column prop="price" label="菜品价格" width="180" />
            <el-table-column prop="sell" label="菜品销量" />
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" class="el-card" @click="$router.push('/order')">
          <p style="font-size: 20px;border-bottom: #496C66 5px solid">套餐排行</p>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="name" label="套餐名称" width="230" />
            <el-table-column prop="price" label="套餐价格" width="180" />
            <el-table-column prop="sell" label="套餐销量" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import request from "../../utils/request";

export default {
  name: "ManagerPerson",
  data(){
    return{
      managerImg:'',
      name:'刘璇',
      username:'04193016',
      role:'老板娘',
      sex:'女',
      phone:'15929068966',

      orderNum:423,
      userNum:342,
      foodNum:56,

      tableData1:[{
        name:'鱼香肉丝',
        price:'￥39.99',
        sell:195
      },{
        name:'麻婆豆腐',
        price:'￥19.99',
        sell:182
      },{
        name:'jio踩酸菜',
        price:'￥199.99',
        sell:169
      },
      ],

      tableData2:[{
        name:'鱼香肉丝',
        price:'￥39.99',
        sell:195
      },{
        name:'麻婆豆腐',
        price:'￥19.99',
        sell:182
      },{
        name:'jio踩酸菜',
        price:'￥199.99',
        sell:169
      },
      ]

    }
  },
  created() {
    this.loadPerson()
    this.loadOrderNum()
    this.loadFoodNum()
  },
  methods:{
    loadPerson(){
      let user = localStorage.setItem('userInfo') || '{}'
      if(user === '{}'){
        this.$message.error("还没有登录")
      }else {
        let username = JSON.parse(localStorage.setItem('userInfo')).username
        request.get('/changAn/employee/page',{
          params:{
            page:'1',
            pageSize:'5',
            search:username,
          }
        }).then(res=>{
          console.log(res);
          this.name = res.data.records[0].name;
          this.username = res.data.records[0].username;
          this.role = res.data.records[0].role;
          this.sex = res.data.records[0].sex;
          this.phone = res.data.records[0].phone;
          // this.total=res.data.total;
        })
      }
    },
    loadOrderNum(){
      request.get('/changAn/order/page', {
        params: {
          page: "1",
          pageSize: "1000",
          search: "",
        }
      }).then(res => {
        console.log(res);
        this.orderNum = res.data.records.length;
      })
    },
    loadFoodNum(){
      request.get('/changAn/dish/page', {
        params: {
          page: "1",
          pageSize: "1000",
          search: "",
        }
      }).then(res => {
        console.log(res);
        this.foodNum = res.data.records.length;
      })
    }
  }
}
</script>

<style scoped>
.el-card{
  border-radius: 10px;
  text-align: center;
}
.num{
  margin: 15px 0 0 0;
  font-size: 30px;
}
</style>