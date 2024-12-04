import { createFakeProduct } from "../utils/createfakeproduct.js";
import * as fs from "node:fs/promises";
import { PATH_DB } from "../constans/products.js";
// data використовуємо замість readProducts
export const generateProducts = async(number)=>{
 const data = await fs.readFile(PATH_DB, "utf-8"); 
 const parsedData = JSON.parse(data);

 for(let i = 0;i< number;i++){
parsedData.push(createFakeProduct());
 }
await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), "utf-8");
};
generateProducts(3);