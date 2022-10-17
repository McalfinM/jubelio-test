# Jubelio Test



#Krakend

### penambahan fitur yaitu krakend sebagai api gateway
mungkin perlu penyesuaian untuk dapat dijalankan local, didalam folder krakend -> krakend.json ip local dirubah menjadi iplocal masing masing

cara mengecek iplocal and untuk windows buka cmd ketikan ```ipconfig``` lalu cari dibagian ipv4 dan pastekan kedalam ```hosts``` yang ada di dalam configure krakend.json

untuk macos atau linux mengecek ip gunakan ```ifconfig``` cari ipv4 kalian lalu lakukan hal yang sama seperti di windows


---
lakukan ```npm install``` didalam folder adjust transaction dan product terlebih dahulu
menjalankan via docker menggunakan `docker-compose up --build -d`

Saat dijalankan lewat docker untuk service product akan running di localhost:8080 sendangkan adjusment transaction akan berjalan di localhost:8089

menjalankan local dengan npm run start di setiap service

untuk menjalankan local perlu download file pendukung seperti zookeper dll

berikut linkny
`https://drive.google.com/file/d/1Xlb3JBcm8UpxE_9yagLWAKpsyeBVuM7a/view?usp=sharing`

extract lalu di root folder jalankan

`docker-compose up -d`

`cd product` atau `cd adjust_transaction` lalu `npm run start`

untuk menjalankan testing, buat database local dengan nama testing

lalu jalankan `npm run test`

### API DOCUMENTATION

https://documenter.getpostman.com/view/10018778/2s83YWkjwn
