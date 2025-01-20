# 使用輕量化的 Node.js 基礎映像檔
FROM node:18-alpine AS build

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 以安裝依賴
COPY package.json package-lock.json ./

# 安裝專案所需的依賴
RUN npm install

# 複製專案檔案到容器
COPY . .

# 執行 Vite 的構建指令
RUN npm run build

# 使用 Nginx 提供靜態檔案服務
FROM nginx:alpine

# 將靜態檔案從構建階段複製到 Nginx 的預設靜態目錄
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露 Nginx 預設的 HTTP 服務埠
EXPOSE 80

# 啟動 Nginx 伺服器
CMD ["nginx", "-g", "daemon off;"]
                            
