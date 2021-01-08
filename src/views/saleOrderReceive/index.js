import saleOrderReceive from "@/api/saleOrderReceive";
import consignee from "@/api/consignee";

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
            consigneeDataForm:{},
            consigneeIsShow:false,
            orderType:["电话订单","网络订单","其他"],
            orderMotion:["订购","换购","支付"],
            businessType:["业务类型","卡号套餐"],
            orderPayment:["货到付款","货到发货"],
            orderState:["审核通过","已付款","已出库","已发货","已到货","已归档"],
            criteriaQuery:{},
        }
    },

    methods: {
        handleClick(row) {
            console.log(row);
        },
       async findAll(){
           let response = await saleOrderReceive.findAllWithOrderGood(this.currentPage,this.pageSize);
           this.total = response.total;
           this.tableData = response.list;
           console.log(response);
        },
       async addOrEdit(){
            if(this.formData.id){
                //修改
                await saleOrderReceive.updateEntity(this.formData);
            }else{
                //新建
                await saleOrderReceive.addEntity(this.formData);
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
           let response = await saleOrderReceive.findById(id);
           this.formData = response;
        },
        selectChange(selection){
            this.ids=[];
            selection.forEach(item=>this.ids.push(item.id));
        },
       async deleteByIds(){
            if(this.ids.length==0){
                this.$message.error("请选择要删除的内容")
            }else{
                await saleOrderReceive.deleteByIds(this.ids);
                this.findAll();
            }
        },
        async showConsignee(consigneeId){
            let response = await consignee.findById(consigneeId);
            this.consigneeDataForm=response;
            this.consigneeIsShow=this.consigneeDataForm!==undefined;
        },
        showData(){
          console.log(this.criteriaQuery)
        }
    },
    created() {
        this.findAll();
    },

}
