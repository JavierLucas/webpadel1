import React from 'react';

import InputForm from '../../components/input-form/input-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, signInWithFacebook, signInWithTwitter, auth } from '../../firebase/firebase.utils';

import './signin.styles.scss';
import { Link } from 'react-router-dom';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = e => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email:'',
                password: ''
            });

            console.log("Iniciar sesión correctamente")

            
        } catch (error) {
            console.log(error);
            
        }


    }

    render(){
        return(
            <div className='sign-in'>
                <h3>Iniciar sesión</h3>
                <p>Inicia sesión con tu red social:</p>
                <div className='button-line'>
                    <button 
                        onClick={signInWithFacebook} 
                        style={
                            {
                                backgroundImage: "url('file://../../assets/facebook.png') center no-repeat",
                                backgroundSize:'100% 100%'
                            }
                        }
                    >
                        Facebook                        
                    </button>
                    <button onClick={signInWithGoogle}>
                        Google
                    </button>
                    <button onClick={signInWithTwitter}>
                        Twitter
                    </button>
                </div>

                <p>O hazlo con tu email y contraseña:</p>
                <form onSubmit={this.handleSubmit}>
                    <InputForm
                        name='email'
                        type='email'
                        label='Correo electrónico'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                
                    <InputForm
                        name='password'
                        type='password'
                        label='Contraseña'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />

                    <div bottom-button>
                        <CustomButton>
                            ENVIAR
                        </CustomButton>

                        <Link to='/signup'>
                            <CustomButton 
                                type='button' 
                                onClick={null}
                                inverse
                            >
                                CREAR UNA NUEVA CUENTA
                            </CustomButton>
                        </Link>
                        
                    </div>

                    


                </form>
            </div>
        )
    }
}

export default SignIn;