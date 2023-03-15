import { useState } from "react"
import { Card } from "react-bootstrap"
import Button from "./button"

export function Cards ({prod,idx,count,setCount}){{/* props also use in this place  */}
  const [show , setshow] = useState(false)/*initial value give it inside the usestate */

  function addToCart (){
    setshow(!show)
    setCount(count+1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  function removeFromCart(){
    setshow(!show)
    setCount(count-1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return(
 
    <Card className='card-data' style={{ width: '18rem' }}>

{prod.productName === "Samsung Galaxy s22" ||prod.productName  === "Google pixel" ||
prod.productName ==="Redmi note 12 pro" ||prod.productName ==="Sony Xperia 10"?
                        <div className="badge bg-dark text-white position-absolute" 
                        style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> :
                        " "}
<Card.Img variant="top" className='size' src={prod.productImage} />
<Card.Body>
  <Card.Title>{prod.productName}</Card.Title>{/*props need to add if props keyword inside function */}
  <Card.Text>{prod.price}</Card.Text>{/*props.prod.price use like that */}
  <Card.Text>{prod.rating}</Card.Text>

  {!show ? <Button
  name="Add Cart"
  bgClr="lightskyblue"
  onClick={addToCart}
  /> : ""}
  {/*  {!show ?<Button variant="primary" 
  onClick={addToCart}>Buy Now</Button> : ""}
  

  {show ? <Button variant="danger" 
  onClick={removeFromCart}>remove now</Button> : ""}
  */}

{show ? <Button
 name="Remove Cart"
 bgClr="crimson"
 clr="white"
 onClick={removeFromCart}
/> : ""}
 {/*onClick={()=>setshow(!show)} */}

  {/*condition rendering */}
 
  {/*tenery operator*/}
</Card.Body>
</Card>

  
  
  )

}