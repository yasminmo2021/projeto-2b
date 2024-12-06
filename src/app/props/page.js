import Card from '@/components/Card';
import styles from "./props.module.css";

export default function Props() {
    const carros = [
        {
            id: 1,
            modelo: 'Fusca',
            ano: 1975,
            cor: 'Preto'    
        },
        {
            id: 2,
            modelo: 'Audi',
            ano: 2024,
            cor: 'Branco'
        },
        {
            id: 3,
            modelo: 'BMW',
            ano: 2024,
            cor: 'Preto'
        },
        {
            id: 4,
            modelo: 'Ferrari',
            ano: 2024,
            cor: 'Vermelho'
        },
        {
            id: 3,
            modelo: 'Porsche',
            ano: 2024,
            cor: 'Preto'
        },
    ];

    return (
        <div>
            <h1 className={styles.h1}>Props</h1>
            {
                carros.map((carro) =>(
                <Card 
                    key={carro.id} 
                    id={carro.id} 
                    modelo={carro.modelo} 
                    ano={carro.ano}
                    cor={carro.cor}
                />
            ))}           
        </div>
    )
}