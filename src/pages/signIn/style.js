import styled from 'styled-components'

export const Container= styled.div`
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

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background: #1756a5;

}

.login{

    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 2rem;
    border-radius: .8rem;

    width: 30rem;

}

.login input, button{

    width: fit-content;

}

h1{

    margin-bottom: 1rem;

    font-weight: bold;
    font-size: 3rem;

}

img{

    width: 7rem;

}

.input-wrapper{

    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    width: 26rem;

}

.input-wrapper label{

    font-weight: bold;

}

.input-wrapper input{

    border-radius: .8rem;
    padding: .5rem;

    border: 1px solid black;

    width: 100%;

}

input:focus{

    border: orangered 1px solid;

}

.cadastro{

    width: 100%;
    margin-top: .4rem;

}

a{

    text-decoration: none;
    font-size: 1.4rem;
    
}

button{

    border: none;
    border-radius: .8rem;
    padding: .3rem;
    margin-top: 2rem;
    width: 100%;
    
    
    background-color: #1756a5;
    color: white;

    font-weight: bold;
    
}


`
