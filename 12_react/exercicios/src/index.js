import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// const elemento = <h1>React 2</h1>


// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Multi, {BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'


// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

// ReactDOM.render(
// <div>
//       <Multi.BoaTarde nome="Ana"/>
//       <BoaNoite nome="Bia"/>
// </div>, document.getElementById('root'))

ReactDOM.render(
      <div>
            <Saudacao tipo="Bom dia" nome="Joao"/>
      </div>
, document.getElementById('root'))
