import { Component, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/models/accoutdionItemModel';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  accordions: AccordionItem[] = [
    new AccordionItem("Hakkımızda", `<p>Sektörde 60 Yıllık tecrübesiyle İnşaat , Orman Ürünleri İmalat ve Satışı ile Şahıs Şirketi olarak faaliyete
          başlayan, 2000’li yıllarda Limited Şirketi olarak faaliyete devam eden firmamız şu an ki Unvanıyla DÜLGER
          AĞAÇ SANAYİ AŞ olarak kurumsallaşma adına emin adımlarla ilerlemektedir.</p>
      <p> Gelişen günümüz koşullarına ayak uyduran Dülger Ailesi, Plywood üretimine yönelmiş ve 2013 yılında
          Çankırı’da Organize Sanayi Bölgesi’nde 33.000 M2.lik alanda Plywood üretimine başlamıştır.</p>
      <p> Ülkemize katma değer sağlamak, kaliteli ve güvenilir üretim ile ülkemiz ekonomisine katkıda bulunmak
          üzere var gücümüzle çalışarak yeni yatırımlar planlamaktayız.</p>
      <p> 2016 Yılı itibariyle üretim kapasitemiz ikiye katlanmış olup, 8.188 M3 olan Plywood üretim kapasitemiz,
        16.400 M3’e çıkarılmıştır.</p>
          <p> Bunun yanı sıra üretimimizde kullanmak üzere yurt dışından ithal ettiğimiz yarı mamulleri(Papel), 2016
          yılı itibariyle 26.400 M3 kapasite ile kendi bünyemizde üretmeye başladık.</p>
`),
    new AccordionItem("Misyonumuz", `<p>Müşterilerimizin İhtiyaç ve Beklentilerini Karşılayan,</p>
      <p>Performans ve Güvenlik Standartlarına Uygun ,</p>
      <p>Çevrecilik ve Estetik Anlayışına Duyarlı Üretim Yapmak,</p>
      <p>Ve bunu takım ruhu ile donanımlı ,eğitimli kadromuzla geliştirmek firmamızın temel politikasıdır</p>
`),
    new AccordionItem("Vizyonumuz", `<p>Türkiye Piyasasındaki Mevcut Konumumuzu Hızla Geliştirerek , Uluslararası Platformda Aranan ve Tercih Edilen Bir Marka Konumuna Taşımayı Hedeflemekteyiz.</p>
`)
  ];

  expandedIndex = 0;


  constructor() { }

  ngOnInit(): void {

  }

}
