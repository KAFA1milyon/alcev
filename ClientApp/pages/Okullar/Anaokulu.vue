<template>
    <div class="schools-page anaokul">
        <div class="school-header">
            <div class="container"><span class="offset-3">Alçev</span></div>
        </div>
        <div class="school-subheader">
            <div class="container"><span class="offset-3">Anaokulu</span></div>
        </div>
        <div class="school-headerlink">
            <div class="container">
                <span class="offset-3 school-nav-link">
                    <a href="/anaokulu/Hakkinda">Anaokulumuz <br>Hakkında</a>
                    <a href="/anaokulu/EgitimModeli">Eğitim <br>Modelimiz</a>
                    <a href="/anaokulu/Rehberlik">Rehberlik</a>
                    <a href="/anaokulu/ingilizce">İngilizce</a>
                    <a href="#">Haftalık Öğrenme <br>Takvimi</a>
                    <a href="#">Ders <br>Programı</a>
                    <a href="#">Etkinlik <br>Takvimi</a>
                    <a href="#">Galeri</a>
                </span>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="school-nav">
                        <img class="box-bg img-fluid school-logo" src="/images/adolescence-adorable-baby-1089069.jpg" alt="anaokulu" />
                        <nav class="school-menu">
                            <router-link class="router-link" to="/anaokulu">Sınıflarımız</router-link>
                            <router-link class="router-link" to="/anaokulu/hocalar">Öğretmen Kadromuz</router-link>
                        </nav>
                    </div>
                </div>
                <div class="col-9">
                    <div class="school-content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

