import axios from "../utils/baseAxios.js";

let good = {
    /**
     *  findAll
     */
    findAll(currentPage, pageSize) {
        // 返回值是promise对象
        return axios.get(`good?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     *  findById
     */
    findById(id) {
        return axios.get(`good/${id}`)
    },
    addEntity(entity) {
        return axios.post(`good`, entity);
    },
    updateEntity(entity) {
        return axios.put(`good`, entity);
    },
    deleteByIds(ids) {
        return axios.delete(`good/${ids}`);
    },
    //上传图片 part方式
    uploadFile(formData) {
        return axios.post(`good/upload`, formData, {headers: {"Content-Type": "multipart/form-data"}});
    },
    //上传图片 base64的方式
    uploadFileByBase64(base64) {
        return axios.post(`good/uploadBase64`, base64);
    }


}

export default good;
