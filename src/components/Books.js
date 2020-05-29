import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import '../styling/books.css'
import { MEALS } from '../dummydata/DummyData';


export default function Books() {


  const availableMeals = MEALS

  return (
    <div className = "bookContainer">
    <Card className= "mainCard" style = {{ backgroundColor : 'pink'}}  >
      <div >
        
          <Card >
          
          <img 
      src = { availableMeals[0].imageUrl }
      alt = "new"
      style ={{ backgroundColor : "blue" }}
      className = "image"
      />
            
          </Card>
        
        <div className = "content">
          
          <div className = "bookTitle" > {'Anthony hoopkins'} </div>
       
        <div className = "textStyle">
        
         {'adjective'} 
      
        </div>
        <div className = "textStyle">
        
        {'Rs 445'}
        
        </div>
        </div>
      </div>
      <div className = "cardbutton">
        <Card raised={true} >
          <div className = "pos" onClick = { () => console.log(availableMeals[0].imageUrl) } >
            {'Add to Cart'}
          </div>
        </Card>

        <Card  raised={true}>
          <div className = "pos" >
            {'Wishlist'}
          </div>
        </Card>
      </div>
    </Card>
    </div>
  );
}
