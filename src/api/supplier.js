import axios from "../utils/baseAxios.js";

let supplier = {
    /**
     *  findAll
     */
    findAll(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`supplier?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */

    findById(id) {
        return axios.get(`supplier/${id}`)
    },
    addEntity(entity) {
        return axios.post(`supplier`, entity);
    },
    updateEntity(entity) {
        return axios.put(`supplier`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`supplier/${ids}`);
    }


}

export default supplier;
