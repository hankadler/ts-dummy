import { fileURLToPath } from "url";

export default function greet(name = "") {
  console.log(`Hello ${name || "there"}!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) greet(process.argv[2]);
