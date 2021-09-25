import axios from "axios";

const INFO_REST_URL = 'http://localhost:8080/info/sam/17-09-1995';

class InfoService {
    getInfo(){
        return axios.get(INFO_REST_URL);
    }
}

export default new InfoService();