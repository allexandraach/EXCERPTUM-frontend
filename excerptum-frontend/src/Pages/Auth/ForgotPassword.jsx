import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
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
        <Container extraClass="flex justify-center pt-0 items-center  bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/collection-old-newspapers-objects_154730-277.jpg?w=1380')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Helmet>
                <title>Excerptum | Forgot Password</title>
                <meta name='description' content='Excerptum | Forgot Password' />
            </Helmet>

            <form className="relative flex sm:flex-grow md:flex-none md:w-1/2 lg:w-1/3 rounded-md p-8 bg-soft_beige bg-opacity-80 shadow-lg">
                <h1 className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-magenta text-white px-4 py-2 rounded-md shadow-md">
                    <span className="font-serif text-lg">Forgot Password</span>
                </h1>

                <div className="flex flex-col flex-grow space-y-4">
                    <Input
                        containerClass="w-full pb-0"
                        labelClass="pl-3"
                        inputClass="w-full p-3"
                        placeholder="Please enter your email"
                        type="text"
                        name="email"
                        id="email"
                        label="E-mail"
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
                        type="submit"
                        value="Send recovery link"
                        className="px-4 py-2 w-2/5 text-lg self-center rounded-md text-white bg-magenta hover:bg-dark_magenta transition duration-300 border-dark_magenta shadow-lg cursor-pointer"
                    />
                </div>
            </form>
        </Container>
    )
}

export default ForgotPassword;