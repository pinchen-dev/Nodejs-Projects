// index.ts

// 使用 TypeScript 的類型註解 (Type Annotation)，證明我們正在使用 TypeScript 語法
const projectName: string = "Node.js Projects Collection";
const version: number = 1.0;

// 輸出一個訊息到終端機
console.log(`[INIT] Starting project: ${projectName}`);
console.log(`[INFO] Current version: ${version}`);
console.log("-----------------------------------------");
console.log("Welcome to your remote backend development journey.");

// 為了讓這個檔案看起來更專業，我們可以定義一個簡單的介面 (Interface)
interface ProjectStatus {
    initialized: boolean;
    language: string;
}

const status: ProjectStatus = {
    initialized: true,
    language: "TypeScript"
};

console.log(`[STATUS] Initialization complete. Language used: ${status.language}`);