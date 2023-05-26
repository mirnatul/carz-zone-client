import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Login = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        // console.log(name, email, password, url);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                // console.log(loggedUser);
                loggedUser.displayName = name;
                loggedUser.photoURL = url;

                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='w-[400px] mx-auto px-10 lg:px-0'>
            <div>
                <h2 className='text-4xl font-bold text-center my-6 text-red-500'>Register</h2>
            </div>
            <form onSubmit={handleRegister}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                </div>
                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='url' placeholder="Enter your photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <button className="btn btn-error">Register</button>
                </div>
            </form>
            <p className='mt-4'>Already have an account? <Link to='/login' className='text-blue-600 underline'> Login here...</Link></p>
            <div className="divider my-6">OR</div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;