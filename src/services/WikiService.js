import axios from "axios";

const WIKI_REST_URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&titles=September_17&format=json';

class WikiService {
    getWikiInfo(){
        return axios.get(WIKI_REST_URL);
    }
}

export default new WikiService();