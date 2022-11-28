import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap'

const Tentang = (props) => {
    return (
    <div class="row justify-content-center align-items-start mb-5 mnew">
        <h1>Tentang kami </h1>

        <div class="mt-3">
            
            <div class="col-12 col-sm-8">
                <h4 class="display-6"> Sejarah </h4>
                <p style={{textAlign: 'justify'}}>Cerita kopi pertama kali didirikan oleh 
                dua orang pemuda pada November 2020 di Bekasi. Kegemaran akan kopi dan 
                latar belakang mereka sebagai mahasiswa membuat mereka sepakat mendirikan 
                cerita kopi. Nama cerita kopi sendiri diambil dari keinginan mereka untuk 
                membagikan cerita dan sejarah dari produk yang dijual. Kepuasan pelanggan 
                adalah inspirasi kami dalam meracik minuman kami. Kami hanya menggunakan 
                bahan-bahan berkualitas dan takaran yang sempurna dalam setiap racikannya. </p>
            </div>

            <div class="col-12 col-sm-8 mt-3">
                <h4 class="display-6"> Tujuan </h4>
                <p style={{textAlign: 'justify'}}>Cerita kopi memiliki 3 tujuana utama, 
                membagikan cerita dan sejarah dari minuman yang kami produksi, memberikan 
                pelayanan maksimal kepada para pelanggan kami, dan menyajikan minuman yang 
                memiliki ciri khas dalam rasa dan aroma. Kami selalu berdedikasi dalam 
                setiap pembuatan produk kami dengan pengetahuan dan pengalaman yang kami 
                dapatkan setiap hari nya. Kami juga berharap cerita kopi dapat menjadi 
                wadah bagi para pecinta kopi untuk saling berinteraksi dan berdiskusi bersama. </p>
            </div>

        </div>

    </div>
    )
}

export default Tentang