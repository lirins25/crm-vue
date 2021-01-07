import brand from "@/api/brand";

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
            delDialog:false
        }
    },

    methods: {
        handleClick(row) {
            console.log(row);
        },
       async findAll(){
           let response = await brand.findAll(this.currentPage,this.pageSize);
           this.total = response.total;
           this.tableData = response.list;
           console.log(response);
        },
       async addOrEdit(){
            if(this.formData.id){
                //修改
                await brand.updateEntity(this.formData);
            }else{
                //新建
                await brand.addEntity(this.formData);
            }
           this.findAll();
        },
        pageChange(page){
            this.currentPage=page;
            this.findAll();
        },
       async findById(id){
            // this.tableData.forEach()
            // this.formData=JSON.parse(JSON.stringify(this.tableData.forEach()));
           let response = await brand.findById(id);
           this.formData = response;
        },
        selectChange(selection){
            this.ids=[];
            selection.forEach(item=>this.ids.push(item.id));
            console.log(this.ids);
        },
       async deleteByIds(){
            if(this.ids.length==0){
                this.$message.error("请选择要删除的内容")
            }else{
                await brand.deleteByIds(this.ids);
                this.findAll();
            }
        }
    },
    created() {
        this.findAll();
    },

}
