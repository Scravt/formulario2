import React from 'react'
import { useForm } from "react-hook-form"
import '../App.css'

const Formularios = () => {

const {register, handleSubmit, formState: {errors}, watch } = useForm()


const customSubmit = (data) => {
    console.log(data)

}
    return (
    <>
        <div>formularios</div>

        <form onSubmit={handleSubmit(customSubmit)} className='from-react'>

            <div className='form-control'>
                <label>Nick</label>
                <input type="text" {...register('name', {
                    required:true,
                    maxLength:9})} />
                {errors.name?.type === 'required' && <small className='fail'> complete this field</small> }
                {errors.name?.type === 'maxLength' && <small className='fail'> only 9 characters</small> }
            </div>

            <div className='form-control' >
                <label htmlFor="">age</label>
                <input type="Number" {...register('age',{
                    required:true,
                    min: 18, 
                    max:89 })} />
                {errors.age?.type === 'required' && <small className='fail'> complete this field</small> }
                {errors.age?.type === 'min' && <small className='fail'> minimum age 10 years</small> }
                {errors.age?.type === 'max' && <small className='fail'> maximum age 89 years</small> }
            </div>

            <div className='form-control' >
                <label htmlFor="">email</label>
                <input type="text" {...register('email',{
                    required:true,
                    pattern:/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i}) } />
                {errors.email?.type === 'required' && <small className='fail'> complete this field</small> }
                {errors.email?.type === 'pattern' && <small className='fail'> email not valid</small> }
            </div>

            <button type='Submit'>Send</button>           
        </form>
    </>
    
    )
}

export default Formularios