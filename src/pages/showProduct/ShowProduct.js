
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/ProductSlice.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ShowProduct() {
    const { data, status } = useSelector((state) => state.product)

    const [findData, setFindData] = useState([]);
    const [data1, setData1] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])


    const deleteData = async (id) => {

        try {
            const baseURL = process.env.REACT_APP_BASEURL;

            await axios.delete(`${baseURL}/products/deleteProduct/${id}`)

            const newProduct = data.filter((newPro) => {
                return newPro.id != id
            },


            )
            setData1(newProduct)



            alert("AD DELETE DONE")
        } catch (error) {
            console.log(error);
        }

    }








    return (
        <div>
            <div className="container">


                <div className="row ">

                    {
                        data.map((cat, i) => {

                            return <div className='col-lg-4 col-sm-12 col-md-4  mt-3  '  >
                                <div className="card" id='styleCard' >
                                    <div className="card-body">

                                        <div  >
                                            <p><b>Title:</b>  {cat.name}</p>
                                            <p><b>Price:</b>  {cat.price}</p>
                                            <button className='btn btn-danger' onClick={() => deleteData(cat._id)}>Delete</button>





                                        </div>




                                    </div>

                                </div>
                            </div>


                        })
                    }


                </div>


            </div>


        </div>





    )
}


export default ShowProduct




