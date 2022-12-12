/* eslint linebreak-style: ["error", "windows"] */
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './HotelDetails.css';

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;
  console.log(location);
  return (
    <div className="card_details">
      <div className="card_container_details">
      {/* <div className="card-img-details">
        <img
          className="img-details"
          src={hotel.photo}
          alt={hotel.name}
        />
      </div> */}
      {/* <div className="inside_card_details">
        <h3></h3>
      </div> */}
      {/* <Card style={{ width: '18rem' }}>
        <Card.Header>{hotel.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{hotel.description}</ListGroup.Item>
          <ListGroup.Item>{hotel.price}</ListGroup.Item>
          <ListGroup.Item>{hotel.rating}</ListGroup.Item>
          <ListGroup.Item>{hotel.location}</ListGroup.Item>
        </ListGroup>
      </Card> */}
      <div className="card-img-details">
        <img
          className="img-details"
          src={hotel.photo}
          alt={hotel.name}
        />
      </div>
      <div class="product-details">
		
        <h1>{hotel.name}</h1>
        <div className="star-rating">
          {[...Array(5)].map((star) => {        
            return (         
              <span className="star">&#9733;</span>        
            );
          })}
        </div>
        <p class="information">{hotel.description}</p>
      </div>
      </div>
  </div>
  );
};

export default HotelDetails;
