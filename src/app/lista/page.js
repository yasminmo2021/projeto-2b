export default function Lista(){
    const nomes = ['Wagner', 'Yasmin', 'Beatriz', 'Ana', 'Francieli']
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
        }
    ]
    return(
        <div>
        <h1>Listas</h1>
        <h2>Lista Comum</h2>
            <ul style= {{marginLeft:'50px'}}>
                {nomes.map((nome, id) => (
                    <li kev={id}>{id+1} - {nome}</li>
                ))}
            </ul>
        <div>
            <h2>Lista de Objeto</h2>
            {
                carros.map((carro) => (
                    <div key={carro.id}>
                        <h3>{carro.id} - {carro.modelo}</h3>
                        <p>{carro.cor}</p>
                        <p>{carro.ano}</p>
                    </div>
            ))}
        </div>
        </div>
    )
}