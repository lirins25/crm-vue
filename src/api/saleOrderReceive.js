import axios from "../utils/baseAxios.js";

let saleOrderReceive = {
    /**
     *  findAll
     */
    findAllWithOrderGood(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`saleOrderReceive?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */
    findById(id) {
        return axios.get(`saleOrderReceive/${id}`)
    },
    addEntity(entity) {
        return axios.post(`saleOrderReceive`, entity);
    },
    updateEntity(entity) {
        return axios.post(`saleOrderReceive`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`saleOrderReceive/${ids}`);
    }


}

export default saleOrderReceive;
