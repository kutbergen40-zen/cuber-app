import styles from './CategoryBar.module.css';

import PhoneIcon from "../../assets/phones.svg";
import ComputerIcon from "../../assets/computers.svg";
import WatchIcon from "../../assets/smartWatches.svg";
import CameraIcon from "../../assets/cameras.svg";
import HeadphonesIcon from "../../assets/headphones.svg";
import GamingIcon from "../../assets/gaming.svg";

const categories = [
    { name: 'Phones', icon: PhoneIcon },
    { name: 'Computers', icon: ComputerIcon },
    { name: 'Smart Watches', icon: WatchIcon },
    { name: 'Cameras', icon: CameraIcon },
    { name: 'Headphones', icon: HeadphonesIcon },
    { name: 'Gaming', icon: GamingIcon },
];

const CategoryBar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.container}>
                {categories.map((cat, index) => (
                    <div key={index} className={styles.categoryItem}>
                        <img src={cat.icon} alt={cat.name} className={styles.icon} />
                        <span className={styles.name}>{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;