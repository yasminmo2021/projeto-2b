import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className={styles.h1}>Volei</h1>
      <Image className={styles.img} src='/images/OIP.jpg' alt='Volei' width={400}  height={400}/>
      <p className={styles.p}>O vôlei surgiu em 1895 nos Estados Unidos. O esporte foi criado por William George Morgan, diretor de Educação Física da Associação Cristã de Moços (ACM) da cidade de Holyoke, no estado de Massachusetts. A modalidade foi criada na intenção de realizar um esporte durante o inverno em local fechado.</p>
      <p className={styles.p}>O vôlei, também chamado de volley ou voleibol, é um esporte de origem norte-americana do século XIX. É um esporte de popularidade significativa em grande parte do mundo, e está presente em muitos torneios e eventos esportivos de âmbito internacionais, tais como os Jogos Olímpicos e os Jogos Panamericanos.</p>
      <p className={styles.p}>é um esporte coletivo praticado em uma quadra dividida por uma rede. Duas equipes disputam a partida com o objetivo de tocar a bola no campo adversário, a qual deve ser arremessada por cima da rede. O esporte é um dos mais populares no Brasil e no mundo em termos de praticantes e audiência.</p>
    </main>
  );
}
