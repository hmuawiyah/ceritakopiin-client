import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const teks1 = "Cerita untuk sebuah mahakarya cita rasa kopi terbaik."
const teks2 = "Mari lebih dekat"; 
const teks3 = "Cita rasa 3 variasi coffee dan non coffee spesial untuk milenial";

const Home = (props) => {
    return (
        <div>
            <div class="row mnew"></div>
            <div class="row justify-content-between align-items-center mnew">
                <div class="col-8 fbaru-0 "> <h6 class="pnew display-6" >{teks1} {teks2} <span class="fw-semibold fst-italic">#KawanCerita</span></h6></div>
                <div class="col-4 "> <img src="logo-ck.jpg" class="img-responsive w75 float-end" /> </div>
            </div>

            <hr class="mnew"/>

            <div class="row justify-content-between align-items-center mnew">
                <div class="col-4 "> <img src="produk.png" class="img-responsive w75" /> </div>
                <div class="col-7 text-end"> <h6 class="display-6  pnew display-6" > {teks3} </h6>
                    <br /><Link to="/Produk" type="button" class="btn btn-primary"> Selengkapnya... </Link>
                </div>
            </div>

            <hr class="mnew"/>

            <div class="row justify-content-start align-items-center mnew">
                <div class="col-sm-7 ">
                <h6 class="display-6 pnew display-6" > Frequently Asked Question hadir untuk mencapai pelayanan maksimal dalam memudahkan </h6>
                <br /><Link to="/Faq" type="button" class="btn btn-primary"> Selengkapnya... </Link>
                </div>
            </div>

            <hr class="mnew"/>

        </div>
        )
    }
    
export default Home