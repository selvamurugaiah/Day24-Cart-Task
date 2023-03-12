
import { Badge, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [count, setCount] = useState(0)
  
  const data = [
    {
    productImage:"https://th.bing.com/th/id/OIP.I2ZnXbGbJn7ZfcjFgVBICwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Iphone 14 pro max",
    price:"$200.00 - $500.00",
    rating:"⭐⭐⭐⭐⭐"
   
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.4ZZcNFdO8UWAXH9hIyZcTAHaEU?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Samsung Galaxy s22",
    price:"$30-$200",
    rating:"⭐⭐⭐⭐⭐",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.yzu_DuNVskMsFbb98-3xSAHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Google pixel",
    price:"$100-$200",
    rating:"⭐⭐⭐⭐"
  
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.3U5kL-4QPX4aoCWY-OChFQHaFe?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"One plus",
    price:"$75-$250",
    rating:"⭐⭐⭐⭐",
  },
  {
    productImage:"https://th.bing.com/th?q=Redmi+Note+7+Pro+Caracteristicas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    productName:"Redmi note 12 pro",
    price:"$90-$150",
    rating:"⭐⭐⭐"
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.VfV3VbE0urmJQ1HImQk4oAHaFI?w=238&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Vivo v25",
    price:"$50-$120",
    rating:"⭐⭐⭐⭐"
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.AbU5vjKcjPQrptXFr5_d1AHaIg?w=169&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Sony Xperia 10",
    price:"$80-$120",
    rating:"⭐⭐⭐⭐",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.a9qDEtC967v_9-JNkYs5rAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Samsung Galaxy s23 ultra",
    price:"$200-$300",
    rating:"⭐⭐⭐⭐",
  }
];
  return (
    <div className='App'>
     <div className=''>
     <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/prod.productName">
                All products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Popular item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='template'>
      
      
    </div>

      </div>
      <div className='cart-value'>
      <Badge bg="success">
        🛒Cart {count}
      </Badge>
      </div>
      <div className='background'>
      <Badge bg="success">
         For sale
      </Badge>
      </div>
    <div className='card-container'>
     {data.map((prod,idx)=> <Cards
      idx = {idx}
      prod={prod}
      count={count}
      setCount={setCount}/>      
)}
     
   </div>  
  </div>
);
  
}

export default App;

function Cards ({prod,idx,count,setCount}){{/* props also use in this place  */}
  const [show , setshow] = useState(false)/*initial value give it inside the usestate */

  function addToCart (){
    setshow(!show)
    setCount(count+1)
  }
  function removeFromCart(){
    setshow(!show)
    setCount(count-1)
  }
  return(
 
    <Card className='card-data' key = {idx} style={{ width: '18rem' }}>
<Card.Img variant="top" className='size' src={prod.productImage} />
<Card.Body>
  <Card.Title>{prod.productName}</Card.Title>{/*props need to add if props keyword inside function */}
  <Card.Text>{prod.price}</Card.Text>{/*props.prod.price use like that */}
  <Card.Text>{prod.rating}</Card.Text>
  {!show ?<Button variant="primary" 
  onClick={addToCart}>Buy Now</Button> : ""}{/*onClick={()=>setshow(!show)} */}

  {/*condition rendering */}
 
  {show ? <Button variant="danger" 
  onClick={removeFromCart}>remove now</Button> : ""}{/*tenery operator*/}
</Card.Body>
</Card>

  
  
  )

}
