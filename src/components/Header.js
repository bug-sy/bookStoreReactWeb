import React from "react";
import clsx from "clsx";
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import '../styling/Header.css'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection : 'row',
  },
  exceptCart : {
    width : '85%',
    display : 'flex',
    flexDirection : 'row',
  },
  segragationContent : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent  : 'space-between'
  },
  addCart: {
    display: "flex",
    width: '15%',
    flexDirection: "row",
  justifyContent : 'flex-end'
  },
  nameCart : {
marginLeft : '3%'
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Header() {
  const classes = useStyles();
  const [open] = React.useState(false);



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={ classes.appBar }
        color = 'secondary'
      >
        <Toolbar className = { classes.segragationContent }>
        <div className = { classes.exceptCart }>
            <Toolbar>
              <div >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            //onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuBookIcon />
          </IconButton>
          </div>
          <div >
            <Toolbar>
          <Typography variant = "h6" noWrap>
            BookStore
          </Typography>
          
           <Card className = "searchBar" elevation = { 3 } >
           <InputBase
        className={classes.input}
        placeholder="Search the books ....."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
          </Card>
          
          </Toolbar>
          </div>
          </Toolbar>
        </div>
          <div className={classes.addCart}>
          
            <div >
              <Typography style = {{fontSize : 18}}>Cart</Typography>
            </div>
            <div className = { classes.nameCart }>
              <AddShoppingCartIcon />
            </div>
            
          </div>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}
