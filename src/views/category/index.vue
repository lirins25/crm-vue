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
            tooltip-effect="light"
            row-key="id"
            :tree-props="{children: 'children'}"
            style="width: 100%">
          <el-table-column
              prop="categoryName"
              label="分类名称"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              prop="categoryDesc"
              label="分类描述"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template v-slot="object">
              <el-button type="text" size="small" @click="findById(object.row.id),editDialig=true">编辑</el-button>
              <el-button type="text" size="small"
                         @click="delDialog=true,$refs.dataTable.clearSelection(),ids=[],ids.push(object.row.id)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="page-box">
    </div>

    <!--    新建或者编辑弹框-->
    <el-dialog
        title="新建&修改"
        :visible.sync="editDialig"
        width="30%">
      <el-form ref="form" label-width="100px">
        <el-form-item label="分类名称">
          <el-input v-model="formData.categoryName" placeholder="请输入分类名称"></el-input>
        </el-form-item>
        <el-form-item label="分类描述">
          <el-input v-model="formData.categoryDesc" placeholder="请输入分类描述"></el-input>
        </el-form-item>
        <el-form-item label="父级分类Id">
            <el-cascader
                v-model="value"
                :options="tableData"
                :props="{ checkStrictly: true ,label:'categoryName',value:'id'}"
                clearable></el-cascader>
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
      确定要删除吗{{ ids }}
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
