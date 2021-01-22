import React, {Component} from 'react'

export default class Saudacao extends Component {

      
      state = {
            tipo: this.props.tipo,
            nome: this.props.nome
      }

      constructor(props){
            super(props)
            this.setTipo = this.setTipo.bind(this)
      }

      setTipo(e){
            this.setState({
                  tipo: e.target.value
            })
      }

      setNome(e){
            this.setState({
                  nome: e.target.value
            })
      }

      render(){
            const {tipo, nome} = this.state
            return (
                  <div>
                        <h1>{tipo} {nome}!</h1>
                        <hr/>
                        {/* Usando o bind para garantir o this fixo*/}
                        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                        {/* Usando arrow function */}
                        <input type="text" placeholder="Nome..." value={nome} onChange={(e) => this.setNome(e)}/>
                  </div>
            )
      }
}