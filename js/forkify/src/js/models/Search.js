import { key, proxy } from '../config';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {

        try{
            const json = await fetch(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            const res = await json.json();
            this.result = res.recipes;
        }catch(error){
            console.log(error);
        }
    }
}

