import axios from "axios";
import fs from "fs";

const listSellerItems = async (seller_id) => {
    try {
        const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${seller_id}`);
        console.log(resp.data.results);  
        const respInfo = resp.data.results.map((result)=>{
            return{
                "id":result.id,
                "title":result.title, 
                "category_id": result.category_id,
                "category_name": result.domain_id
            }
            })
            console.log(respInfo);
// Quise guardar el log con fs pero no sabía que no es posible crear un archivo desde el cliente.
        fs.writeFile(`./results_of_${seller_id}.log`, JSON.stringify(respInfo, null, 2), err => {
        if (err) {
            throw err;
        }
        console.log(`Results of id ${seller_id} saved`);
    });

    } catch (err) {
        if(err.response) {
            console.log("Problem with the response ", err.response.status);
        } else if (err.request){
            console.log("Problem with the request!");
        } else {
            console.log("Error", err.message);
        }
    }
};



export default listSellerItems;