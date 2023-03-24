import React from 'react'
import { useForm } from "react-hook-form"
import '../App.css'
import isEmail from 'validator/lib/isEmail';
import ReCAPTCHA from "react-google-recaptcha";


const Formularios = () => {
    

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    

    const customSubmit = (data) => {
        console.log(data)

    }
    return (
        

            <form onSubmit={handleSubmit(customSubmit)} className='from-react'>

                <div className='form-control'>
                    <label>Nick</label>
                    <input type="text" {...register('name', {
                        required: true,
                        maxLength: 9
                    })} />
                    {errors.name?.type === 'required' && <small className='fail'>Complete this field</small>}
                    {errors.name?.type === 'maxLength' && <small className='fail'>Only 9 characters</small>}
                </div>

                <div className='form-control' >
                    <label htmlFor="">age</label>
                    <input type="Number" {...register('age', {
                        required: true,
                        min: 18,
                        max: 89
                    })} />
                    {errors.age?.type === 'required' && <small className='fail'>Complete this field</small>}
                    {errors.age?.type === 'min' && <small className='fail'>Minimum age 18 years</small>}
                    {errors.age?.type === 'max' && <small className='fail'>Maximum age 89 years</small>}
                </div>

                <div className='form-control' >
                    <label htmlFor="">Email</label>
                    <input type="text" {...register('email', {
                        required: true,
                        validate: isEmail
                    })

                    } />
                    {errors.email?.type === 'required' && <small className='fail'> complete this field</small>}
                    {errors.email?.type === 'validate' && <small className='fail'> email not valid</small>}
                </div>
                    <ReCAPTCHA 
                        
                        sitekey="6LdhnyclAAAAAHgv3sL_08JmSD8k1qHk7R33KJzS" 
                        onChange={onChange}
                    />;

                <button type='Submit'>Send</button>
            </form>
    

    )
}
//picker, capcha, separar componentes del form en componentes hijos, pais provincia localidad (combos desplegables con apis )

export default Formularios