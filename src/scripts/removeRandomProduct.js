import { PATH_DB } from "../constans/products.js";
import * as fs from "node:fs/promises";

export const removeRandomProduct = async()=>{
    const data =  await fs.readFile(PATH_DB,"utf-8");
    const parsedData = JSON.parse(data);
    const randomIndx = Math.floor(Math.random() * parsedData.length);
   parsedData.splice(randomIndx, 1);
   await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), "utf-8");
};
removeRandomProduct();