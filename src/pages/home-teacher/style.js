import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
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

background: green;
width: 5rem;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
padding-top: 2rem;

}

a img{

  width: 3rem;
height: 3rem;
}

.icons{
  img{


}
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

/*Revisão*/

.revisao{

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60rem;
height: 25.6rem;
border-radius: .8rem;
background: rgba(64, 224, 208, 0.801);

}

.materias{

display: flex;
gap: 4rem;
padding: 2rem;

}

.revisao h6{

font-size: 3rem;

}

.caixa-materia{

box-shadow: rgba(12, 12, 247, 0.35) 0px 5px 15px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 10rem;
width: 15rem;
border-radius: .8rem;
background: paleturquoise;

}

.caixa-materia span{

font-weight: bold;

}

.info{

width: 80vw;
margin: auto;
margin-top: 1rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: .8rem;

display: flex;
justify-content: space-between;
background: purple;

}

h2{

margin-bottom: 2rem;
margin-left: 2rem;
margin-top: 2rem;
color: white;

}


.apresentacao img{

width: 20rem;
height: 16rem;

}

.cursos{

align-items: center;
justify-content: center;
display: flex;

}

.cursos{

position: relative;

}

.cursos a{

text-decoration: none;
color: white;
font-weight: bold;
font-size: 4rem;

}

.cursos img{

width: 40rem;
height: 20rem;
filter: brightness(.8);
border-radius: .8rem;
margin-right: 2rem;

}

.cursos span{

position: absolute;
bottom: 2.6rem;
left: 2.8rem;

}

.continue-aprendendo{

display: flex;
align-items: center;

}

#insentivo{

color: white;
font-size: 4rem;


}

.cursos a{

transition: all 200ms;

}

.cursos a:hover{

transform: scale(1.1);

}

.aluno{

display: flex;
flex-direction: column;
gap: 2rem;
justify-content: center;
margin: 2rem;
color: white;

}


.aluno p{

display: flex;
flex-direction: column;

}

.aluno p span{

font-weight: bold;

}

.conteudo{

display: flex;
justify-content: space-between;
margin: 5rem 11rem 0rem;

}

/*calendario*/

.calendario{

width: fit-content;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 2rem;
border-radius: .8rem;
background: yellowgreen;

}

.calendario table{

text-align: center;

}

table{

border-radius: .4rem;

}

table th:first-child{
border-top-left-radius: .4rem;
}

table th:last-child{
border-top-right-radius: .4rem;
}

table tr:last-child td:last-child{

border-bottom-right-radius: .4rem;

}

table tr:last-child td:first-child{

border-bottom-left-radius: .4rem;

}

.calendario h6{

font-weight: bold;
font-size: 2.5rem;
text-align: center;

}

.calendario table th, td{

height: 3rem;
width: 3rem;

}

.calendario table th{

background: #3cbca4;

}

.calendario table td{

background: white;

}

.calendario table span{

opacity: .4;

}

.calendario button{

height: 100%;
width: 100%;
border: none;
background: none;
cursor: pointer;
font-family: 'Poppins', sans-serif;

}

.calendario button:hover{

background: #3cbca4;

}

`