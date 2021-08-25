import React from 'react';

import InputForm from '../../components/input-form/input-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../firebase/firebase.utils';

import './signin.styles.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passWord: ''
        }
    }


    handleChange = e => {
        const {value, name} = e.target();

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h3>Iniciar sesión</h3>
                <p>Inicia sesión con tu red social:</p>
                <div className='button-line'>
                    <button onClick={signInWithFacebook}>
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
                <form>
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
                        value={this.state.passWord}
                        required
                        handleChange={this.handleChange}
                    />

                    <div bottom-button>
                        <CustomButton>
                            ENVIAR
                        </CustomButton>

                        <CustomButton 
                            type='button' 
                            onClick={null}
                            inverse
                        >
                            CREAR UNA NUEVA CUENTA
                        </CustomButton>
                    </div>

                    


                </form>
            </div>
        )
    }
}

export default SignIn;