import './Rodape.css'

export const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='redesSociais'>
                <img src='/imagens/fb.png' alt='Facebook logo'/>
                <img src='/imagens/tw.png' alt='Twitter Logo'/>
                <img src='/imagens/ig.png' alt='Instagram Logo'/>
            </div>
            <div className='logo'>
                <img src='./imagens/logo.png' alt='Organo logo' />
            </div>
            <div>
                <h5>Desenvolvido por Alura</h5>
            </div>
        </div>

    )
}