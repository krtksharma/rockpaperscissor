import { useState } from 'react';
import './App.css';
import './RPS.css';
import styled from 'styled-components';


const GameModule = (props) => {
  
  return (
  <>
  <div className='lgo' onClick={() => props.handleClick('Rock')}>
        
        <Logo src='./images/rock.png' alt=''></Logo>
  </div>
  <div className='lgo' onClick={() => props.handleClick("Paper")}>
        <Logo src='./images/paper.png' alt=''></Logo>
  </div>
  <div className='lgo' onClick={() => props.handleClick("Scissors")}>
        <Logo src='./images/scissors.png' alt=''></Logo>
  </div>       
  <Score>
      <h2 >AI = {props.aiwin}</h2>
      <h2 >{props.user} = {props.userwin}</h2>
      <h2>Level = {props.noOfGame}</h2>
     
  </Score>

      </>
      )
    
};


//Styled Components

const Container = styled.div`
margin: auto;
border-radius: 60%;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 500px;
height:400px;
background: white;
font-family:Montserrat;
position:relative;
@media (max-width: 1000px){
  width: 350px;
  height:350px;
}

`;

const Score = styled.div`
    border: 2px black solid;  
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 150px;
    font-size:18px;   
    margin-top: 10px;
    position:absolute;
    top: 50px;
    right: 50px;
    @media (max-width: 1000px){
      width: 100px; 
      top: 50px;
      right: 30px;
      font-size:15px;  
    }

`;
const Logo = styled.img`
width:90px;
height: 90px;
border-radius: 50%;
cursor:pointer;

`;
const NameLabel = styled.span`
display:flex;
flex-direction:row;
align:center;
font-size:25px;
font-weight:bold;
margin:150px 20px 20px 150px;
color:black;
@media (max-width: 1000px){
  font-size:22px;
  margin:110px 20px 20px 90px;
}
`;
const Searchbox = styled.form`
display:flex;
flex-direction:column;
width:250px;
margin:20px auto;
border: solid black 1px;
border-radius:2px;
@media (max-width: 1000px){
       width:200px;
    }
& input{
    padding:10px;
    font-size:18px;
    border:none;
    outline:none;
    ${'' /* font-weight:bold; */}
    @media (max-width: 1000px){
       font-size:15px;
    }
    
}
& button{
    padding:10px;
    font-size:14px;
    border: 2px black solid;
    color:white;
    margin-top:2px;
    background-color:black;
    outline:none;
    font-weight:bold;
    cursor:pointer;
}
`;

//In Game Functions
function Game() {
 
    
  const symbols = ["Rock","Paper","Scissors"];
  const [aiwin,setAiWin] = useState(0);
  const [userwin,setUserWin] = useState(0);
  const [noOfGame,setNoOfGame] = useState(0);
  const [user,setUser] = useState("User")
  const [isGame,setIsGame] = useState(0);
  // const [userchoice,setUserChoice] = useState("");

  function playGame(event){
    setUser(user)
    event.preventDefault();
    setIsGame(1)
  }
  

  function increaseAi(){
    setAiWin(aiwin+1);}
  function increaseUser(){
    setUserWin(userwin+1);
  }
  function increaseGame(){
    setNoOfGame(noOfGame+1);
  }
  function reset(){
    setAiWin(0);
    setUserWin(0);
    setNoOfGame(0);
    setIsGame(0);
    setUser("User");
    alert("New Game Starts");
  } 
 
   function game(opt,random){
    if(noOfGame >= 5)
    {
      alert("More than 5 games are played")
      if(aiwin>userwin)
      {
        alert("Overall Winner Is Computer")
      }
      else if(aiwin === userwin)
            alert(`Game is Tied`)
      else alert(`Overall Winner is ${user}`);
      reset();
    }
    
    else
    {if(symbols[random] === opt)
    {
      alert("tied game")
    }
    else if(symbols[random] === "Rock")
        {
          if(opt === "Scissors")
              {alert("Ai Wins")
            increaseAi()}
          else if(opt === "Paper")
            {alert("User Wins")
              increaseUser();
            }
        }
    else if(symbols[random] === "Scissors")
        {
          if(opt === "Rock")
            {alert("User Wins")
            increaseUser();}
          else if(opt === "Paper")
            {alert("Ai Wins")
            increaseAi();}
        }
    else if(symbols[random] === "Paper")
        {
          if(opt === "Scissors")
            {alert("Ai Wins")
            increaseAi();}
          else if(opt === "Rock")
            {alert("User Wins")
            increaseUser();}
        }
    increaseGame();}
      
  }
  
  
  function handleClick(opt){
    
    let select = opt;
    const random = Math.floor(Math.random() * symbols.length);
    noOfGame <5 && (alert(`Computer Choose = ${symbols[random]}  
    ${user} Choose = ${select}`));
    game(select,random);
    
    
  }

  //Return/Display on main screen
  return (
    <Container>
    <div className="App">
    {isGame ? <GameModule handleClick={handleClick} aiwin={aiwin} userwin={userwin} user={user} noOfGame={noOfGame} /> : 
    <>
    <NameLabel>Enter Your Name</NameLabel>
      <Searchbox onSubmit={playGame}>
      <input  
     type="text" placeholder="User name" onChange={(event) =>setUser(event.target.value)} value={user} >
     </input>
     <button type="submit" value="submit">Submit</button>
      </Searchbox> 
    </>   
     } 
    </div>
    </Container>
  );
}

export default Game;
