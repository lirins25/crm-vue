import axios from "../utils/baseAxios.js";

let consignee = {
    /**
     *  findAll
     */
    findAll(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`consignee?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */
    findById(id) {
        return axios.get(`consignee/${id}`)
    },
    addEntity(entity) {
        return axios.post(`consignee`, entity);
    },
    updateEntity(entity) {
        return axios.post(`consignee`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`consignee/${ids}`);
    }


}

export default consignee;
