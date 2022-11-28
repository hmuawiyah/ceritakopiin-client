import React, {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from "axios"

const angkaUnik = (angka) => {
  let nominal = angka+"";

  let hasilnya
  
  let nol3 = nominal.substring(nominal.length-3) //000
  let nol2 = nominal.substring(nominal.length-2) //00
  let nol1 = nominal.substring(nominal.length-1) //0
  
  let rand =  Math.floor(Math.random() * 9) + 1;
  let rand2 =  Math.floor(Math.random() * 9) + 1;
  let rand3 =  Math.floor(Math.random() * 9) + 1;
  
  (nol3 == '000') ? hasilnya = nominal.substring(0, nominal.length-3) + rand + rand2 + rand3
  : (nol2 == '00') ? hasilnya = nominal.substring(0, nominal.length-2) + rand + rand2
  : (nol1 == '0') ? hasilnya = nominal.substring(0, nominal.length-1) + rand
  : console.log("Anda salah input!")

  return parseInt(hasilnya)
}


const pemisahDigit = (props) => {
  var pisah = props.toString().split(".");
  pisah[0] = pisah[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return pisah.join(",");
}



const Barangnya = (props) => {
  return(

    <div class="card col-4" style={{display: "inline-block"}}>
      <img src={`${props.img}`} class="card-img-top" alt="..." />
      <div class="card-body">

        <h5 class="card-title">{props.brg}</h5>
        <p class="card-text" style={{fontSize: "0.9rem"}}>Rp 18.000</p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder='0' onChange={props.jumlah}/>
        </div>

      </div>
    </div>

    )
}

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

const Modal1 = () => {
  const tanggal = dd+ mm + yyyy+ "";
  const [namalengkap, setNamalengkap] = useState("");
  const [GA, setGA] = useState("");
  const [CB, setCB] = useState("");
  const [RV, setRV] = useState("");
  const [nowa, setNowa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [catatan, setCatatan] = useState("");

  let totalHarga = (GA*18000)+(CB*15000)+(RV*15000)+12000;
  let angkaUnikHarga = angkaUnik(totalHarga)


  const memesan = () => {
    Axios.post("https://ceritakopi-in.herokuapp.com/memesan", {
      tanggal: tanggal,
      namalengkap: namalengkap,
      GA: GA,
      CB: CB,
      RV: RV,
      nowa: nowa,
      alamat: alamat,
      catatan: catatan,
      harga: angkaUnikHarga,
      statuspemesanan: "Menunggu Pembayaran"
    }).then((response) => {
      console.log(response);
    })
  }

  return(
    <section>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Pesan Minuman</button>
            {/* <button type="button" class="btn btn-outline-success"><a class="text-decoration-none text-success" href="https://wa.me/6285811548266">WhatsApp Kami</a></button> */}
            {"  "} <a target="_blank" href="https://wa.me/6285811548266" class="btn btn-outline-success">WhatsApp Kami</a>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Pesan Minuman</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <form>
                    <div class="modal-body">
                    <div class="d-flex justify-content-center">
                        <Barangnya img="1_GA.JPG" brg="Gula Aren" jumlah={(e) => {setGA(e.target.value);}}/>
                        <Barangnya img="2_CB.JPG" brg="Cold Brew" jumlah={(e) => {setCB(e.target.value);}}/>
                        <Barangnya img="3_RV.JPG" brg="Red Velvet" jumlah={(e) => {setRV(e.target.value);}}/>
                        </div>
                          
                          <hr/>
                          
                          <p class="mb-0">Gula Aren {GA}x : {pemisahDigit((GA*18000))}</p>
                          <p class="mb-0">Cold Brew {CB}x : {pemisahDigit((CB*15000))}</p>
                          <p>Red Velvet {RV}x : {pemisahDigit((RV*15000))}</p>
                          <p class="mb-0">Ongkir Kota Bekasi & sekitarnya (flat) 12.000</p> 
                          <p>Kode Unik Transfer Rp {String(angkaUnikHarga).substring(String(angkaUnikHarga).length-3)},-</p>
                          <p>Total harga adalah <span class="fw-semibold">Rp {pemisahDigit(angkaUnikHarga)},-</span></p>

                          <hr/>
                          
                        <div class="mb-3">
                          <label class="col-form-label">Nama Lengkap</label>
                          <input type="text" class="form-control" onChange={(e) => {setNamalengkap(e.target.value);}}  />
                        </div>
                        <div class="mb-3">
                          <label class="col-form-label">No. Whatsapp</label>
                          <input type="text" class="form-control" onChange={(e) => {setNowa(e.target.value);}} />
                        </div>
                        <div class="mb-3">
                          <label class="col-form-label">Alamat</label>
                          <input type="text" class="form-control" onChange={(e) => {setAlamat(e.target.value);}} />
                        </div>
                        <div class="mb-3">
                          <label  class="col-form-label">Catatan Tambahan</label>
                          <input type="text" class="form-control" onChange={(e) => {setCatatan(e.target.value);}} />

                          <hr/>
                        
                        <div>
                          <p class="mb-0">OVO / Dana / Gopay</p>
                          <p class="mb-0">081 318 703 112 a.n. Mohammad Arkan Ridhwan</p>
                          <p class=""></p>
                          <p class="mb-0">Mandiri</p>
                          <p class="">9000 0421 3304 2 a.n. Mohammad Arkan Ridhwan</p>
                        </div>

                          <p>Total harga adalah <span class="fw-semibold">Rp {pemisahDigit(angkaUnikHarga)},-</span></p>

                          <p class="text-muted fst-italic" >*Pastikan pesanan anda benar sebelum mengklik tombol konfirmasi. Informasi selengkapnya kunjungi menu FAQ</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" onClick={memesan} class="btn btn-primary">Konfirmasi Pesanan</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

        </section>
    )
}

export default Modal1