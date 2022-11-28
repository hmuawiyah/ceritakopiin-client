import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap'
import Produk from './Produk'
import Modal1 from './Modal1'

const teks_ga = "Kombinasi rasa yang sempurna antara creamy, manis, dan pahit.";
const teks_cb = "Hal terbaik tentang kopi ialah rasa yang jelas, kuat, dan menyegarkan.";
const teks_rv = "Non coffee dengan warna maroonnya yang memberikan kesan crunchy.";

const Produk2 = (props) => {
    return (            
    <div class="row justify-content-start align-items-start mb-5 mnew">
        
        <Produk nama="Gula Aren" isi={`${teks_ga}`} gmbr="1_GA.JPG" harga="Rp 18.000"/>
        <Produk nama="Cold Brew" isi={`${teks_cb}`} gmbr="2_CB.JPG" harga="Rp 15.000"/>
        <Produk nama="Red Velvet" isi={`${teks_rv}`} gmbr="3_RV.JPG" harga="Rp 15.000"/>

        <Modal1 /> 
    </div>
    )
}

export default Produk2
