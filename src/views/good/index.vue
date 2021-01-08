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
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="id" label="id" width="120"></el-table-column>
          <el-table-column prop="goodName" label="商品名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="categoryId" label="种类" show-overflow-tooltip></el-table-column>
          <el-table-column prop="brandId" label="品牌" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodPrice" label="商品单价" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodCost" label="采购成本" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodNumber" label="商品库存" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodState" label="商品状态" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodDiscount" label="商品折扣" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodGift" label="赠品" show-overflow-tooltip></el-table-column>
          <el-table-column prop="goodImg" label="商品图片" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
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
        <el-row>
          <el-col :span="12">
            <el-form-item label="商品名称">
              <el-input v-model="formData.goodName"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="分类">
              <el-input v-model="formData.categoryId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="品牌">
          <el-input v-model="formData.brandId"></el-input>
        </el-form-item>
        <el-form-item label="商品单价">
          <el-input v-model="formData.goodPrice"></el-input>
        </el-form-item>
        <el-form-item label="采购成本">
          <el-input v-model="formData.goodCost"></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="formData.goodNumber"></el-input>
        </el-form-item>
        <el-form-item label="商品状态">
          <el-input v-model="formData.goodState"></el-input>
        </el-form-item>
        <el-form-item label="商品折扣">
          <el-input v-model="formData.goodDiscount"></el-input>
        </el-form-item>
        <el-form-item label="赠品">
        <el-input v-model="formData.goodGift"></el-input>
      </el-form-item>
        <el-form-item label="商品图片">
<!--action 上传的地址 list-type 上传的文件类型  on-preview	 点击文件列表中已上传的文件时的钩子  on-remove 文件列表移除文件时的钩子-->
          <el-upload
              class="upload-demo"
              :before-upload="chooseImageAndUpload"
              :file-list="fileList"
              list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
