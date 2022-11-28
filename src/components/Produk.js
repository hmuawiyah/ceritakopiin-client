import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap'

const Produk = (props) => {
    return (
        <div class=" col-6 col-lg-4 mb-5 g-3">
          <Card className="shadow">
           <Card.Img src={`${props.gmbr}`}/>
           <Card.Body>
            <Card.Title> {props.nama} </Card.Title>
            <Card.Text>{props.harga}</Card.Text>
            <Card.Text>
              {props.isi}
            </Card.Text>
            {/* <Button variant = "primary"> Read More </Button> */}
           </Card.Body>
          </Card>
        </div>
            
    )
}

export default Produk