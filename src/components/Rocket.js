import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { reserveRocketAction, cancelRocketAction } from '../redux/rockets/rockets';
import Button from './Button';
import Badge from './Badge';

const Rocket = ({
  id, name, description, image, reserved,
}) => (
  <Container>
    <div className="row mb-5 rocket-cont">
      <div className="col-md-12">
        <div className="d-flex align-items-start">
          <div className="col-md-">
            <img src={image} alt={name} width="250" height="250" />
          </div>
          <div className="ms-3">
            <h4 className="text-dark">{name}</h4>
            <p className="text-secondary text-start text-wrap rocket-desc">
              {reserved && (
              <Badge text="Reserved" />
              )}
              {description}
            </p>
            {!reserved && (
            <Button text="Reserve Rocket" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-primary" />
            )}
            {reserved && (
            <Button text="Cancel Rerservation" click={() => cancelRocketAction(id)} id={id} buttonClass="btn btn-outline-secondary" />
            )}
          </div>
        </div>
      </div>
    </div>

  </Container>

);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
