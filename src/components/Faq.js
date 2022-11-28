import React, {useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import Axios from "axios"

const pemisahDigit = (props) => {
    var pisah = props.toString().split(".");
    pisah[0] = pisah[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return pisah.join(",");
  }

const Listnya = (props) => {
    return(
        <tr>
            <td>{props.tanggal}</td>
            <td>{props.namalengkap}</td>
            <td>{props.harga}</td>
            <td>{props.statuspesanan}</td>
        </tr>
    )
}

const Isinya = (props) => {
    return(
        <div>
            <div class="mt-3"></div>
                <p>Q: {props.q}</p>
                <p class="fst-italic">A: {props.a}</p>

                <hr class="mt-3 mb-3"/>
        </div>
    )
}

const Faq = () => {
    
    const [cariData, setCariData] = useState([]);
    const [tanggal, setTanggal] = useState("")
    const [show, setShow] = useState(false)

    useEffect(()=>{ !tanggal ? setShow(false) : setShow (true)}, [tanggal])
    
    useEffect(() => {
        Axios.get("https://ceritakopi-in.herokuapp.com/data")
        .then(res => { 
            setCariData(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])    

    return (
        <div class="row justify-content-start align-items-start mb-5 mnew">
            <div class="col-sm-6">        

                <h1>Frequently Asked Question! </h1>
                
                <hr />
                <Isinya q="Bagimana cara saya memesan?" a="Silakan kunjungi laman kami lalu masuk ke menu Produk, pesanan akan dikirim dari Kota Bekasi"/>
                <Isinya q="Apakah saya bisa memesan sementara saya berada diluar Kota Bekasi?" a="Tentu bisa selama masih sekitar Kota Bekasi dan terjangkau tidak lebih dari 12km dari Kota Bekasi"/>
                <Isinya q="Bagaimana cara saya tahu pesanan diproses?" a="Pesanan akan diproses jika sudah dibayarkan, selanjutnya akan dikirim"/>  
                <Isinya q="Apakah saya dapat dine-in/makan di tempat?" a="Saat ini kami hanya menerima pesanan secara daring dan belum menyediakan sarana makan di tempat"/>  
                <Isinya q="Bagaimana jika produk yang diterima rusak?" a="#KawanCerita dapat mengirimkan struk pembayaran dan bukti foto saat penerimaan barang"/>
                <Isinya q="Saya ingin mengganti pesanan apakah bisa?" a="Jika #KawanCerita ingin mengganti pesanan maka cukup memesan ulang, pesanan yang sudah ditransfer tidak dapat dibatalkan"/>
                <br />
                <p class="text-muted fst-italic">Butuh bantuan?</p>
                <a target="_blank" href="https://wa.me/6285811548266" class="btn btn-outline-success mb-5">WhatsApp Kami</a>

            </div>

            <div class="col-sm-6">
                <h1>Cek pesananmu disini! </h1>

                <div>
                    <p class="mb-0">OVO / Dana / Gopay</p>
                    <p class="mb-0">081 318 703 112 a.n. Mohammad Arkan Ridhwan</p>
                    <p class=""></p>
                    <p class="mb-0">Mandiri</p>
                    <p class="">9000 0421 3304 2 a.n. Mohammad Arkan Ridhwan</p>
                </div>
                <hr class="mb-3"/>

                <div class="d-flex justify-content-center">
                    <p class="mb-0">Menunggu Pembayaran ➡ Diproses ➡ Dikirim ➡ Selesai</p>
                </div>

                <hr />
                <form>
                    <input type="text" class="form-control col-5" 
                    placeholder='ddmmyyyy...'
                    onChange={(e) => {setTanggal(e.target.value)}}/>
                    <p class="fst-italic text-muted" >masukkan tgl (ddmmyyyy) cth 17082022...</p>
                </form>
                <hr/>
            
            {show ? (

                <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Status Pesanan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tanggal == "bukahalamanadmin" ? (<Link to="/AdminView" type="button" class="btn btn-primary"> Buka Halaman Admin </Link>) : 

                        cariData.map(isinyaini => (
                        tanggal == isinyaini.tanggal ?
                        <Listnya 
                        tanggal={isinyaini.tanggal}
                        namalengkap={isinyaini.namalengkap.substring(0, 3)+"***"+isinyaini.namalengkap.substring(isinyaini.namalengkap.length-2)}
                        harga={"Rp "+pemisahDigit(isinyaini.harga)}
                        statuspesanan={isinyaini.statuspesanan}
                        />
                        : ""
                        
                    ))}
                </tbody>
                </table>
            ) : ( "" ) }
            </div>
        </div>
        )
}

export default Faq