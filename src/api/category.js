import axios from "../utils/baseAxios.js";

let category = {
    /**
     *  findAll
     */
    findAll(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`category?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */
    findById(id) {
        return axios.get(`category/${id}`)
    },
    addEntity(entity) {
        return axios.post(`category`, entity);
    },
    updateEntity(entity) {
        return axios.put(`category`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`category/${ids}`);
    },
    getTreeData(){
      return axios.get(`category/getTreeData`);
    }


}

export default category;
