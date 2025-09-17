import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';

import { Container } from '../../ComponentUtils/BoxComponents/Container';
import { Input } from '../../ComponentUtils/InputsComponents/Input';

const ForgotPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        mode: 'onChange' // Enables validation as you type
    });

    return (
        <Container extraClass='flex justify-center pt-0 items-center bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/collection-old-newspapers-objects_154730-277.jpg?w=1380")]'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <Helmet>
                <title>Excerptum | Forgot Password</title>
                <meta name='description' content='Excerptum | Forgot Password' />
            </Helmet>

            <form className='relative flex p-8 rounded-md shadow-lg sm:flex-grow md:flex-none md:w-1/2 lg:w-1/3 bg-soft_beige bg-opacity-80'>
                <h1 className='absolute flex items-center px-4 py-2 space-x-2 text-white transform -translate-x-1/2 rounded-md shadow-md -top-4 left-1/2 bg-magenta'>
                    <span className='font-serif text-lg'>Forgot Password</span>
                </h1>

                <div className='flex flex-col flex-grow space-y-4'>
                    <Input
                        containerClass='w-full pb-0'
                        labelClass='pl-3'
                        inputClass='w-full p-3'
                        placeholder='Please enter your email'
                        type='text'
                        name='email'
                        id='email'
                        label='E-mail'
                        validation={{
                            required: 'Field is compulsory',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'E-mail address is not valid'
                            },
                            minLength: {
                                value: 2,
                                message: 'E-mail address is too short'
                            },
                            maxLength: {
                                value: 50,
                                message: 'E-mail address is too long'
                            }
                        }}
                        register={register}
                        errors={errors}
                        showPasswordClass='top-3 right-2'
                    />

                    <input
                        type='submit'
                        value='Send recovery link'
                        className='self-center w-2/5 px-4 py-2 text-lg text-white transition duration-300 rounded-md shadow-lg cursor-pointer bg-magenta hover:bg-dark_magenta border-dark_magenta'
                    />
                </div>
            </form>
        </Container>
    )
}

export default ForgotPassword;