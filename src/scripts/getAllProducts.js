import { PATH_DB } from "../constans/products.js";
import * as fs from "node:fs/promises";

export const getAllProducts = async()=>{
const data = await fs.readFile(PATH_DB,"utf-8");
const parsedData = JSON.parse(data);
return parsedData;
};
console.log(await getAllProducts());