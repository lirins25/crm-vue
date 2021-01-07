import category from "@/api/category";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            multipleSelection: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            editDialig: false,
            formData: {},
            ids: [],
            delDialog: false,
            value: {}
        }
    },

    methods: {
        handleClick(row) {
            console.log(row);
        },
        async findAll() {
            let response = await category.getTreeData();
            this.tableData = response;
            this.value={};
        },
        async addOrEdit() {
            this.formData.parentId = this.value[0] == null ? 0 : this.value[this.value.length - 1];
            if (this.formData.id) {
                //修改
                await category.updateEntity(this.formData);
            } else {
                //新建
                await category.addEntity(this.formData);
            }
            this.findAll();
        },
        async findById(id) {
            // this.tableData.forEach()
            // this.formData=JSON.parse(JSON.stringify(this.tableData.forEach()));
            let response = await category.findById(id);
            this.formData = response;
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
                await category.deleteByIds(this.ids);
                this.findAll();
            }
        },
    },
    created() {
        this.findAll();
    },

}
