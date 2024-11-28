import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="text-gray-100 transition-colors cursor-pointer">
      <span className="text-accent-green">Logo </span>
      <span className='text-accent'>SuperGolubika</span>
    </Link>
  );
}
