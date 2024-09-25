const fs = require ('node:fs');

fs.writeFile('Biodata.txt',"hello, perkenalkan nama saya Muhammad al vikri, saya sekolah diSMKN 15 KOTA BEKASI, saya tinggal di JL Bawang 6 RT 03/RW 09 saya berusia 17 tahun",
    function(error) {
        if(error){
            console.error('Terjadi Error', error);
        } else {
            console.log('File berhasil dibuat')
        }
    }
);