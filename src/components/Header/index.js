'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
    <Image className={styles.imga} src="/images/menu[.jpg" alt='icone do menu' width={30} height={30}/>
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image className={styles.img} src="/images/logo.png" alt="Logo"  width={50} height={80}/>
        <h1 className={styles.h1}>Clínica Dom da Vida</h1>
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            <li className={styles.link}>
              <a href='/'>Home</a>
            </li>

            <li className={styles.link}>
              <a href="/props">Médicos</a>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/props">Listar</a>
                </li>
                <li className={styles.link}>
                  <a href="/props">Adicionar</a>
                </li>
                <li className={styles.link}>
                  <a href="/props">Editar</a>
                </li>
                <li className={styles.link}>
                  <a href="/props">Excluir</a>
                </li>
              </ul>
            </li>

            <li className={styles.link}>
              <a href="/filtro">Pacientes</a>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/filtro">Listar</a>
                </li>
                <li className={styles.link}>
                  <a href="/filtro">Adicionar</a>
                </li>
                <li className={styles.link}>
                  <a href="/filtro">Editar</a>
                </li>
                <li className={styles.link}>
                  <a href="/filtro">Excluir</a>
                </li>
              </ul>
            </li>

            <li className={styles.link}>
              <a href="/efeitos">Agendamento</a>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/efeitos">Listar Consultas</a>
                </li>
                <li className={styles.link}>
                  <a href="/efeitos">Agendar Consultas</a>
                </li>
                <li className={styles.link}>
                  <a href="/efeitos">Editar Agendamento</a>
                </li>
                <li className={styles.link}>
                  <a href="/efeitos">Cancelar</a>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      }

      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;