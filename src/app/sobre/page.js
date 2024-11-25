import styles from './sobre.module.css';
import Image from "next/image";

export default function Sobre() {
  return (
    <main>
      <h1 className={styles.h1}>Voleibol</h1>
      <p className={styles.p}> O voleibol ou vôlei é um esporte coletivo praticado em uma quadra dividida por uma rede.</p>
      <p className={styles.p}>Duas equipes disputam a partida com o objetivo de tocar a bola no campo adversário, a qual deve ser arremessada por cima da rede.</p>
      <p className={styles.p}>O esporte é um dos mais populares no Brasil e no mundo em termos de praticantes e audiência.</p>
      <Image className={styles.img} src='/images/voleii.jpg' alt="Volei" width={450} height={450}/>
      <h1 className={styles.h1}>Regras</h1>
      <p className={styles.p}>Cada time é composto por 6 jogadores em quadra e 6 jogadores reserva.</p>
      <p className={styles.p}>Após o saque, cada time só poderá tocar a bola três vezes, sendo proibido que um jogador toque a bola duas vezes seguidas.</p>
      <p className={styles.p}>A equipe vencedora é aquela que ganhar o maior número de sets.</p>
      <p className={styles.p}>Não existe tempo pré-determinado para cada set e cada set tem um máximo de 25 pontos com uma diferença mínima de 2 pontos.</p>
      <p className={styles.p}>Em caso de empate no final do set (24 x 24), a partida continua até que a diferença de dois pontos seja atingida (26 x 24, 27 x 25, etc.) e ganha a equipe que vencer três sets.</p>
    </main>
    
  );
}