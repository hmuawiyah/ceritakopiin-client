import React , { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

const AdminView = () => {
    const [hasilData, setHasilData] = useState([]);

    const updateStatusPesanan = (id, newStatusPesanan) => {
        Axios.put("https://ceritakopi-in.herokuapp.com/update", 
        { newStatusPesanan: newStatusPesanan, id: id }).then(
        (res) => { alert("berhasil diupdate, silakan refresh") 
        window.location.reload()
        }
        )}
    
    const hapusData = (id) => {
        Axios.delete(`https://ceritakopi-in.herokuapp.com/delete/${id}`).then(
        (res) => { alert("berhasil dihapus, silakan refresh") 
        window.location.reload()
        }
        )}
        
    useEffect(() => {
        Axios.get("https://ceritakopi-in.herokuapp.com/data")
        .then(res => { 
        setHasilData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])    

        const Listnya = (props) => {
            return(
                
                <tr>
                <th scope="row">{props.id}.</th>
                <td>{props.tanggal}</td>
                <td>{props.namalengkap}</td>
                <td>{props.GA}</td>
                <td>{props.CB}</td>
                <td>{props.RV}</td>
                <td>{props.nowa}</td>
                <td>{props.alamat}</td>
                <td>{props.catatan}</td>
                <td>{props.harga}</td>
                <td>
                    <p class="fw-semibold">{props.statuspesanan}</p>

                    <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" type="button" value="Menunggu Pembayaran" onClick={(e)=>{updateStatusPesanan(props.id, e.target.value)}}>25%</button>
                        <button class="btn btn-outline-secondary" type="button" value="Diproses" onClick={(e)=>{updateStatusPesanan(props.id, e.target.value)}}>50%</button>
                        <button class="btn btn-outline-secondary" type="button" value="Dikirim" onClick={(e)=>{updateStatusPesanan(props.id, e.target.value)}}>75%</button>
                        <button class="btn btn-outline-secondary" type="button" value="Selesai" onClick={(e)=>{updateStatusPesanan(props.id, e.target.value)}}>100%</button>
                    </div>
                </td>
                <td>
                    <button class="btn btn-outline-danger" type="button" onClick={()=>{hapusData(props.id)}}> X </button>
                </td>
            </tr>
        )
    }
    
    
    return (
        <div class="row justify-content-start align-items-start mb-5 mnew">
            <div class="col-12">
                <h1>Admin View! </h1>

                <h6 class="lead">Menunggu Pembayaran (25%) ➡ Diproses (50%) ➡ Dikirim (75%) ➡ Selesai (100%)</h6>

                <table class="table table-hover table-responsive table-sm ">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Gula Aren</th>
                    <th scope="col">Cold Brew</th>
                    <th scope="col">Red Velvet</th>
                    <th scope="col">No WhatsApp</th>
                    <th scope="col" style={{width:'8%'}}>Alamat</th>
                    <th scope="col" style={{width:'8%'}}>Catatan</th>
                    <th scope="col">Harga</th>
                    <th scope="col" style={{width:'24%'}}>Status Pesanan</th>
                    <th scope="col">hapus</th>
                    </tr>
                </thead>
                <tbody>
                    {hasilData.map(isinyaini => (

                    <Listnya 
                    id={isinyaini.id}
                    tanggal={isinyaini.tanggal}
                    namalengkap={isinyaini.namalengkap}
                    GA={isinyaini.GA}
                    CB={isinyaini.CB}
                    RV={isinyaini.RV}
                    nowa={isinyaini.nowa}
                    alamat={isinyaini.alamat}
                    catatan={isinyaini.catatan}
                    harga={"Rp "+isinyaini.harga}
                    statuspesanan={isinyaini.statuspesanan}
                    />
                    ))}
                </tbody>
                </table>

            </div>
        </div>
        )
}

export default AdminView
