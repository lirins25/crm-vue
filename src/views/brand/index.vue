<template>
  <div class="entity-box">
    <!--  操作部分-->
    <div class="execute-box">
      <el-button-group>
        <el-button size="mini" type="primary" @click="editDialig=true,formData={}">新建</el-button>
        <el-button size="mini" type="primary" @click="delDialog=true">删除</el-button>
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
              label="品牌id"
              show-overflow-tooltip
              width="120">
          </el-table-column>
          <el-table-column
              prop="brandName"
              label="品牌名称"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="brandSite"
              label="品牌官网"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="brandDesc"
              label="品牌描述"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="brandLogo"
              label="品牌logo"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="addTime"
              label="添加时间"
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
            <el-form-item label="品牌名称">
              <el-input v-model="formData.brandName" placeholder="请输入运营商名称"></el-input>
            </el-form-item>
            <el-form-item label="品牌官网">
              <el-input v-model="formData.brandSite"></el-input>
            </el-form-item>
        <el-form-item label="品牌描述">
          <el-input v-model="formData.brandDesc"></el-input>
        </el-form-item>
        <el-form-item label="品牌logo">
          <el-input v-model="formData.brandLogo"></el-input>
        </el-form-item>
        <el-form-item label="添加时间">
          <el-input v-model="formData.addTime"></el-input>
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
