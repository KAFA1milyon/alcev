
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                İletişim
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > İletişim
            </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.171786760804!2d26.742411904214137!3d39.57083899517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b096816a17f1a1%3A0x972642c63944ac97!2zw5Z6ZWwgQWx0xLFub2x1ayDDh2HEn2RhxZ8gRcSfaXRpbSBWYWtmxLEgRcSfaXRpbSBLdXJ1bWxhcsSx!5e0!3m2!1str!2str!4v1537218997089" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        
        <div class="contact-container">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <h3>İLETİŞİM FORMU</h3>
                        <br>
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
                    </div>
                    <div class="offset-md-1 col-12 col-md-5">
                        <h3>İLETİŞİM</h3>
                        <br>
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
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
    
<script>
</script>

<style lang="scss" scoped>
    .contact-container {
        padding-top: 30px;

        h3 {
            font-weight: 500;
            color: #535252;
        }

        ol {
            list-style: none;
            font-weight: 300;

            > li {
                display: inline-block;
                width: 100%;
                margin-bottom: .5em;

                .icon {
                    display: inline-block;
                    position: relative;
                    top: 5px;
                    width: 20px;
                    text-align: center;
                    vertical-align: top;
                }

                > p {
                    display: inline-block;
                    width: calc(100% - (20% - 10px));
                    margin-left: 10px;
                    margin-bottom: 0;
                }
            }
        }
    }
</style>