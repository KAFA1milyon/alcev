<template>
    <div class="about-box">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="box">
                    <div class="box-icon">
                        <i class="icon icon-emc"></i>
                    </div>
                    <div class="box-title">Eğitim Öğretim Kadromuz</div>

                    <div class="box-content">
                        Kendi alanlarında uzman ve deneyimli eğitim öğretim kadromuzla  başarıyı hedefliyor ve canla başla çalışıyoruz.
                    </div>

                    <div class="box-button">
                        <router-link class="router-link button secondary-action" to="/ogretmenler">Öğretmenlerimiz</router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="box">
                    <div class="box-icon">
                        <i class="icon icon-kutuphane"></i>
                    </div>

                    <div class="box-title">Kütüphanemiz</div>

                    <div class="box-content">
                        Kitap z 2062’ye yükselterek öğrencilerimize kitap sevgisi aşıladık.
                    </div>

                    <div class="box-button">
                        <a href="#" class="button secondary-action">Kitap Listemiz</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="box">
                    <div class="box-icon">
                        <i class="icon icon-sertifika"></i>
                    </div>

                    <div class="box-title">Başarı ve Sertifikalarımız</div>

                    <div class="box-content">
                        Geçtiğimiz yıllarda “Sağlıklı Okul, Temiz Okul” kampanyası ve “Beyaz Bayrak” projelerinde ödüllendirildik.
                    </div>

                    <div class="box-button">
                        <a href="#" class="button secondary-action">Detaylar</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="box">
                    <div class="box-icon">
                        <i class="icon icon-ogrenci"></i>
                    </div>

                    <div class="box-title">Mezunlarımız</div>

                    <div class="box-content">
                        20 yılı aşkın süredir eğitim öğretim sürecimizde 300’den fazla mezun verdik.
                    </div>

                    <div class="box-button">
                        <a href="#" class="button secondary-action">Mezunların Gözünden</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .about-box {
        .box {
            @include display-flex();
            @include flex-wrap(wrap);
            @include flex-direction(column);
            @include align-items(center);
            position: relative;
            flex: 1;
            padding: 20px 20px 60px;
            background: rgba(255,255,255,0.97);
            border: 1px solid #EFEFEF;
            box-shadow: 0 12px 20px 0 rgba(0,0,0,0.12);
            border-radius: 4px;
            
            &:last-child {
                margin: 0;
            }

            &-icon {
                font-size: 60px;
            }

            &-title {
                margin-bottom: 20px;
                font-size: 18px;
                color: #535252;
                font-weight: 600;
            }

            &-content {
                min-height: 90px;
            }

            &-button {
                position: absolute;
                bottom: -20px;
            }
        }
    }
</style>