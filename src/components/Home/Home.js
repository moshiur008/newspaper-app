import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);
    console.log(posts)
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%">
            <Grid container style={{margin:'0'}} spacing={4}>
                {
                    posts.map(post =><Grid sm={3}><Posts post={post}></Posts></Grid>)
                }
                
            </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;