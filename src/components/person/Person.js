import React from 'react';

import { Toast } from 'react-toastify';

const Person = ({ key, fullname, deletPerson, changed }) => {

    return (


        <div className='card text-white bg-info mb-3 mt-3 w-25 py-3 mx-auto' >
            <div className='car-body text-center'>
                <p className='mt-2 mb-1'> I am {`${fullname} `} </p>
                <div className='input-group justify-content-center'>
                    <input type="text" className="form-control w-50 text-dark" placeholder={fullname} onChange={changed}/>
                    {/* <div className='input-group-prepend'> */}
                        <button className='btn btn-sm btn-danger ' onClick={deletPerson} ><i class="fas fa-trash-alt"></i></button>
                    {/* </div> */}

                </div>
            </div>

        </div>
    );
}

export default Person;