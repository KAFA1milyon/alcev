<template>
    <div class="modal fade modal-fullscreen-menu header-menu-modal" id="modalNavigation" role="dialog" tabindex="-1" aria-hidden="true">
        <button class="close" data-dismiss="modal" type="button">
            <span>X</span>
        </button>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="school-heading">
                                <div class="logo"></div>
                                <div class="name white">
                                    Özel Altınoluk Çağdaş Eğitim Vakfı <br>
                                    İlköğretim Kurumları
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 m-t-40">
                            <div class="row m-t-40">
                                <div class="col-4">
                                    <div class="nav flex-column" id="tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link active" id="alcev-tab" data-toggle="pill" href="#alcev" role="tab" aria-controls="alcev" aria-selected="true">ALÇEV</a>
                                        <a class="nav-link" id="okul-tab" data-toggle="pill" href="#okul" role="tab" aria-controls="okul" aria-selected="false">OKULDA YAŞAM</a>
                                        <a class="nav-link" id="hakkinda-tab" data-toggle="pill" href="#hakkinda" role="tab" aria-controls="hakkinda" aria-selected="false">HAKKINDA</a>
                                        <a class="nav-link" id="duyuru-tab" data-toggle="pill" href="#duyuru" role="tab" aria-controls="duyuru" aria-selected="false">DUYURULAR</a>
                                        <a class="nav-link" id="etkinlik-tab" data-toggle="pill" href="#etkinlik" role="tab" aria-controls="etkinlik" aria-selected="false">ETKİNLİKLER</a>
                                        <a class="nav-link" id="klupler-tab" data-toggle="pill" href="#klupler" role="tab" aria-controls="klupler" aria-selected="false">KULÜPLER</a>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="tab-content" id="tabContent">
                                        <div class="tab-pane fade show active" id="alcev" role="tabpanel" aria-labelledby="alcev-tab">
                                            <router-link class="router-link" data-dismiss="modal" to="/ataturkun-hayati">Atatürk Köşesi</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/alcev-kurucu-uyeleri">ALÇEV Kurucu Üyeleri</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/misyon-ve-vizyonumuz">Misyon ve Vizyonumuz</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/vakif-baskaninin-mesaji">Vakıf Başkanın Mesajı</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/vakif-baskani-ozgecmisi">Vakıf Başkanın Özgeçmişi</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/vakif-tarihce">Vakıf Tarihçe</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/yonetim-kurulu">Yönetim Kurulu</router-link>
                                        </div>
                                        <div class="tab-pane fade" id="okul" role="tabpanel" aria-labelledby="okul-tab">
                                            <router-link class="router-link" data-dismiss="modal" to="/akademik-takvim">Akademik Takvim</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/anaokulu">Anasınıfı</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/beslenme-dostu-okul-projesi">Beslenme Dostu Okul Projesi</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/eko-okullar-projesi">Eko Okulları Projesi</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/bilisim-ve-teknoloji">Bilişim ve Teknoloji</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/e-bulten">E-Bülten</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/rehberlik-ve-danismanlik">Rehberlik ve Danışmanlık</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/okul-kiyafetleri">Okul Kıyafetleri</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/kutuphane">Kütüphane</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/sanat-ve-spor">Sanat ve Spor</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/ulasim-imkanlari">Ulaşım İmkanları</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/AlcevEtut">ALÇEV' de Etüt</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/verimli-ders-calisma">Verimli Ders Çalışma</router-link>
                                        </div>
                                        <div class="tab-pane fade" id="hakkinda" role="tabpanel" aria-labelledby="hakkinda-tab">
                                            <router-link class="router-link" data-dismiss="modal" to="/ogretmenler">Eğitim Öğretim Kadrosu</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/okul-mudur">Müdür</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/okul-mudur-yardimcilari">Müdür Yardımcıları</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/personel-kadrosu">Personel Kadrosu</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/okul-aile-birligi">Okul Aile Birliği</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/fiziki-yapi">Fiziki Yapı</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/egitim-modeli">Eğitim Modeli</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/akademik-program">Akademik Program</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/hizmet-standartlarimiz">Hizmet Standartlarımız</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/idari-yapi">İdari Yapı</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/okul-tarihce">Tarihçe</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/mezunlarimiz">Mezunlarımız</router-link>
                                        </div>
                                        <div class="tab-pane fade" id="duyuru" role="tabpanel" aria-labelledby="duyuru-tab">

                                        </div>
                                        <div class="tab-pane fade" id="etkinlik" role="tabpanel" aria-labelledby="etkinlik-tab">

                                        </div>
                                        <div class="tab-pane fade" id="klupler" role="tabpanel" aria-labelledby="klupler-tab">
                                            <router-link class="router-link" data-dismiss="modal" to="/">Türkçe Tiyatro</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Fotoğrafçılık</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Müzik Kulübü</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">İngilizce Tiyatro</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Görsel Sanatlar</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Voleybol</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Basketbol</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Halk Oyunları</router-link>
                                            <router-link class="router-link" data-dismiss="modal" to="/">Bilim Kulübü</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 m-t-40">
                            <h4>İLETİŞİM</h4>
                            <ol>
                                <li>
                                    <i class="icon icon-pinned"></i>
                                    <p>Şahindere Mah. Lise Cad. No: 13 Altınoluk/Edremit/Balıkesir</p>
                                </li>
                                <li>
                                    <i class="icon icon-telefon"></i>
                                    <p>0 (266) 396 90 11</p>
                                </li>
                                <li>
                                    <i class="icon icon-eposta"></i>
                                    <p>info@alcev.k12.tr</p>
                                </li>
                            </ol>
                            <br>
                            <!--
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Adınız</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="İsminiz">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Eposta Adresiniz</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Eposta">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Konu</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Konu">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">İletiniz</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="button one-whole primary-action">Submit</button>
                            </form>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
