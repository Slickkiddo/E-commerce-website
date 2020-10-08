var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

con.connect(function(err) {
  if (err) console.log(err)
  console.log("Connected!");
  var sql = "INSERT INTO productdb (pname,cost,pinf,quantity,type,url) VALUES ?";
  var values = [
    ['Apple iphone X','89900',
    '12MP wide angle and telephoto primary camera with Dual optical image stabilization and Portrait Mode, Digital zoom up to 10x, Quad-LED True Tone flash and Slow sync,4K video recording at 24 fps or 30 fps or 60 fps and slow-motion video recording in 1080p at 120 fps, 7MP front facing TrueDepth camera with Retina Flash and Animoji feature'
+"\n"+'5.8-inch (diagonal) Super Retina HD Display.'
+"\n"+'All-screen OLED Multi-Touch display with HDR Technology, 2436x1125 -pixel resolution at 458 ppi with 1,000,000:1 contrast ratio (typical), 3D touch with True Tone display'
+"\n"+'iOS 11 and iCloud operating system with A11 Bionic chip with 64-bit architecture and neural engine embeded with M11 motion coprocessor, 64 GB internal memory and single Nano-SIM'
+"\n"+'Non-removable Li-Ion 2712 mAh battery providing talktime up to 21 hours'
+"\n"+'Face ID, Wireless charging, Splash, Water and Dust resistant'
+"\n"+'1 year manufacturer warranty for device and in-box accessories including batteries from the date of purchase. In case phone is Dead on Arrival (DoA), Customer needs to get the same validated from Apple care by arranging a DOA certificate issued within 2 days of the delivery. No other open box returns will be accepted ','100','mobiles','iphonex.jpg'],
    ['Alienware 15 r3', '159999',
    'Processor Brand :Intel'
+"\n"+'Processor :Type  Core i7'
+"\n"+'Processor Speed :2.8 GHz'
+"\n"+'Processor: Count 4'
+"\n"+'RAM Size : 16 GB'
+"\n"+'Computer Memory Type : DDR4 SDRAM'
+"\n"+'Maximum Memory Supported  :32 GB'
+"\n"+'Hard Disk Technology:  Flash Memory Solid State'
+"\n"+'Graphics Coprocessor : GTX 1060'
+"\n"+'Graphics Chipset Brand : NVIDIA'
+"\n"+'Graphics Card Description :Dedicated'
+"\n"+'Graphics Card Ram Size:  6 GB'
+"\n"+'Connectivity Type : killer Wireless 1535'
+"\n"+'Wireless Type: 802.11 A/C'
+"\n"+'Number of USB :3.0 Ports 2'
+"\n"+'Number of HDMI Ports:  1'
+"\n"+'Optical Drive Type  :None'
+"\n"+'Operating System  :Windows 10 '
+"\n"+'Average Battery Life (in hours): 2 Hours'
+"\n"+'Lithium Battery Energy Content : 32 Watt Hours ','25','laptops','alienware.jpg'],
    ['Acer predator 15', '110000',
    'Processor Brand :Intel'
+"\n"+'Processor :Type  Core i7'
+"\n"+'Processor Speed :2.8 GHz'
+"\n"+'Processor: Count 4'
+"\n"+'RAM Size : 16 GB'
+"\n"+'Computer Memory Type : DDR4 SDRAM'
+"\n"+'Maximum Memory Supported  :32 GB'
+"\n"+'Hard Disk Technology:  Flash Memory Solid State'
+"\n"+'Graphics Coprocessor : GTX 1060'
+"\n"+'Graphics Chipset Brand : NVIDIA'
+"\n"+'Graphics Card Description :Dedicated'
+"\n"+'Graphics Card Ram Size:  6 GB'
+"\n"+'Connectivity Type : killer Wireless 1535'
+"\n"+'Wireless Type: 802.11 A/C'
+"\n"+'Number of USB :3.0 Ports 2'
+"\n"+'Number of HDMI Ports:  1'
+"\n"+'Optical Drive Type  :None'
+"\n"+'Operating System  :Windows 10 '
+"\n"+'Average Battery Life (in hours): 2 Hours'
+"\n"+'Lithium Battery Energy Content : 32 Watt Hours ' ,'35','laptops','acerpredator.jpg'],
    ['Air conditioner','30000',
    'This split air conditioner from Samsung cools your home faster and better without a hefty electricity bill. Other than cooling a room, its 3-care filter works to keep the air in your home fresh and free of pollutants. The AC also features a triple protector technology which prevents overload and damage'
+"\n"+'Brand : Samsung'
+"\n"+'Model Name : AR18MC3ULGM'
+"\n"+'Type : Split'
+"\n"+'Capacity in Tons : 1.5 Ton'
+"\n"+'Star Rating : 3'
+"\n"+'Color : Gray Strip'
+"\n"+'Heating : No'
+"\n"+'Cooling Capacity : 5000 W'
+"\n"+'Compressor : Rotary'
+"\n"+'Dehumidification : Yes'
+"\n"+'Remote Control : Yes'
+"\n"+'Anti-bacteria Filter : Yes'
+"\n"+'Dust Filter : Yes'
+"\n"+'Auto Restart : Yes'
+"\n"+'Sleep Mode : Yes'
+"\n"+'Power Requirement : AC 230 V, 50 Hz'
+"\n"+'Power Consumption : 1560 W','15','home appliances','ac.jpg'],
    ['Refrigerator','12899',
    'Boasting a round-top design and innovative features, this Samsung 192 L refrigerator is as sleek as it is efficient. Featuring an inbuilt stabilizer, this direct-cool refrigerator can perform stably even during high voltage fluctuations. The toughened glass shelves of this Samsung fridge are designed to hold weights of up to 150 kg'
+"\n"+'Type : Single Door'
+"\n"+'Refrigerator Type : Top Freezer Refrigerator'
+"\n"+'Defrosting Type : Direct Cool'
+"\n"+'Compressor Type : Normal Compressor'
+"\n"+'Capacity : 192L'
+"\n"+'Number of Doors : 1'
+"\n"+'Toughened Glass : Yes'
+"\n"+'Built-in Stabilizer : Yes'
+"\n"+'Shelf Material : Toughened Glass Shelves'
+"\n"+'Handle Type : Bar Handle'
+"\n"+'Design : Floral Design'
+"\n"+'Door Lock : Yes'
+"\n"+'Water & Ice Dispenser : No'
+"\n"+'Water Dispenser : No'
+"\n"+'Other Convenience Features : Half Guard Right Box, PP - TR Veg Box, Key'
+"\n"+'Number of Refrigerator Shelves : 3','40','home appliances','fridge.jpg'],
    ['Washing machine','16699',
    'Brand : IFB'
+"\n"+'Model Name : TL-RDS/RDSS 6.5 KG AQUA'
+"\n"+'Type : Washing Machine'
+"\n"+'Function Type : Fully Automatic Top Load'
+"\n"+'Washing Capacity : 6.5 kg'
+"\n"+'Washing Method : Triadic Pulsator'
+"\n"+'Maximum Spin Speed : 720 rpm'
+"\n"+'In-built Heater : No' 
+"\n"+'Water Consumption : 104 L'
+"\n"+'Shade : Sparkling Silver'
+"\n"+'Technology Used : 3D Wash System, Aqua Energie','25','home appliances','washmach.jpg'],
    ['Oppo A57','13990',
    'Take your passion for selfies to the next level with the OPPO A57. It comes with a 16 MP flagship-level front camera that features Beautify 4.0 to help you shoot stunning selfies and ‘groupfies’ even in dimly lit conditions. The OPPO A57 also features a 13 MP rear camera with Sony’s Stacked CMOS image sensor, as well as PDAF (phase detection autofocus) technology for beautiful photos. Also, it has a fingerprint reader, giving you fast access to your private data and also keeping it safe from unauthorized access'
+"\n"+'Model Number : CPH1701'
+"\n"+'Model Name : A57'
+"\n"+'Color : Black'    
+"\n"+'Browse Type : Smartphones'
+"\n"+'SIM Type : Dual Sim'
+"\n"+'Touchscreen : Yes'
+"\n"+'OTG Compatible : Yes'
+"\n"+'Display Size : 5.2 inch'
+"\n"+'Resolution : 1280 x 720 Pixels'
+"\n"+'Resolution Type : HD'
+"\n"+'Display Features : Multi-touch, Gorilla Glass 4, Support for Gloved and Wet Touch Input'
+"\n"+'Operating System : Android Marshmallow 6.0'
+"\n"+'Processor Type : Qualcomm Snapdragon 435 Octa Core 1.4GHz'
+"\n"+'Processor Core : Octa Core'
+"\n"+'Primary Clock Speed : 1.4 GHz'
+"\n"+'Operating Frequency : GSM - 850 / 900 / 1800 / 1900 MHz; WCDMA - 850 / 900 / 1900 / 2100 MHz; 4G LTE (FDD) - Bands 1 / 3 / 5 / 7 / 8, LTE (TD) - Bands 38 / 39 / 40 / 41'
+"\n"+'Internal Storage : 32 GB'
+"\n"+'RAM : 3 GB'
+"\n"+'Expandable Storage : 256 GB'
+"\n"+'Call Log Memory : Yes'
+"\n"+'Primary Camera Available : Yes'
+"\n"+'Primary Camera : 13MP'
+"\n"+'Secondary Camera Available : Yes'
+"\n"+'Secondary Camera : 16MP'
+"\n"+'Flash : LED','50','mobiles','oppo.jpg'],
    ['Sandisk 8gb', '400',
    'A very efficcient data transporter ,A pocket friendly memory device for the best price you can get ','1000','accessories','sandisk.jpg'],
    ['Michael kors watch', '3450','A very sleeky watch setting new trends in the hands of youth these days  ','500','accessories','watch.jpg.jpg'],
    ['Moto g5 plus', '13000',
    '13+13MP dual back camera (f/2.0, dual LED flash) and 8MP front facing camera with flash'
+"\n"+'4GB RAM and 64GB internal memory expandable up to 128GB'
+"\n"+'13.97cms (5.5-inch) Full HD (1080 x 1920) capacitive touchscreen with Gorilla Glass 3 protection'
+"\n"+'Dual nano hybrid SIM with dual-standby (4G+4G); Metal body with fingerprint reader'
+"\n"+'Android v7.1 Nougat operating system with 2.0GHz Snapdragon 625 octa-core processor'
+"\n"+'3000mAH Lithium-ion battery with 15W Turbo Charging'
+"\n"+'1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including battery from the date of purchase ','200','mobiles','moto.jpg'],
    ['Oneplus 5', '31999',
    ' The OnePlus 5 is a crazy good phone for crazy good price! The OP5 is a phone for anyone who wants a fast, capable, versatile phone with clean software and some unique features. And with a starting price of Rs 32,999 it makes so much sense. It is an all-rounder that may not have one best-in-class feature but as an overall phone, comes together very well.'
        +"\n"+'20MP+16MP primary dual camera and 16MP front facing camera'
        +"\n"+ '13.97 centimeters (5.5-inch) capacitive touchscreen FHD display with 1920 x 1080 pixels resolution.' 
         +"\n"+'Cover Glass:2.5D Corning Gorilla Glass 5'
         +"\n"+'6 GB RAM, 64 GB internal memory and dual nano SIM dual-standby (4G+4G)'
         +"\n"+'Fingerprint scanner, all-metal unibody and NFC enabled'
         +"\n"+'1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase ','150','mobiles','oneplus.jpg'],
    ['1 tb hard disk', '3999',
    'WD Elements portable hard drives with USB 3.0 offer reliable, high-capacity storage to go, fast data transfer rates, universal connectivity and massive capacity for value-conscious consumers. USB 3.0 and USB 2.0 compatibility – With this single drive you get compatibility with the latest USB 3.0 devices and backward compatibility with USB 2.0 devices as well. Fast transfer rates – When connected to a USB 3.0 port, WD Elements portable hard drive delivers fast data transfer rates.'
+"\n"+'Improve PC performance – When your internal hard drive is almost full your PC slows down. Don’t delete files. Free up space on your internal hard drive by transferring files to your WD Elements portable hard drive and get your laptop moving again.'
+"\n"+'Massive capacity in a small enclosure – The small, lightweight design offers up to 4TB capacity, making WD Elements portable hard drives the ideal companion for consumers on the go.'
+"\n"+'Free trial of WD SmartWare Pro – WD Elements portable hard drives come with a free trial version of WD SmartWare Pro. It allows you to back up your files to your WD Elements drive or to the cloud using your DropBox account.'
+"\n"+'WD quality inside and out – We know your data is important to you. So we build the drive inside to our demanding requirements for durability, shock tolerance, and long-term reliability. Then we protect the drive with a durable enclosure designed for style and protection.'
+"\n"+'Formatted for Windows – Formatted NTFS and compatible with Windows 10, Windows 8.1, Windows 7. Can be reformatted for Mac or other operating systems. ','650','accessories','harddisk.jpg'],
        ['JBL speaker','3500',
      'Party out loud, anytime and anywhere with the JBL Tune mobile speaker. Featuring wireless Bluetooth streaming, this portable speaker lets you groove to your party tracks wherever you are, directly from your mobile or tablet. It’s compact design and built-in FM radio module further add to this Bluetooth speaker’s appeal'
+"\n"+'Type : Mobile/Tablet Speaker'
+"\n"+'Portable : Yes'
+"\n"+'Bluetooth : Yes'
+"\n"+'Memory Card Slot : Yes'
+"\n"+'Power Output : 5 W'
+"\n"+'Frequency Response : 150 Hz to 20 kHz'
+"\n"+'Impedance : 3 ohm'
+"\n"+'Color : Silver'
+"\n"+'Wired/Wireless : Wired & Wireless'
+"\n"+'Built-in Fm Radio : Yes'
+"\n"+'Headphone Jack : Yes'
+"\n"+'Display Type : LED'
+"\n"+'Connector Type : 3.5 mm Audio Jack'
+"\n"+'Battery : Rechargeable Li-ion, Use Time 6 hours'
+"\n"+'Signal to Noise Ratio : 80 dB'
+"\n"+'Other Audio Features : Digital Bass Effect','54','accessories','speaker.jpg'],
    [' memorycard','899',
    'Series : EVO Plus'
+"\n"+'Write Speed : 20 MB/s'
+"\n"+'Durability : 10000 Mating Cycles'
+"\n"+'Security : Water-proof, X-ray Proof, Shock-proof, Magnet-proof'
+"\n"+'Other Features : 4K UHD Recording, Certification: FCC, CE, VCCI, NATA'
+"\n"+'Operating Voltage : 2.7 - 3.6 V V' 
+"\n"+'Maximum Operating Temperature : 85 degree C'
+"\n"+'Minimum Operating Temperature : -25 degree C'
+"\n"+'Maximum Storage Temperature : 85 degree C','45','accessories','memcard.jpg'],
    ['Intex power bank','899',
    'As enabling as a smartphone is, it also needs frequent charge ups for all the hard work it does. This power bank from Intex will help you easily charge up your smartphone on-the-go'
+"\n"+'Suitable Device : Mobile'
+"\n"+'Charging Cable Included : Yes'
+"\n"+'Power Supply : AC 100-240V'
+"\n"+'Output Power : 5V 1A, 5V2A & 5V 2A','100','accessories','powerbank.jpg'],
    ['Headphone','649',
    'Experience great sound quality with these light weight and foldable headphones. Its unique inside-folding design makes it easy to pack and carry, and its long 1.2m cord lets you listen on the go without worries. Elegant colours and a sleek, minimalistic style make sure that your music does not just sound good, but looks great too with its 30mm drivers and wide frequency response, bring your music alive with every note loud and clear'
+"\n"+'Model Name : MDR-ZX110 A'
+"\n"+'Color : White'
+"\n"+'Headphone Type : Over the Ear'
+"\n"+'Foldable/Collapsible : Yes'    
+"\n"+'Deep Bass : No'
+"\n"+'Water Resistant : No'
+"\n"+'Designed For : All mobiles with 3.5 mm jack'
+"\n"+'Connector Plating : Gold Plating'
+"\n"+'Connector Size : 3.5 mm'
+"\n"+'Indicators : No'
+"\n"+'Other Features : Over the Ear, Wired Connectivity, Over the Head, 30 mm Driver Units, 24 ohm Impedance, Supra-aural, 12 Hz - 22000 Hz Headphone Frequency Response'
+"\n"+'Impedance : 24 ohm'
+"\n"+'Cord Length : 1.2 m','220','accessories','headphone.jpg'],

  ];

  con.query(sql, [values], function (err, result) {
    if (err) console.log(err);
    console.log("Number of records inserted: " + result.affectedRows);
  });
 
});