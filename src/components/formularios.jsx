import React from 'react'
import { useForm } from "react-hook-form"
import '../App.css'

const Formularios = () => {

const {register, handleSubmit} = useForm()



    return (
    <>
        <div>formularios</div>

        <form action="">
            <div className='form-control'>
                <label htmlFor=""></label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control' >
                <label htmlFor="">Country</label>
                <input type="text" {...register('country')} />
            </div>
            <div className='form-control' >
                <label htmlFor="">age</label>
                <input type="Number" {...register('age')} />
            </div>
            <div className='form-control' >
                <label htmlFor="">Address</label>
                <input type="text" {...register('address')} />
            </div>
            <div className='form-control'>
                <label htmlFor="">Shift</label>
                <input type="Number" {...register('shift')} />
            </div>
            <button type='Submit'>Send</button>           
        </form>
            </>
    
    )
}

export default Formularios