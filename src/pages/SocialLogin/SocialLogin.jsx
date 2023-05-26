import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='mb-10'>
            <div onClick={handleGoogleSignIn} className='inline-flex gap-4 btn bg-blue-500 w-full'>
                <FaGoogle className='text-3xl text-blue-800'></FaGoogle>
                Login with google
            </div>
        </div>
    );
};

export default SocialLogin;