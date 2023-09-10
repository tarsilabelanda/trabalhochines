import React from "react";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card/index";
import Modal, { ModalBody, ModalHeader } from "./components/Modal";

import card1 from './image/card1.jpg'
import card2 from './image/card2.jpg'
import card3 from './image/card3.jpg'
import card4 from './image/card4.jpg'
import banner from './image/banner.jpg'

//css module pra quando usar somente em um arquivo
//import style from './styles.module.css'
import './styles/global.css'

function App() {
  const requisicao = [
    {
      "id": 1,
      "titulo": "Missão Impossivel II",
      "imagem": card1
    },

    {
      "id": 2,
      "titulo": "Missão Impossivel III",
      "imagem": card2
    },
    {
      "id": 3,
      "titulo": "Missão Impossivel IV",
      "imagem": card3
    },
    {
      "id": 4,
      "titulo": "Missão Impossivel 7",
      "imagem": card4
    },

  ]
  return (
    <React.Fragment>

      <Header />
      <img width="100%" src={banner} alt="" />
      {/*neste h1 importamos o style do module.css*/}
      <h2
        style={{
          textAlign: 'center',
          margin: 15
        }}
      >Filmes em Destaque:</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >

        {
          requisicao.map((filme) => {
            return (
              <Card
                key={filme.id}
                imagem={filme.imagem}
                title={filme.titulo}
              />
            )
          })
        }
      </div>
      {/* <Modal>
        <ModalHeader>
          <h2>Chaves</h2>
        </ModalHeader>
        <ModalBody>
          <p
            style={{
              fontSize: "0.8rem",
              marginBottom: 10
            }}
          >
            04/09/2023
          </p>
          <div
            style={{
              display: "flex",
              marginBottom: 10
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: '#b3b3b3'
              }}
            >
              Direção
            </p>
            <p
              style={{
                fontSize: "0.8rem"
              }}
            >
              Seu Madruga
            </p>
          </div>
        </ModalBody>
      </Modal> */}


      <Footer />

    </React.Fragment>
  );
}

export default App;
