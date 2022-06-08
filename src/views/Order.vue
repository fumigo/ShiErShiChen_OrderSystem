<template>
  <div class="home" style="padding: 20px">

    <!--    搜索区域-->
    <div style="margin: 10px">
      <div class="demo-input-suffix">
        <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center " style="margin: 0 10px;padding: 10px"
      >
      </span
      >
          <!--       <el-input-->
          <!--           v-model="input1"-->
          <!--           class="w-50 m-2"-->
          <!--           placeholder="按日期搜索"-->
          <!--           :suffix-icon="Calendar"-->
          <!--           style="width: 20%;margin: 0 20px"-->
          <!--       />-->

          <span class="demonstration" style="width: 100%"></span>
          <el-date-picker
              v-model="value2"
              type="date"
              placeholder="Pick a day"
              :disabled-date="disabledDate"
              :shortcuts="shortcuts"
              style="margin-left: 40px"
          />
          <el-input
              v-model="input2"
              class="w-50 m-2"
              placeholder="按电话号搜索"
              :prefix-icon="Search"
              style="width: 20%;margin: 0 20px"
          />
          <el-button type="info" plain>搜索订单</el-button>
        </el-row>
      </div>
    </div>
    <el-table
        ref="multipleTableRef"
        :data="tableOrderData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >


      <el-table-column type="selection" width="55"/>
      <el-table-column property="number" label="订单号" width="120"/>
      <el-table-column property="name" label="收货人" width="100"/>
      <el-table-column prop="tel" label="联系电话" width="120"/>
      <el-table-column property="address" label="地址" width="250" show-overflow-tooltip/>
      <el-table-column prop="pay" label="付款金额" width="100"/>
      <el-table-column label="结账时间" prop="checkoutTime" width="200"/>
      <el-table-column label="支付方式" prop="payMethod" width="100"/>

      <el-table-column
          prop="status"
          label="状态"
          :filters="[
        { text: '待出餐', value: '待出餐' },
        { text: '配送中', value: '配送中' },
        { text: '已送达', value: '已送达' },
      ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
      >
        <template #default="scope" style="text-align: center">
          <el-tag
              :type="scope.row.tag === '待出餐' ? 'error' : (scope.row.tag === '配送中' ? 'warning' : 'success')"
              disable-transitions
              style="text-align: center"
          >
            <el-dropdown>
              <span class="el-dropdown-link"  style="text-align: center">
                <span style="margin: 0 auto">{{ scope.row.tag }}</span>

                <el-icon class="el-icon--right">
                  <arrow-down/>
                </el-icon>
              </span>
              <template #dropdown style="text-align: center">
                <el-dropdown-menu style="margin: 0 auto ;text-align: center">
                  <el-dropdown-item @click="imp('待出餐',scope.row)" style="margin: 0 auto">待出餐</el-dropdown-item>
                  <el-dropdown-item @click="imp('配送中',scope.row)" style="margin: 0 auto">配送中</el-dropdown-item>
                  <el-dropdown-item @click="imp('已送达',scope.row)" style="margin: 0 auto">已送达</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="查看" width="220">
        <template #default="scope">
          <el-button size="small" type="primary" color="#71A4A3" bg="false"  style="color: #FFFFFF" @click="handleCheck(scope.row.number)"
          >查看</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div style="margin: 10px 0">
      <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[5, 10, 20]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>


    <el-dialog v-model="dialogVisible"
               title="订单详情"
               width="40%"
    >

      <el-table :data="tableOrderDetailData" stripe style="width: 100%">
        <el-table-column prop="name" label="名字" width="180" />
<!--        <el-table-column prop="image" label="图片" width="180" >-->
<!--          <img :src="image" alt="">-->
<!--        </el-table-column>-->
        <el-table-column prop="dishFlavor" label="口味" />
        <el-table-column prop="number" label="数量" />
      </el-table>
      <div style="width: 80%;height: 100px;border-top: #496C66 5px ">

      </div>

    </el-dialog>

  </div>
</template>

<script>

import request from "../../utils/request";

export default {
  name: 'Order',
  components: {},
  data() {
    return {
      value2:'',
      currentPage:1,
      total:10,
      tableOrderData: [
        {
          number:'1232524352',
          name: '王大花',
          tel: '15929067793',
          address: '安美公寓3518铁栅栏5号床',
          pay:'66.66',
          checkoutTime: '2021-04-01',
          tag: '待出餐',
          payMethod: '支付宝',
          remark:'多辣辣辣辣辣'


        },
        // {
        //   name: '俱臭肥',
        //   tel: '18392047793',
        //   address: '安美公寓3518铁栅栏6号床',
        //   pay:'66.66',
        //   date1: '2020-04-02',
        //   date2: '2020-04-02',
        //   tag: '未出餐',
        //   cai1: '黄焖鸡米饭-奶茶-水果-凉皮',
        //   beizhu:'多辣辣辣辣辣辣辣辣辣辣'
        //
        // },
        // {
        //   name: '刘来风',
        //   tel: '15977938966',
        //   address: '安美公寓3518铁栅栏3号床',
        //   pay:'66.66',
        //   date1: '2020-04-03',
        //   date2: '2020-04-02',
        //   tag: '已送达',
        //   cai1: '黄焖鸡米饭-奶茶-水果-凉皮',
        //   beizhu:'多辣辣辣辣辣辣辣辣辣辣'
        //
        // },
        // {
        //   name: '苗欢子',
        //   tel: '13298505860',
        //   address: '安美公寓3518铁栅栏4号床',
        //   pay:'66.66',
        //   date1: '2020-04-04',
        //   date2: '2020-04-02',
        //   tag: '配送中',
        //   cai1: '黄焖鸡米饭-奶茶-水果-凉皮',
        //   beizhu:'多辣辣辣辣辣辣辣辣辣辣'
        // },
      ],
      tableOrderDetailData:[{
        name:'陕西凉皮',
        image:'',
        dishFlavor:'变态辣',
        number:'2'
      }],
      pageSize:5,
      dialogVisible:false
    }
  },
  methods: {

    filterTag(value, row) {
      return row.tag === value
    },
    imp(value, row) {
      row.tag = value
    },
    disabledDate(time){
      return time.getTime() > Date.now()
    },
    handleSizeChange(){},
    handleCurrentChange(){

    },
    currentPage4(){

    },

    handleCheck(number){
      this.dialogVisible = true
      request.get('/changAn/orders/detail', {
          orderId:number
    }).then(res => {
        console.log(res);
        this.tableOrderDetailData = res.data.records;
        this.total = res.data.total;
      })
    },

    load() {
      request.get('/changAn/orders/page', {
        params: {
          page: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,
        }
      }).then(res => {
        console.log(res);
        this.tableOrderData = res.data.records;
        this.total = res.data.total;
      })
    },

  }
}
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>