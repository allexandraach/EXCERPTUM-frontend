import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

import { Container } from '../ComponentUtils/BoxComponents/Container';
import { Input } from '../ComponentUtils/InputsComponents/Input';
import { Checkbox } from '../ComponentUtils/InputsComponents/Checkbox';

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
        <Container extraClass="flex justify-center items-center bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/collection-old-newspapers-objects_154730-277.jpg?w=1380')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Helmet>
                <title>Excerptum | SignUp</title>
                <meta name='description' content='Excerptum | SignUp' />
            </Helmet>

            <form className="relative flex w-full md:w-1/2 lg:w-1/3 rounded-md p-8 bg-soft_beige bg-opacity-80 shadow-lg">
                <h1 className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-magenta text-white px-4 py-2 rounded-md shadow-md">
                    <span className="font-serif text-lg">Sign Up</span>
                </h1>

                <div className="flex flex-col w-full my-4 space-y-4">
                    <Input
                        containerClass="w-full"
                        labelClass="pl-3"
                        inputClass="w-full p-3"
                        placeholder="Please enter your name"
                        type="text"
                        name="name"
                        id="name"
                        label="E-mail"
                        validation={{
                            required: 'Field is compulsory', validate: (value) => {
                                if (!/^[0-9]*$/.test(value)) return 'Format invalid. Vă rugăm să introduceți numai cifre';
                            },
                            minLength: {
                                value: 2,
                                message: 'Name is too short'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Name is too long'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        containerClass="w-full"
                        labelClass="pl-3"
                        inputClass="w-full p-3"
                        placeholder="Please enter your username"
                        type="text"
                        name="username"
                        id="username"
                        label="Username"
                        validation={{
                            required: 'Field is compulsory', validate: (value) => {
                                if (!/^[0-9]*$/.test(value)) return 'Format invalid. Vă rugăm să introduceți numai cifre';
                            },
                            minLength: {
                                value: 2,
                                message: 'Name is too short'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Name is too long'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <fieldset>
                        <Input
                            containerClass="w-full"
                            labelClass="pl-3"
                            inputClass="w-full p-3"
                            placeholder="Please enter your password"
                            type="password"
                            name="password"
                            id="password"
                            label="Password"
                            validation={{
                                required: 'Field is compulsory', validate: (value) => {
                                    if (!/^[0-9]*$/.test(value)) return 'Format invalid. Vă rugăm să introduceți numai cifre';
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Password is too short'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Password is too long'
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <Input
                            containerClass="w-full"
                            labelClass="pl-3"
                            inputClass="w-full p-3"
                            placeholder="Please enter your password again"
                            type="password"
                            name="repeat-password"
                            id="repeat-password"
                            label="Repeat password"
                            validation={{
                                required: 'Field is compulsory', validate: (value) => {
                                    if (!/^[0-9]*$/.test(value)) return 'Format invalid. Vă rugăm să introduceți numai cifre';
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Password is too short'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Password is too long'
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                    </fieldset>

                    <fieldset className="mt-4">
                        <Checkbox
                            id="ToS"
                            keyText="ToS"
                            name="ToS"
                            label='I have read and agreed with the'
                            link='/policies/terms-and-conditions'
                            linkText='Terms and Conditions'
                            value={true}
                            validation={{ required: 'Agreeing to our Terms of Service is compulsory' }}
                            register={register}
                            errors={errors}
                        />
                        <Checkbox
                            id="GDPR"
                            keyText="GDPR"
                            name="GDPR"
                            label='I have read and agreed with the'
                            link='/policies/privacy'
                            linkText='Privacy Policy'
                            value={true}
                            validation={{ required: 'Agreeing with our GDPR policy is compulsory' }}
                            register={register}
                            errors={errors}
                        />
                        <Checkbox
                            id="newsletter"
                            keyText="newsletter"
                            name="newsletter"
                            label='I want to subscribe to the newsletter'
                            value={true}
                            register={register}
                            errors={errors}
                        />
                    </fieldset>

                    <input
                        type="submit"
                        value="Register"
                        className="px-4 py-2 w-1/3 text-lg self-center rounded-md text-white bg-magenta hover:bg-dark_magenta transition duration-300 border-dark_magenta shadow-lg cursor-pointer"
                    />
                </div>
            </form>
        </Container>
    )
}

export default SignUp;