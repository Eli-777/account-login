# restaurant list
用Node.js、Express、handlebars、body-parser練習的作品，內容主要為信箱與密碼驗證網站。

## 安裝方法
下載專案
```
git clone https://github.com/Eli-777/account-login.git
```
安裝 Package
```
npm install
```
使用 nodemon 啟動伺服器
```
npm run dev
```
或正常啟動
```
npm start
```

## 功能 
- 根據已設定好的使用者信箱與密碼，可進入使用者的頁面。
- 若信箱或密碼沒有輸入文字或錯誤，會出現 'Username/Password 錯誤' 之提示。
- 若信箱或密碼與設定好的信箱與密碼相符，即可到登入頁面。

## 測試用帳號
- firstName：Tony / email：tony@stark.com / password：iamironman
- firstName：Steve / email：captain@hotmail.com / password：icandothisallday
- firstName: Peter / email：peter@parker.com / password：enajyram
- firstName：Natasha / email：natasha@gamil.com / password：*parol#@$!
- firstName：Nick / email：nick@shield.com / password：password

## 使用工具
- Node.js v12.16.2 -執行環境
- Express V4.17.1 -框架
- Express-handlebars V4.0.4 -模板引擎
- body-parser V1.19.0

## 專案畫面
![Alt text](/indexPic.png)