'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
//export default function Sobre() {
    {/*let [medicos,setMedicos] = useState([{
        "id": 1,
        "nome": "Alice Alves Nogueira",
        "telefone": "(69) 99932-9014",
        "especialidade":"Anestesiologia"},
        {
          "id": 2,
          "nome": "Alce Silva",
          "telefone": "(99) 99999-9999",
          "especialidade":"Anestesiologia"}
      ])*/}

      export default function Afis() {
        let [nome,setNome] = useState(undefined)
        let [medicos,setMedicos] = useState([
          ])
        const getMedicos = async (nome) =>{
            let response = await fetch('https://api-clinica-2a.onrender.com/medicos');
            let data = await response.json();
            console.log(data,nome)
            if (typeof nome == 'undefined') {
                setMedicos(data);
                
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
                setMedicos(data);
    
            
                
            }
            
            if (!response.ok) {
                throw new Error('Deu rum buscando os dados'+ response.statusText);
                }
            
            
    
    
        }
    
        useEffect(()=>{
            getMedicos(nome);
        },[nome]);
    return (
       

        <main className={styles.main}>
        <div className={styles.medicos_conteinar}> 
            <h2 className={styles.h2}> Lista de Médicos</h2>
            <button className={styles.buttonMedic}>Buscar Médicos</button>
           {/* <div className={styles.butão}>
                <div className={styles.selecione}> 
                    <h3>Selecione um médico</h3>
                    <input placeholder="Digite o nome do médico" type="text" value></input>
            
                </div>
    </div>*/}
       
        
           
            
            <div className={styles.tabelaContainer}>
                <table className={styles.tabela_medic}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>NOME</th>
                            <th className={styles.th}>TELEFONE</th>
                            <th className={styles.th}>EMAIL</th>
                            <th className={styles.th}>ESPECIALIDADE</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                    {medicos.map((medico)=>(
                        <tr className={styles.tro}  key={medico.id}>
                            <td className={styles.td}>{medico.id}</td>
                            <td className={styles.td}>{medico.nome}</td>
                            <td className={styles.td}>{medico.telefone}</td>
                            <td className={styles.td}>{medico.email}</td>
                            <td className={styles.td}>{medico.especialidade}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>

         {/*  <Image className={styles.img_sobre} src='/images/onca.webp' alt="gfg" width={450} height={500} />*/}
        </main>
         
);

}