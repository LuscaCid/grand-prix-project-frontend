import styled from 'styled-components'

export const Container = styled.div`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{

    font-size: 62.5%;

}

body *{

    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;

}

body{

    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #1756a5;

}

main{

    width: 55rem;
    height: 40rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .8rem;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   
    position: relative;

}

h1{

    position: absolute;
    top: 2rem;
    font-size: 2rem;
}

a{

    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;

}

p{

    font-weight: bold;
    font-size: 3rem;
    margin: 3rem;

}

button{

    display: flex;
    flex-direction: column;
    border-radius: .8rem;
    height: 30rem;
    width: 20rem;

    align-items: center;
    justify-content: center;
    border: none;

    background: orangered;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    cursor: pointer;

    transition: all 200ms ;

}

button:hover{

    transform: scale(1.1);

}

button a img{

    border-radius: 50%;
    width: 10rem;
    margin-bottom: 10rem;
    background: lightblue;

}

button a span{

    font-weight: bold;

}
`