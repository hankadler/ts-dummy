import { fileURLToPath } from "url";

/**
 * Logs a greeting to the console.
 *
 * @param {string?} name - Your name.
 */
export default function greet(name = "") {
  console.log(`Hello ${name || "there"}!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) greet(process.argv[2]);
