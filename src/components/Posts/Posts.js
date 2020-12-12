import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:'20px',
      marginTop:'15px'
    },
  });


const Posts = (props) => {
    const classes = useStyles();

    const {title, body, id} = props.post;
    let history = useHistory();

    function handleButtonClick(postId) {
        const url = `/post/${postId}`
        history.push(url);
      }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleButtonClick(id)}size="small" color="primary">
                Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Posts;