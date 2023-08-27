import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../providers/AuthProvider';
import { Card, Image } from 'react-bootstrap';
const NewsCard = ({newsItem}) => {
  const {_id, author, title, image_url, details, rating, total_view} = newsItem;
  const {user} = useContext(userContext)
  return (
    <Card className="mb-4">
    <Card.Header className='d-flex justify-content-between align-items-center' style={{background:'#F3F3F3'}}>
        <div className='d-flex align-items-center'>
        <Image style={{width:'50px', height:'50px', marginRight:'10px'}} src={author.img} roundedCircle />
        <div>
            <b>{author.name}</b>
            <p>{author.published_date}</p>
        </div>
        </div>
        <div>
            <span style={{marginRight:'10px'}}> <FaRegBookmark></FaRegBookmark> </span>
            <span> <FaShareAlt></FaShareAlt> </span>
        </div>
    </Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Img className='mb-4 mt-2' variant="top" src={image_url} />
      <Card.Text>
       {details.length > 250 ? <span>{details.slice(0, 250)} <span> <Link to={`/news-details/${_id}`} style={{color:'#FF8C47', fontWeight:'500'}}>...Read More</Link> </span> </span> : <span>{details}</span>}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted d-flex justify-content-between">
    <div className='d-flex align-items-center'>
    <Rating style={{ maxWidth: 100 }} value={Math.round(rating.number)} />
    <span>{rating.number}</span>
    </div>
    <div>
        <span className='me-1 fs-4'> <FaEye></FaEye> </span>
        <span>{total_view}</span>
    </div>
    </Card.Footer>
  </Card>
  )
}

export default NewsCard