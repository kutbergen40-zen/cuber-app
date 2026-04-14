import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Header.module.css';

import Like from "../../assets/like.svg";
import User from "../../assets/user.svg";
import Cart from "../../assets/cart.svg";

const menu = [
    { name: 'Home', Link: '/' },
    { name: 'About', Link: '/about' },
    { name: 'Contact Us', Link: '/contact' },
    { name: 'Blog', Link: '/blog' }
];

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [modalType, setModalType] = useState(null);

    const closeModal = () => setModalType(null);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="cyber" />
                </div>

                <div className={styles.searchWrapper}>
                    <CiSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search" className={styles.searchInput} />
                </div>

                <nav className={styles.nav}>
                    {menu.map((item) => (
                        <a 
                            key={item.name} 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(item.name);
                            }}
                            className={activeTab === item.name ? styles.active : ''}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className={styles.buttons}>
                    <button onClick={() => setModalType('like')}><img src={Like} alt="like" /></button>
                    <button onClick={() => setModalType('cart')}><img src={Cart} alt="cart" /></button>
                    <button onClick={() => setModalType('user')}><img src={User} alt="user" /></button>
                </div>
            </div>

            {modalType && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>&times;</button>
                        
                        {modalType === 'user' && (
                            <div className={styles.profileContent}>
                                <h3>Личный кабинет</h3>
                                <div className={styles.userAvatar}>K</div>
                                <p className={styles.userName}>Kutbergen</p>
                                <p className={styles.userEmail}>kutbergen@example.com</p>
                                <hr />
                                <ul className={styles.modalList}>
                                    <li>Мои заказы</li>
                                    <li>Настройки профиля</li>
                                    <li>Выйти</li>
                                </ul>
                            </div>
                        )}

                        {modalType === 'cart' && (
                            <div className={styles.simpleContent}>
                                <h3>Корзина</h3>
                                <p>Ваша корзина пока пуста.</p>
                            </div>
                        )}

                        {modalType === 'like' && (
                            <div className={styles.simpleContent}>
                                <h3>Избранное</h3>
                                <p>Вы еще ничего не добавили.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;