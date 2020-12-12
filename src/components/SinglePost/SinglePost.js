import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';


const SinglePost = () => {

    const {postId} = useParams();
    const [post, setPost] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts?id=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    const [comments, setComments] = useState([]);
    useEffect(()=>{
        let url =  `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    let [image, setImage] = useState([]);
    useEffect(()=>{
        let url = `https://jsonplaceholder.typicode.com/photos?albumId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data))
    }, []);

    let singleImages = image.map(img => img.thumbnailUrl);

    let title = post.map(post => post.title);
    let body = post.map(post => post.body);
    let count = 1;
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid style={{marginTop:'20px'}} item xs={12}>
                    <Paper>
                    <Card>
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
                    </Card>
                    </Paper>
                    </Grid>
                </Grid>
                </Container>
                <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid style={{marginTop:'20px'}} item xs={12}>
                    <Paper>
                    <Card>
                    <CardActionArea>
                        <CardContent>
                            <h2>Comments</h2>
                            {
                                comments.map(comment => <div style={{border:'1px solid green', margin:'20px', padding:'20px'}}><p><img style={{width:'50px'}} src={singleImages[comment.id]} alt=""/></p><h3>{count}. {comment.name} {count++}</h3><p>{comment.body}</p></div>)
                            }
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Paper>
                    </Grid>
                </Grid>
                </Container>
            </React.Fragment>
                
        </div>
    );
};

export default SinglePost;