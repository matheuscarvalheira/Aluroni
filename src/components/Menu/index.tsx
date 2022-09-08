import React, {useContext} from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import {ThemeContext} from 'styled-components';
import Switch from 'react-switch';
import {shade} from 'polished';

interface Props {
  toggleTheme(): void
}


export default function Menu({toggleTheme}: Props) {
  const { colors, title } = useContext(ThemeContext);
  const rotas = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </nav>
    
  );
}
