import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import '../styling/books.css'


export default function Books() {


  return (
    <div className = "bookContainer">
    <Card className= "mainCard" style = {{ backgroundColor : 'pink'}}  >
      <div >
        
          <Card >
          < div className = "image" >
            <Typography >
              Hi
            </Typography>
            </div>
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
          <div className = "pos" >
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
