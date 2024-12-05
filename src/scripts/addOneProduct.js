import { PATH_DB } from "../constans/products.js";
import * as fs from "node:fs/promises";
import { createFakeProduct } from "../utils/createfakeproduct.js";
export const addOneProduct = async()=>{
const data =  await fs.readFile(PATH_DB,"utf-8");
const parsedData = JSON.parse(data);
parsedData.push(createFakeProduct());
await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), "utf-8");
};
addOneProduct();