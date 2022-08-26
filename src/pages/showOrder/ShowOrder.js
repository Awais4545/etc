
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../store/OrderSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ShowOrder() {
  const { data, status } = useSelector((state) => state.order)

  const [findData, setFindData] = useState([]);


  const [data1, setData1] = useState([])


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchOrder())
  }, [])










  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">

            <h1 className='mb-4'>Today Order</h1>

          </div>
        </div>


        <div className="row ">


          {
            data.map((cat, i) => {

              return <div className='col-lg-4 col-sm-12 col-md-4  mt-3  '  >
                <div className="card bg-dark text-white" id='styleCard' >
                  <div className="card-body">

                    <div  >
                      <p><b className='text-warning'>Title:</b>  {cat.name}</p>
                      <p><b className='text-warning'>Price:</b>  {cat.price}</p>
                      <p><b className='text-warning' style={{ letterSpacing: 2 }}>Location:</b> {cat.address}</p>







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


export default ShowOrder