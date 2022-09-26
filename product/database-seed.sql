CREATE TABLE products
(
    id SERIAL,
    name text,
    sku text,
    quantity numeric(10),
    price numeric(10),
    description text,
    image text,
    CONSTRAINT products_pkey PRIMARY KEY (id)
);

INSERT INTO products(name,sku, quantity, price, description, image) VALUES
('Baseus Cable 1 Meter Micro USB', '26682888',341, 5000, 'Baseus White 1 Meter Micro USB 5 Pin to USB 2.0 High Speed Data Sync Charge >Cable for Samsung HTC Nokia Sony LG Xiaomi 100% new top quality high speed Micro USB 5pin to USB 2.0 data sync charge cable >High speed more reliable data transfer and charging, save time save money >Round cable, durable and strong, 1 meter length >2-in-1 function allowing charging and data transfer at the same time >Easily charges your device by simple connecting to USB port of your PC or wall >plug (not included) >Update music / data and more to your smart phone devices with micro usb port >through this data cable >Wide compatibility, suitable for most Android mobile phones, such as Samsung, >HTC, LG, Nokia, Sony, etc. >Cable Length: 1 Meter', 'http://image.elevenia.co.id/g/6/8/2/8/8/8/26682888_A1_V2.jpeg'),
('222 - Black-1112', '29325975',10318, 100000, 'Baju kekinian, super duper keren, material combo 30s, bahan adem', 'image.jpg'),
('Baju Magdalene', '28022696',70, 89000, 'dsadasdaas asdasd', 'http://image.elevenia.co.id/g/0/2/2/6/9/6/no_image_300.gif'),
('TORU Motomo Aluminium Case for iPhone 6 Plus - Silver', '28022849',100, 200000, 'TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.Features High Quality Material TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan.Lightweight Design Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.Compatibility TORU Motomo Aluminium Case cocok dan pas untuk iPhone 6+ Anda.', 'http://image.elevenia.co.id/g/0/2/2/8/4/9/28022849_B_V1.jpeg'),
('TORU Motomo Aluminium Case for iPhone 6 Plus - Dark Blue', '28022841',100, 200000, 'TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.Features High Quality Material TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan.Lightweight Design Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.Compatibility TORU Motomo Aluminium Case cocok dan pas untuk iPhone 6+ Anda', 'http://image.elevenia.co.id/g/0/2/2/8/4/1/28022841_B.jpeg'),
('Tas selempang Biru Dongker', '26026531',10, 30000 ,'Tas Selempang Merk Dhavin Memiliki Bahan yang kuat dan tahan lama memudahkan anda membawa barang-barang saat berpergian memiliki bentuk yang simpel dan trendy. Ready Stok Warna Navy Blue', 'http://image.elevenia.co.id/g/0/2/6/5/3/1/26026531_B_V2.jpeg'),
('SGP Neo Hybrid Ex Plastic Case for iPhone 6 Plus - Magenta', '28022896',97, 200000, 'Spigen Hard Case untuk iPhone 6 Plus ini terbuat dari bahan Polycarbonate yang kokoh dan ringan. Case ini juga hadir dengan berbagai pilihan warna menarik. Top Quality and Durable Polycarbonate Material Dengan bahan Plastic yang kuat dan kokoh membuat Hard Case ini dapat mengabsorb impact yang terjadi saat terjatuh atau terbentur. Easy Fold Design SGP Tough Armor dilengkapi dengan kickstand pada bagian belakang yang berfungsi agar iPhone Anda dapat digunakan dalam posisi berdiri dengan stabil. Perfectly Fit Your Cell Phone Design yang super tipis dan ringan membuat iPhone 6 Plus Anda lebih nyaman saat digunakan. Hard Case ini juga hadir dengan berbagai pilihan warna-warna menarik. Shockproof Air Cushion Case ini dilengkapi dengan sistem peredam jatuh sehingga iPhone Anda tidak akan rusak saat terjatuh. Warna Magenta', 'http://image.elevenia.co.id/g/0/2/2/8/9/6/28022896_B.jpeg'),
('test el6', '25920735',0, 1000000, 'test el6test el6test el6test el6test el6test el6te', 'http://image.elevenia.co.id/g/9/2/0/7/3/5/25920735_B.jpeg'),
('test el6', '25920736',110, 1000000, 'test el6test el6test el6test el6test el6test el6te', 'http://image.elevenia.co.id/g/9/2/0/7/3/5/25920735_B.jpeg'),
('SGP Neo Hybrid Ex Plastic Case for iPhone 6 Plus - Gold', '28022865',112, 200000, 'Spigen Hard Case untuk iPhone 6 Plus ini terbuat dari bahan Polycarbonate yang<br>kokoh dan ringan. Case ini juga hadir dengan berbagai pilihan warna menarik.</p><p>Top Quality and Durable Polycarbonate Material<br>Dengan bahan Plastic yang kuat dan kokoh membuat Hard Case ini dapat mengabsorb<br>impact yang terjadi saat terjatuh atau terbentur.</p><p>Easy Fold Design<br>SGP Tough Armor dilengkapi dengan kickstand pada bagian belakang yang berfungsi<br>agar iPhone Anda dapat digunakan dalam posisi berdiri dengan stabil.</p><p>Perfectly Fit Your Cell Phone<br>Design yang super tipis dan ringan membuat iPhone 6 Plus Anda lebih nyaman saat<br>digunakan. Hard Case ini juga hadir dengan berbagai pilihan warna-warna menarik.</p><p>Shockproof Air Cushion<br>Case ini dilengkapi dengan sistem peredam jatuh sehingga iPhone Anda tidak akan<br>rusak saat terjatuh.</p><p>Warna Gold', 'http://image.elevenia.co.id/g/0/2/2/8/6/5/28022865_B.jpeg'),
('test el6', '25919173',0, 1000000,'test el6test el6test el6test el6test el6test el6te', 'http://image.elevenia.co.id/g/9/2/0/7/3/5/25920735_B.jpeg'),
('SPG Full Armor Case for iphone 6 plus', '25996821',395, 200000, 'CASE SPG Full Armor Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p> <p>High Quality Material</p> <p>SPG Full Armor Case terbuat dari &nbsp;&nbsp;bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra &nbsp;&nbsp;untuk iPhone 6+ Anda dari goresan dan benturan.</p> <p>Lightweight Design</p> <p>Dengan design yang ramping dan ringan, Anda &nbsp;&nbsp;tetap mendapat akses ke setiap tombol dengan mudah.</p> <p>Compatibility</p> <p>SPG Full Armor Case cocok dan pas &nbsp;&nbsp;untuk iPhone 6+ Anda', 'http://image.elevenia.co.id/g/9/9/6/8/2/1/25996821_B_V5.jpeg'),
('test el5', '25919155',10, 1000000, 'test el6test el6test el6test el6test el6test el6te', 'http://image.elevenia.co.id/g/9/2/0/7/3/5/25920735_B.jpeg'),
('Pakaian Kucing Dan Anjing HOOPET  Warna GREY', '28022257',2, 150000, 'BRAND HOOPETUNTUK ANJING DAN KUCING GAYA YG BERBEDA BAHAN YG LEMBUT  * Hangat Di Musim dingiPERHATIAN! Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan, Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan stok yg tersedia SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch)BESAR =M 30/11.8inc 35-40/13.8inc-15.8inc 28/11incMEDIUM = S 26/10.2inc 30-35/11.8inc-13.8inc 23/9.1incKECIL =XS 22/8.7inc 25-30/10inc-11.8inc 18/7.1inc', 'http://image.elevenia.co.id/g/0/2/2/2/5/7/28022257_B.jpeg'),
('test el5', '25922874',20, 1000000, 'test el4test el4test el4test el4test', 'http://image.elevenia.co.id/g/9/2/2/8/7/4/25922874_B_V1.jpeg'),
('Pakaian Anjing Dan Kucing HOOPET warna SILVER', '28022796',202, 150000, 'BAJU BRAND HOOPET UNTUK ANJING DAN KUCING&lt;/p&gt;&lt;p&gt;&lt;br&gt;GAYA YG BERBEDA&lt;br&gt;BAHAN YG LEMBUT&lt;br&gt;* Hangat Di Musim dingi&lt;/p&gt;&lt;p&gt;PERHATIAN!&lt;br&gt;Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan,&lt;br&gt;Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan&lt;br&gt;stok yg tersedia&lt;/p&gt;&lt;p&gt;SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch)&lt;/p&gt;&lt;p&gt;BESAR =M 28/11inc 33-38/13inc-15.8inc 28/11inc&lt;/p&gt;&lt;p&gt;MEDIUM = S 25/9.8inc 28-33/11inc-13.8inc 23/9inc&lt;/p&gt;&lt;p&gt;KECIL =XS 22/8.7inc 23-28/9inc-11.8inc 18/7.1inc', 'http://image.elevenia.co.id/g/0/2/2/7/9/6/28022796_B_V1.jpg'),
('Gembok anti maling warna silver', '28022648',196, 399000, 'Gembok Anti Maling murah garansi 1 tahun design minimalis tahan dan kokoh, telah teruji ketahanannya, terbuat dari bahan tidak mudah karat dan mudah digunakan.', 'http://image.elevenia.co.id/g/0/2/2/6/4/8/28022648_B.jpeg'),
('Pakaian Anjing Dan Kucing HOOPET PERAK Atau SILVER', '25815395',203, 98000, 'Baju Brand HOOPET untuk anjing dan kucing  Gaya yg Berbeda Bahan Yg Lembut  Hangat Di Musim dingi PERHATIAN! Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan, Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan stok yg tersedia SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch) BESAR =M 28/11inc 33-38/13inc-15.8inc 28/11inc MEDIUM = S 25/9.8inc 28-33/11inc-13.8inc 23/9inc KECIL =XS 22/8.7inc 23-28/9inc-11.8inc 18/7.1inc', 'http://image.elevenia.co.id/g/8/1/5/3/9/5/25815395_B_V13.jpg'),
('kopi gayo', '28022653',1, 10000000, 'fdashfUFHYDHFYDHFYASHIJDISC sfbhsdbfsdfndkcmkmkjsaub hd', 'http://image.elevenia.co.id/g/0/2/2/6/5/3/28022653_B_V1.jpeg'),
('NOOSY TPU Soft Case for iPhone 6 Plus - Transparant', '28022238',70, 100000, 'TPU soft case NOOSY untuk iPhone 6 Plus Anda terbuat dari bahan material yang lembut dan berkualitas untuk melindungi setiap sisi iPhone Anda dari benturan dan goresan.Features High Quality Material Soft case ini terbuat dari bahan material metal yang lembut dan berkualitas, sehingga memberikan perlindungan ekstra untuk iPhone 6 Plus Anda dari goresan dan benturan.Easy Access to All Buttons Anda tetap mendapat akses ke setiap port dan button yang terdapat di device Anda dengan gampang.Removable, Durable, Reusable and Washable Tidak perlu kuatir soft case ini kotor saat dipakai beraktivitas karena Anda dapat mencuci case ini tanpa mengurangi kualitasnya.Compatibility Case ini cocok dan pas untuk iPhone 6 Plus Anda', 'http://image.elevenia.co.id/g/0/2/2/2/3/8/28022238_B.jpeg'),
('Baju Corak Carik Warna Warni', '28022645',489, 100000, 'Baju Corak Carik Warna Warni Bahan Katun Baju Corak Carik Warna Warni banyak warna Baju Corak Carik Warna Warni Baju Corak Carik Warna Warni', 'http://image.elevenia.co.id/g/0/2/2/6/4/5/28022645_B_V1.jpg'),
('Baju Kaos Polos Aneka Size', '28022716',110, 500000, 'StyleBasics Mens Round Neck Basic T-shirt merupakan kaos polos tanpa corak yang cocok dikenakan oleh pria. Kaos ini dirancang dengan model kerah bulat (round neck) yang nyaman digunakan untuk beraktivitas untuk suasana yang santai. Kaos ini terbuat dari bahan 30S dengan ketebalan yang tepat, sehingga memberikan kesejukkan saat Anda mengenakannya. Teknik jahitannya yang rapi juga akan menjaga kaos ini tetap awet dan tahan lama. Detail - Model: Kaos - Warna: Merah - Gender: Pria - Material: Fabric 30S - Desain: Round neck - Ukuran: XXL', 'http://image.elevenia.co.id/g/0/2/2/7/1/6/28022716_B_V1.jpeg'),
('Celana Dalam Sepeda Cycling Pants Bantalan Gel Empuk', '26269125',13, 150000, 'StyleBasics Mens Round Neck Basic T-shirt merupakan kaos polos tanpa corak yang cocok dikenakan oleh pria. Kaos ini dirancang dengan model kerah bulat (round neck) yang nyaman digunakan untuk beraktivitas untuk suasana yang santai. Kaos ini terbuat dari bahan 30S dengan ketebalan yang tepat, sehingga memberikan kesejukkan saat Anda mengenakannya. Teknik jahitannya yang rapi juga akan menjaga kaos ini tetap awet dan tahan lama. Detail - Model: Kaos - Warna: Merah - Gender: Pria - Material: Fabric 30S - Desain: Round neck - Ukuran: XXL', 'http://image.elevenia.co.id/g/0/2/2/7/1/6/28022716_B_V1.jpeg');