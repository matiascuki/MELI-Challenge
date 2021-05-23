import axios from "axios";
import fs from 'fs'

const listSellerItems = async (seller_id) => {
    try {
        const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${seller_id}`);
        resp.results.forEach(result => {
            return {
                "id":   result.id,
                "title":    result.title,
                "category_id":  result.category_id,
                "category": result.category.domain_id
            }
        });
    } catch (err) {
        console.error(err);
    }
};



export default listSellerItems;