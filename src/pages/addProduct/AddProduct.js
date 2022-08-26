import React from 'react'
import { useState } from 'react';
import axios from "axios"

export default function AddProduct() {

    const [name, setName] = useState("");
    const [des, setDes] = useState("");

    const [price, setPrice] = useState("");

    const [image, setImage] = useState("");











    const ProductAdd = async (name, des, price, image) => {


        const formData = new FormData()
        formData.append('name', name)
        formData.append('des', des)
        formData.append('price', price)
        formData.append('image', image)

        const baseUrl = process.env.REACT_APP_BASEURL
        await axios.post(`${baseUrl}/products/createProduct`, formData).then((result2, err) => {
            console.log(result2);
            alert("Product Create Successfully")
            if (err) {
                console.log(err);
            }
        }


        ).catch(err => { console.log(err); })
    }






    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4 col-md-4 ">
                    </div>
                    <div className="col-sm-12 col-lg-4 col-md-4  text-center">

                        <div className="mt-5 mb-3">
                            <input type="text" value={name} className="form-control" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Description" value={des} onChange={(e) => setDes(e.target.value)} />
                        </div> <div className="mb-3">
                            <input type="number" className="form-control" placeholder='Enter a Price' onChange={(e) => setPrice(e.target.value)} />

                        </div>
                        <div className="mb-3">
                            <input type="file" className="form-control" name='image' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <button className="btn btn-warning mt-3 " onClick={() => ProductAdd(name, des, price, image)}>Add Product</button>




                    </div>

                    <div className="col-sm-12 col-lg-4 col-md-4 ">
                    </div>

                </div>




                {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" value={des} onChange={(e) => setDes(e.target.value)} />
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} /> */}


            </div>
        </div>






    )
}
