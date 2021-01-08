import good from "@/api/good";
// import axios from "axios";


export default {
    name: "index",
    data() {
        return {
            tableData: [],
            multipleSelection: [],
            currentPage:1,
            pageSize:5,
            total:0,
            editDialig:false,
            formData:{},
            ids:[],
            delDialog:false,
            fileList: []
        }
    },

    methods: {
        handleClick(row) {
            console.log(row);
        },
        async findAll() {
            let response = await good.findAll(this.currentPage, this.pageSize);
            this.total = response.total;
            this.tableData = response.list;
            // for (let i = 0; i < response.list.length; i++) {
            //     let obj = {};
            //     obj.name = response.list[i].goodName;
            //     obj.url = response.list[i].goodImg;
            //     this.fileList.push(obj)
            // }
        },
        async addOrEdit() {
            console.log(this.formData);
            if (this.formData.id) {
                //修改
                await good.updateEntity(this.formData);
            } else {
                //新建
                await good.addEntity(this.formData);
            }
            this.findAll();
        },
        pageChange(page) {
            this.currentPage = page;
            this.findAll();
        },
        async findById(id) {
            // this.tableData.forEach()
            // this.formData=JSON.parse(JSON.stringify(this.tableData.forEach()));
            this.fileList = [];
            let response = await good.findById(id);
            this.formData = response;
            let obj = {};
            obj.name = response.goodName;
            obj.url = response.goodImg;
            this.fileList.push(obj)
        },
        selectChange(selection) {
            this.ids = [];
            selection.forEach(item => this.ids.push(item.id));
            console.log(this.ids);
        },
        async deleteByIds() {
            if (this.ids.length == 0) {
                this.$message.error("请选择要删除的内容")
            } else {
                await good.deleteByIds(this.ids);
                this.findAll();
            }
        },
        //文件回显 点修改的时候在上传
       async  chooseImageAndUpload(e) {
            var formData = new FormData();
            formData.append("avatar", e)
            let response = await good.uploadFile(formData);
            this.formData.goodImg = response;
            this.fileList[0].url = response;
           // let obj = {};
           // var name = e.name;
       },

    },
    created() {
        this.findAll();
    },



}
