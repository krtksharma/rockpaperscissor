import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 400px;
height:300px;
background: white;
font-family:Montserrat;
img{
    width:200px;
    height:200px;
}

`;
const AppLabel = styled.span`
font-size:25px;
font-family: Georgia, serif;
${'' /* font-weight:bold; */}
color:black;
`;



export const FrontPage = () => {
    const navigate = useNavigate();
  return(
    <Container>
       <AppLabel>Rock Paper Scissor</AppLabel>
       <img src="./images/rps.jpeg" alt='' ></img>
       <Button variant="contained" endIcon={<VideogameAssetIcon />} onClick={() =>{navigate("/Games")}} >Play Game</Button>
       
    </Container>
  )
};
