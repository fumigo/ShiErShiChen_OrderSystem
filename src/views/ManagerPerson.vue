<template>
  <div>
    <el-container  style="width: 97%;height: 290px;margin: 10px auto;border-radius: 15px;background-color: #496C66">
      <div  style="width: 22%;margin: 20px ;">
        <img :src="managerImg" style="width: 80%;border-radius: 50%;margin: 5px 30px" alt="">
      </div>
      <div  style="width: 22%;margin: 20px 0px;">
        <div style="margin: 25px 0;font-size: 20px;color: #f0f0f0;font-weight: bold">
          <p style="margin: 15px 0">姓名:<span >{{managerName}}</span></p>
          <p style="margin: 15px 0">工号:<span >{{managerNum}}</span></p>
          <p style="margin: 15px 0">身份:<span >{{managerIdentity}}</span></p>
          <p style="margin: 15px 0">电话:<span >{{managerPhone}}</span></p>
          <p style="margin: 15px 0">邮箱:<span >{{managerEmail}}</span></p>

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
export default {
  name: "ManagerPerson",
  data(){
    return{
      managerImg:require("../assets/image/lxx.jpg"),
      managerName:'刘璇',
      managerNum:'04193016',
      managerIdentity:'老板娘',
      managerPhone:'15929068966',
      managerEmail:'3199432593@qq.com',

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