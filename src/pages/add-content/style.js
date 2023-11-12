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

height: calc(100vh - 12rem);
display: flex;
flex-direction: column;
backdrop-filter: brightness(.8);
background: linear-gradient(cyan, rgb(40, 88, 104));

display: flex;
align-items: center;
justify-content: center;

}

/*Central*/

form{

display: flex;
flex-direction: column;
width: 50rem;
height: fit-content;

background: rgb(240, 234, 234);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

padding: 2rem;
border-radius: .8rem;
}

label{
font-size: 2.2rem;
font-weight: bold;

}

textarea{

resize: none;
border: none;
}

.input-wrapper{

display: flex;
flex-direction: column;

}

input{

border-radius: .8rem;
padding: .7rem;
border: none;

}

.input-wrapper + .input-wrapper{

margin-top: 2rem;

}

textarea{

border-radius: .8rem;
border: none;
padding: 1rem;

}

button{

margin-top: 1rem;
padding: 2rem;
background: #1756a5;
border: none;
border-radius: .8rem;

font-weight: bold;
font-size: 2rem;
color: white;

}
`