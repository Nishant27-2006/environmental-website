import { useNavigate } from 'react-router-dom';

export const goToAbout = () => {
  const navigate = useNavigate();
  navigate('/about');
};

export const goToCO2Estimate = () => {
  const navigate = useNavigate();
  navigate('/co2-estimate');
};