import React from 'react';

import InputForm from '../../components/input-form/input-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';


class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        const perfil = document.getElementById('tipoPerfil').value;

        console.log("Tipo perfil: ")

        console.log(perfil);

        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, perfil, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            console.log("Usuario creado correctamente");
            
        } catch (error) {
            console.error(error);
            
        }

    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        })
    } 

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>No tengo una cuenta</h2>
                <span>Crear una cuenta nueva</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <InputForm
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Nombre'
                        required
                    />
                    <InputForm
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Correo electrónico'
                        required
                    />
                    <InputForm
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Contraseña'
                        required
                    />
                    <InputForm
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirmar contraseña'
                        required
                    />
                    <label>Selecciona un perfil: </label>
                    <select name='tipoPerfil' id='tipoPerfil'>
                        <option value='usuario'>Usuario</option>
                        <option value='club'>Club</option>
                        <option value='profesor'>Profesor</option>
                    </select>


                    <CustomButton type='submit'>REGISTRARSE</CustomButton>

                    
                </form>
            </div>
        )
    }
}

export default SignUp;