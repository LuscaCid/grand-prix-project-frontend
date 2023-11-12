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

height: calc(100vh - 9.4rem);
display: flex;
flex-direction: column;
backdrop-filter: brightness(.8);
background: linear-gradient(cyan, rgb(40, 88, 104));

display: flex;
align-items: center;
justify-content: center;

overflow-y: scroll;

}

/*Central*/

h1{

font-size: 2.5rem;
margin-bottom: 1rem;

}

iframe{

border-radius: .8rem;

}

.descricao{

width: 56rem;
margin-top: 2rem;
}

.descricao span{

font-weight: bold;

}

.info-aula{

position: absolute;
top: 5rem;
left: 2rem;
width: 20rem;
}

.info-aula span{

font-weight: bold;

}
`