import './Colaborador.css'

export const Colaborador = (props) => {
    
    const corDeFundo = props.corDeFundo

    return (
        <div className= 'colaborador' >
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={props.imagem} alt='Foto Colaborador' />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

