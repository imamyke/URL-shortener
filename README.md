# URL-shortener
利用Node.js及Express框架建立產生短網址網站，可以讓使用者輸入網址並產生五碼英數亂碼的短網址，並透過短網址導引到原始網址

## 專案畫面
### 首頁
![MyImage](https://i.imgur.com/x6gcVF9.png)
### 避免誤輸入空字串提醒畫面
![MyImage](https://i.imgur.com/C7EIdIe.png)
### 短網址產生畫面
![MyImage](https://i.imgur.com/LUDCq42.png)

## 專案特色
1. 在伺服器啟動期間
- 使用者可以在表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址
- 使用者可以在瀏覽器的網址列，輸入提供的短網址，瀏覽器就會導向原本的網站
2. 例外處理
- 若使用者沒有輸入內容，就按下了送出鈕，會防止表單送出並提示使用者輸入網址
- 輸入相同網址時，產生一樣的縮址
3. 短網址產生後，使用者可以按 Copy link 來複製縮短後的網址

## 環境建置
- Node.js

## 專案安裝流程
1. Clone此專案至本機電腦
```
git clone https://github.com/imamyke/restaurant_list.git
```
2. 進入此專案資料夾
```
cd URL_shortener
```
3. 安裝 npm 套件
```
npm install
```
4. 打開Terminal，並輸入以下指令
```
npm run dev
```
5. 當Terminal出現此字句，表示伺服器已成功啟用
```
The server is running on http://localhost:3000
```
現在可以將 http://localhost:3000 輸入至瀏覽器，開始產生你的短網址吧!
