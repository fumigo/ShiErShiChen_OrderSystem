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
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >

      <el-table-column type="expand">
        <template #default="props">
          <div style="margin-left: 100px;line-height: 25px" m="4">
            <p m="t-0 b-2">菜1: {{ props.row.cai1 }}</p>
            <p m="t-0 b-2">菜2: {{ props.row.cai2 }}</p>
            <p m="t-0 b-2">菜3: {{ props.row.cai3 }}</p>
            <p m="t-0 b-2">菜4: {{ props.row.cai4 }}</p>
            <p m="t-0 b-2">备注: {{ props.row.beizhu}}</p>

          </div>
        </template>
      </el-table-column>

      <el-table-column type="selection" width="55"/>
      <el-table-column property="name" label="Name"/>
      <el-table-column prop="tel" label="联系电话"/>

      <el-table-column property="address" label="Address" show-overflow-tooltip/>
      <el-table-column label="下单时间" prop="date1" sortable>
      </el-table-column>
      <el-table-column label="完成时间" prop="date2">
      </el-table-column>
      <el-table-column
          prop="tag"
          label="状态"
          :filters="[
        { text: '未出餐', value: '未出餐' },
        { text: '配送中', value: '配送中' },
        { text: '已送达', value: '已送达' },
      ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
      >
        <template #default="scope" style="text-align: center">
          <el-tag
              :type="scope.row.tag === '未出餐' ? 'error' : (scope.row.tag === '配送中' ? 'warning' : 'success')"
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
                  <el-dropdown-item @click="imp('未出餐',scope.row)" style="margin: 0 auto">未出餐</el-dropdown-item>
                  <el-dropdown-item @click="imp('配送中',scope.row)" style="margin: 0 auto">配送中</el-dropdown-item>
                  <el-dropdown-item @click="imp('已送达',scope.row)" style="margin: 0 auto">已送达</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

          </el-tag>
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
  </div>
</template>

<script>

export default {
  name: 'Order',
  components: {},
  data() {
    return {
      value2:'',
      currentPage:1,
      total:10,
      tableData: [
        {
          name: '王大花',
          tel: '15929067793',
          address: '安美公寓3518铁栅栏5号床',
          date1: '2021-04-01',
          date2: '2021-04-02',
          tag: '已送达',
          cai1: '黄焖鸡米饭',
          cai2: '奶茶',
          cai3: '水果',
          cai4: '凉皮',
          beizhu:'多辣辣辣辣辣辣辣辣辣辣'


        },
        {
          name: '俱臭肥',
          tel: '18392047793',
          address: '安美公寓3518铁栅栏6号床',
          date1: '2020-04-02',
          date2: '2020-04-02',
          tag: '未出餐',
          cai1: '黄焖鸡米饭',
          cai2: '奶茶',
          cai3: '水果',
          cai4: '凉皮',
          beizhu:'多辣辣辣辣辣辣辣辣辣辣'

        },
        {
          name: '刘来风',
          tel: '15977938966',
          address: '安美公寓3518铁栅栏3号床',
          date1: '2020-04-03',
          date2: '2020-04-02',
          tag: '已送达',
          cai1: '黄焖鸡米饭',
          cai2: '奶茶',
          cai3: '水果',
          cai4: '凉皮',
          beizhu:'多辣辣辣辣辣辣辣辣辣辣'

        },
        {
          name: '苗欢子',
          tel: '13298505860',
          address: '安美公寓3518铁栅栏4号床',
          date1: '2020-04-04',
          date2: '2020-04-02',
          tag: '配送中',
          cai1: '黄焖鸡米饭',
          cai2: '奶茶',
          cai3: '水果',
          cai4: '凉皮',
          beizhu:'多辣辣辣辣辣辣辣辣辣辣'
        },]
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
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
    currentPage4(){

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