import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import '../styling/books.css'

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "20%",
    backgroundColor: "grey",
    flexDirection: "column",
    height: "100%",
    borderRadius : 6
  },
  content : {
    display : 'flex',
    flex:1,
    flexDirection :'column',
    alignItems : 'flex-start',
    padding : '2%'
  },
  image: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 150,
    padding : 60
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    width: 34
  },
  pos: {
    padding : 6,
    fontSize : 13,
    width : '100%'

  }
});

export default function Books() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className = "bookContainer">
    <Card className={classes.root}>
      <div >
        < div>
          <Card className={classes.image} >
            <Typography>
              Hi
            </Typography>
          </Card>
        </div>
        <div className = {classes.content}>
          <div>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        </div>
        <div>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        </div>
        <div>
        <Typography className={classes.pos} color="textSecondary">
          Rs 445
        </Typography>
        </div>
        </div>
      </div>
      <div className = "cardbutton">
        <Card raised={true} >
          <Typography className={classes.pos} color="textSecondary">
            Add to Cart
          </Typography>
        </Card>

        <Card  raised={true}>
          <Typography className={classes.pos} color="textSecondary">
            Wishlist
          </Typography>
        </Card>
      </div>
    </Card>
    </div>
  );
}
