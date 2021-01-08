import axios from "../utils/baseAxios.js";

let brand = {
    /**
     *  findAll
     */
    findAll(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`brand?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */
    findById(id) {
        return axios.get(`brand/${id}`)
    },
    addEntity(entity) {
        return axios.post(`brand`, entity);
    },
    updateEntity(entity) {
        return axios.put(`brand`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`brand/${ids}`);
    }


}

export default brand;
