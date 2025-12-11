// 引入 Express 函式庫，並引入 Request 和 Response 的型別定義(TypeScript 專用)
import express from 'express';
import type { Request, Response } from 'express';  

// 建立 Express 實例 (app 就是您的伺服器應用程式)
const app = express();

// 定義伺服器運行的端口(Port), 使用 3000 是業界常見習慣
const PORT = 3000;

// 設定第一個路由：當有人使用 GET 方法訪問 /api/v1/hello 時
app.get('/api/v1/hello', (req: Request, res: Response) => {

    // req: 請求 (Request) - 包含所有來自客戶端的資訊 (例如 IP, 查詢參數等)
    // res: 回應 (Response) - 包含所有伺服器要回傳給客戶端的資訊

    // 回傳 JSON 格式的回應
    res.json({ message: 'Hello from Node.js/TS' });
});

// 啟動伺服器並監聽端口
app.listen(PORT, () => {
    // 當伺服器啟動成功後，在終端機印出這行訊息
    console.log(`Server is running on http://localhost:${PORT}`);
});
