"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 引入 Express 函式庫，並引入 Request 和 Response 的型別定義(TypeScript 專用)
const express_1 = __importStar(require("express"));
// 建立 Express 實例 (app 就是您的伺服器應用程式)
const app = (0, express_1.default)();
// 定義伺服器運行的端口(Port), 使用 3000 是業界常見習慣
const PORT = 3000;
// 設定第一個路由：當有人使用 GET 方法訪問 /api/v1/hello 時
app.get('/api/v1/hello', (req, res) => {
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
//# sourceMappingURL=server.js.map