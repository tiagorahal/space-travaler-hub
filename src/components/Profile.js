import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import MissionsProfile from './missionprofile';

const Profile = (props) => {
  const { rockets } = props;
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <Container>
      <Row>
        <Col>
          <div className="missions-column">
            <h2>My Missions</h2>
            <MissionsProfile />
          </div>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <Table bordered>
            <tbody>
              {activeRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Profile;
