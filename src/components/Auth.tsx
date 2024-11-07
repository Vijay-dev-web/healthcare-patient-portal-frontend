import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='bg-blue-600 text-white text-right p-2'>
            <Link className='bg-green-600 text-white py-1 px-2' to="/login">Login</Link>
        </div>
    );
};

export default Auth;