import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

import { Container } from '../../ComponentUtils/BoxComponents/Container';
import { Input } from '../../ComponentUtils/InputsComponents/Input';
import { Checkbox } from '../../ComponentUtils/InputsComponents/Checkbox';

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        mode: 'onChange' // Enables validation as you type
    });

    return (
        <Container extraClass='flex justify-center items-center bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/collection-old-newspapers-objects_154730-277.jpg?w=1380")]'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <Helmet>
                <title>Excerptum | Sign Up</title>
                <meta name='description' content='Excerptum | Sign Up' />
            </Helmet>

            <form className='relative flex w-full p-8 rounded-md shadow-lg md:w-1/2 lg:w-1/3 bg-soft_beige bg-opacity-80'>
                <h1 className='absolute flex items-center px-4 py-2 space-x-2 text-white transform -translate-x-1/2 rounded-md shadow-md -top-4 left-1/2 bg-magenta'>
                    <span className='font-serif text-lg'>Sign Up</span>
                </h1>

                <div className='flex flex-col w-full space-y-4'>
                    <Input
                        containerClass='w-full pb-0'
                        labelClass='pl-3'
                        inputClass='w-full p-3'
                        placeholder='Please enter your e-mail address'
                        type='email'
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
                                value: 6,
                                message: 'E-mail address is too short'
                            },
                            maxLength: {
                                value: 50,
                                message: 'E-mail address is too long'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        containerClass='w-full pb-0'
                        labelClass='pl-3'
                        inputClass='w-full p-3'
                        placeholder='Please enter your username'
                        type='text'
                        name='username'
                        id='username'
                        label='Username'
                        validation={{
                            required: 'Field is compulsory',
                            minLength: {
                                value: 3,
                                message: 'Username is too short'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Username is too long'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <fieldset>
                        <Input
                            containerClass='w-full'
                            labelClass='pl-3'
                            inputClass='w-full p-3'
                            placeholder='Please enter your password'
                            type='password'
                            name='password'
                            id='password'
                            label='Password'
                            validation={{
                                required: 'Field is compulsory',
                                validate: {
                                    passwordStructure: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?':{}|<>])[A-Za-z\d!@#$%^&*(),.?':{}|<>]{6,20}$/.test(value) ||
                                        'Password needs to contain at least one uppercase letter, one lowercase letter, a number and a special character'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password is too short'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Password is too long'
                                }
                            }}
                            register={register}
                            errors={errors}
                            showPasswordClass='top-0 right-2'
                        />
                        <Input
                            containerClass='w-full'
                            labelClass='pl-3'
                            inputClass='w-full p-3'
                            placeholder='Please enter your password again'
                            type='password'
                            name='repeat-password'
                            id='repeat-password'
                            label='Repeat password'
                            validation={{
                                required: 'Field is compulsory', validate: (value) => {
                                    if (watch('password') !== value) {
                                        return 'Passwords do not match';
                                    }
                                },
                            }}
                            register={register}
                            errors={errors}
                            showPasswordClass='top-0 right-2'
                        />
                    </fieldset>

                    <div className='flex justify-center inline'>
                        <p>Already have an account? </p> <Link to='/sign-in' className='ml-2 underline'> Sign in</Link>
                    </div>

                    <fieldset className='mt-4'>
                        <Checkbox
                            id='ToS'
                            keyText='ToS'
                            name='ToS'
                            label='I have read and agreed with the'
                            link='/policies/terms-and-conditions'
                            linkText='Terms and Conditions'
                            value={true}
                            validation={{ required: 'Agreeing to our Terms of Service is compulsory' }}
                            register={register}
                            errors={errors}
                        />
                        <Checkbox
                            id='GDPR'
                            keyText='GDPR'
                            name='GDPR'
                            label='I have read and agreed with the'
                            link='/policies/privacy'
                            linkText='Privacy Policy'
                            value={true}
                            validation={{ required: 'Agreeing with our GDPR policy is compulsory' }}
                            register={register}
                            errors={errors}
                        />
                        <Checkbox
                            id='newsletter'
                            keyText='newsletter'
                            name='newsletter'
                            label='I want to subscribe to the newsletter'
                            value={true}
                            register={register}
                            errors={errors}
                        />
                    </fieldset>

                    <input
                        type='submit'
                        value='Register'
                        className='self-center w-1/3 px-4 py-2 text-lg text-white transition duration-300 rounded-md shadow-lg cursor-pointer bg-magenta hover:bg-dark_magenta border-dark_magenta'
                    />
                </div>
            </form>
        </Container>
    )
}

export default SignUp;