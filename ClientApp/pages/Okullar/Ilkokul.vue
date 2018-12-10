<template>
    <div class="schools-page ilkokul">
        <div class="school-header">
            <div class="container"><span class="offset-3">Alçev</span></div>
        </div>
        <div class="school-subheader">
            <div class="container"><span class="offset-3">İlkokulu</span></div>
        </div>
        <div class="school-headerlink">
            <div class="container">
                <span class="offset-3 school-nav-link">
                    <a href="#">Eğitim <br>Standartlarımız</a>
                    <a href="#">Etkinliklerimiz</a>
                    <a href="#">Rehberlik</a>
                    <a href="#">Yabancı <br>Dil</a>
                    <a href="#">Haftasonu <br>Kurslarımız</a>
                    <a href="#">Robotik Spor <br>Müzik ve Resim</a>
                </span>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="school-nav">
                        <img class="box-bg img-fluid school-logo" src="/images/art-artistic-arts-and-crafts-1153895.jpg" alt="anaokulu" />
                        <nav class="school-menu">
                            <router-link class="router-link" to="/ilkokul">Sınıflarımız</router-link>
                            <router-link class="router-link" to="/ilkokul/hocalar">Öğretmen Kadromuz</router-link>
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
