import { PATH_DB } from "../constans/products.js";
import * as fs from "node:fs/promises";


export const countProucts = async()=>{
    const data = await fs.readFile(PATH_DB,"utf-8");
    const parsedData = JSON.parse(data);
    return parsedData.length;
};
console.log(await countProucts());