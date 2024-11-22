'use client'
import {useState} from "react"

export default function State() {
    const [msg, setMsg] = useState('');
    const [mostrarDiv, setMostrarDiv] = useState(true);

     //const alterarMsg = () => {
        //setMsg(prevMsg => {
            //prevMsg = 'Boa tarde',
            //console.log(prevMsg)
        //});
        //console.log('msg:' +msg)//
      //}

      const manipularInput = (evento) => {
        console.log(evento.target.value);
        setMsg(evento.target.value)
      }
    return (
        <div>
           {/* <p>{msg}</p>
            <button onClick={alterarMsg}>Alterar</button>*/}
            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInput}/>
            <button onClick={() =>setMostrarDiv(!mostrarDiv)}>{mostrarDiv? 'Esconder' : 'Mostrar'}</button>
            {mostrarDiv && (
                <div>
                <p>Parágrafo dinâmico</p>
                </div>
            )
            }
        </div>
    )
}