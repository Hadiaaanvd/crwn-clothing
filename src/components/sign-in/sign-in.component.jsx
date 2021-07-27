import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" onChange={this.handleChange} label="email" value={this.state.email} name="email" id="email" />
                    <FormInput type="password"  onChange={this.handleChange} label="password" value={this.state.password} name="password" id="password" />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn = {true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn;