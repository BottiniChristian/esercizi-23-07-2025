import { Alert } from 'react-bootstrap';

const Welcome = () => (
  <Alert variant="success" className="text-center mt-4 welcome-alert">
    <h2>Benvenuto su EpiBooks!</h2>
    <p>Scopri migliaia di libri direttamente dal nostro store digitale 📚</p>
  </Alert>
);

export default Welcome;
