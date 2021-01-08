<template>
  <div class="entity-box">
    <!--  操作部分-->
    <div class="execute-box">
      <el-button-group>
        <el-button size="mini" type="primary" @click="editDialig=true,formData={}">新建</el-button>
        <el-button size="mini" type="primary" @click="delDialog=true">删除</el-button>
<!--        条件查询-->
        <template>
          <el-select @change="showData" v-model="criteriaQuery.orderType" clearable placeholder="订单类型">
            <el-option v-for="item in orderType" :key="item" :value="item"></el-option>
          </el-select>
        </template>
        <template>
          <el-select @change="showData" v-model="criteriaQuery.orderMotion" clearable placeholder="订单类型">
            <el-option v-for="item in orderMotion" :key="item" :value="item"></el-option>
          </el-select>
        </template>
        <template>
          <el-select @change="showData" v-model="criteriaQuery.businessType" clearable placeholder="订单类型">
            <el-option v-for="item in businessType" :key="item" :value="item"></el-option>
          </el-select>
        </template>
        <template>
          <el-select @change="showData" v-model="criteriaQuery.orderPayment" clearable placeholder="订单类型">
            <el-option v-for="item in orderPayment" :key="item" :value="item"></el-option>
          </el-select>
        </template>
        <template>
          <el-select @change="showData" v-model="criteriaQuery.orderState" clearable placeholder="订单类型">
            <el-option v-for="item in orderState" :key="item" :value="item"></el-option>
          </el-select>
        </template>
      </el-button-group>
    </div>
    <div class="search-box">
      <!--    搜索位置-->
    </div>
    <div class="table box">
      <template>
        <el-table
            ref="dataTable"
            :data="tableData"
            tooltip-effect="dark"
            @selection-change="selectChange"
            style="width: 100%">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              prop="id"
              label="订单ID"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="orderType"
              label="订单类型"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="orderMotion"
              label="订单动作"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="businessType"
              label="业务类型"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="consigneeId"
              label="收件人ID"
              show-overflow-tooltip>
            <template v-slot="object">
              <el-popover
                  placement="bottom"
                  width="400"
                  trigger="click">
                    <h3>收件人信息</h3>
                <table v-if="consigneeIsShow">
                  <tr>收件人ID：{{consigneeDataForm.id}}</tr>
                  <tr>姓名：{{consigneeDataForm.consigneeName}}</tr>
                  <tr>邮编：{{consigneeDataForm.consigneePostcode}}</tr>
                  <tr>邮箱：{{consigneeDataForm.consigneeAddress}}</tr>
                  <tr>地址：{{consigneeDataForm.consigneeAddress}}</tr>
                  <tr>电话：{{consigneeDataForm.consigneePhone}}</tr>
                  <tr>快递公司：{{consigneeDataForm.consigneeMode}}</tr>
                  <tr>快递费用：{{consigneeDataForm.consigneePrice}}</tr>
                  <tr>自提时间：{{consigneeDataForm.consigneeGettime}}</tr>
                  <tr>备注信息：{{consigneeDataForm.consigneeNote}}</tr>
                </table>
                <p v-else>没有此收件人！<br/> 请及时联系相关人员处理！</p>
                <el-button slot="reference" @click="showConsignee(object.row.consigneeId)">{{object.row.consigneeId}}</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
              prop="orderPayment"
              label="支付方式"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="orderState"
              label="订单状态"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="bookingTime"
              label="下单日期"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template v-slot="object">
              <el-button type="text" size="small" @click="findById(object.row.id),editDialig=true">编辑</el-button>
              <el-button type="text" size="small" @click="delDialog=true,$refs.dataTable.clearSelection(),ids=[],ids.push(object.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="page-box">
      <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          @current-change="pageChange"
      >
      </el-pagination>
    </div>

    <!--    新建或者编辑弹框-->
    <el-dialog
        title="新建&修改"
        :visible.sync="editDialig"
        width="30%">
      <el-form ref="form" label-width="100px">
            <el-form-item label="订单类型">
              <el-input v-model="formData.orderType" placeholder="请输入运营商名称"></el-input>
            </el-form-item>
            <el-form-item label="订单动作">
              <el-input v-model="formData.orderMotion"></el-input>
            </el-form-item>
        <el-form-item label="业务类型">
          <el-input v-model="formData.businessType"></el-input>
        </el-form-item>
        <el-form-item label="收件人ID">
          <el-input v-model="formData.consigneeId"></el-input>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-input v-model="formData.orderPayment"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-input v-model="formData.orderState"></el-input>
        </el-form-item>
        <el-form-item label="下单日期">
          <el-input v-model="formData.bookingTime"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialig = false" size="mini">取 消</el-button>
    <el-button type="primary" @click="editDialig = false,addOrEdit()" size="mini">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
        title="确定要删除吗"
        :visible.sync="delDialog"
        width="30%">
      确定要删除吗{{ids}}
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog=false" size="mini">取 消</el-button>
    <el-button type="primary" @click="delDialog=false,deleteByIds()" size="mini">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>


<script src="./index.js">

</script>

<style lang="less" src="./index.less">


</style>
