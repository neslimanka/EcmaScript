

var selamFonksiyonu=function selam(){

    console.log("merhaba");
 }

 var helloBeybi= function beybi(){
     console.log("beybiliçikilop");
 }

 const selamFonksiyonu2= () => {
     console.log("merhaba 2");
     console.log("birşey");
 }
 const selamFonksiyonu3= (mesaj) => {
     console.log(mesaj);
 }

 const selamFonksiyonu4 = (mesaj,mesaj2) =>{
     console.log(mesaj,mesaj2)
 }

selamFonksiyonu();
helloBeybi();
selamFonksiyonu2();
selamFonksiyonu3("merhaba Dünyalı");
selamFonksiyonu4("hello","beybito");

var topla= (sayi1,sayi2) =>{
    return sayi1+sayi2;
}
 let toplam=topla(4,11);
 console.log(toplam);