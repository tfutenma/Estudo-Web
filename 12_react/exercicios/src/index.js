import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))


// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//import Multi, {BoaNoite} from './componentes/Multiplos'
// ReactDOM.render(
// <div>
//       <Multi.BoaTarde nome="Ana"/>
//       <BoaNoite nome="Bia"/>
// </div>, document.getElementById('root'))


//import Saudacao from './componentes/Saudacao'
// ReactDOM.render(
//       <div>
//             <Saudacao tipo="Bom dia" nome="Joao"/>
//       </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
      <div>
            <Pai nome="Paulo" sobrenome="Silva"/>
            <Pai nome="Paulo" sobrenome="Silva">
                  <Filho nome="Pedro" sobrenome="Silva"/>
                  <Filho nome="Paulo" sobrenome="Silva"/>
                  <Filho nome="Carla" sobrenome="Silva"/>
            </Pai>
      </div>
, document.getElementById('root'))




