import { fileURLToPath } from "url";

export default function greet(name: string) {
  console.log(`Hello ${name}!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) greet(process.argv[2] || "there");
