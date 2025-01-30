import { Link } from 'react-router-dom';
import './style.css';

function ErrorPage() {
    return (
        <div className="error-page">
            <img className='error-image' src="/assets/images/404.png" alt="Error page" />
            <p className='error-text'>Sahifa topilmadi!</p>
            <Link to='/' className="btn btn-primary btn-lg fw-bold">Bosh sahifa</Link>
        </div>
    )
}

export default ErrorPage
