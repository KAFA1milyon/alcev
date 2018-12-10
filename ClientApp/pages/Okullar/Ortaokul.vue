<template>
    <div class="schools-page ortaokul">
        <div class="school-header">
            <div class="container"><span class="offset-3">Alçev</span></div>
        </div>
        <div class="school-subheader">
            <div class="container"><span class="offset-3">Ortaokulu</span></div>
        </div>
        <div class="school-headerlink">
            <div class="container">
                <span class="offset-3 school-nav-link">
                    <a href="#">Eğitim <br>Standartlarımız</a>
                    <a href="#">Ölçme <br>Değerlendirme</a>
                    <a href="#">Etkinliklerimiz</a>
                    <a href="#">Rehberlik</a>
                    <a href="#">Yabancı <br>Dil</a>
                    <a href="#">LGS Sınava <br>Hazırlık</a>
                    <a href="#">Etüt <br>Çalışmaları</a>
                    <a href="#">Haftasonu <br>Kurslarımız</a>
                    <a href="#">Robotik Spor <br>Müzik ve Resim</a>
                </span>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="school-nav">
                        <img class="box-bg img-fluid school-logo" src="/images/background-blank-close-up-998591.jpg" alt="anaokulu" />
                        <nav class="school-menu">
                            <router-link class="router-link" to="/ortaokul">Sınıflarımız</router-link>
                            <router-link class="router-link" to="/ortaokul/hocalar">Öğretmen Kadromuz</router-link>
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
