import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2'



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset()
                navigate(from, { replace: true })

            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: 'User not Found!!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }

    return (
        <div>
            <div className='w-[400px] mx-auto px-10 lg:px-0'>
                <div>
                    <h2 className='text-4xl font-bold text-center my-8 text-red-500'>Login</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-10">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <button className="btn btn-error">Login</button>
                    </div>
                </form>
                <p className='mt-4'>New to the Carz Zone? <Link to='/register' className='text-blue-600 underline'> Register here...</Link></p>
                <div className="divider my-6">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;