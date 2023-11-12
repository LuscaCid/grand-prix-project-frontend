import styled from 'styled-components'
export const Container = styled.div`
*{

padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;

}

:root{

font-size: 62.5%;

}

body{

font-size: 1.6rem;
display: flex;

}

button{

cursor: pointer;

}

menu{

background: #1756a5;
width: 5rem;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
padding-top: 2rem;

}

menu a img{

width: 3rem;
height: 3rem;

}

nav{

display: flex;
justify-content: space-between;
align-items: center;
width: 95vw;
margin: 1rem;

}

nav button{

border: none;
background: none;

}

#buscar img{

width: 3rem;
height: 3rem;

}

#perfil img{

width: 4rem;
border-radius: 50%;
border: 2px solid #3cbca4;

}

.nav-dir{

display: flex;
gap: 2rem;

}

.icons{

width: fit-content;
display: flex;
gap: 2rem;
align-items: center;

}

.icons a{

display: flex;
flex-direction: column;
align-items: center;
color: black;
text-decoration: none;
line-height: rem;

}

.icons a img{

width: 2rem;
height: 2rem;

}

.corpo-pag{

height: 56.6rem;
display: flex;
flex-direction: column;

background: url(../img/back-enfermagem.jpg) no-repeat;
background-size: cover;
background-position: center;
filter: brightness(.8);

}

/*Bot*/

#jojo{

position: fixed;
border: none;
border-radius: 50%;
bottom: 3rem;
right: 3rem;
width: fit-content;
height: 5rem;

cursor: pointer;

}

#jojo img{

width: 5rem;
height: 5rem;
border-radius: 50%;

}

/*Fora da pagina*/

h1{

font-size: 4rem;
margin: 1rem auto;
color: purple;

}

table{

border: 1px solid purple;
margin: 5rem auto 0;

width: fit-content;
backdrop-filter: brightness(.8);

}

table td{

border: 1px solid purple;
padding: 2rem;

}

table a{

text-decoration: none;
color: red;


}

.adc-mais{

width: fit-content;
margin: auto;
margin-top: 1rem;

}

#add{

display: flex;
flex-direction: column;
align-items: center;

text-decoration: none;
color: blue;

transition: all 200ms;
}

#add img{

width: 5rem;
margin-top: 1rem;

}

#add:hover{

transform: scale(1.1);

}
`
