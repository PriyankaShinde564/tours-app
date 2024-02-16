import Link from 'next/link';
import styles from "./Layout.module.scss";
import { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu'; 
import { Icon } from '@mui/material';
import Image from 'next/image';
import logo from "./logo.jpg"
type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <nav className={styles.top}>
            <div className={styles.logo}>
            <div>Tours and travels</div>
            {/* <Image 
            src={"/logo.jpg"} 
            alt="Logo" 
            width={100} // Set the desired width
            height={300} // Set the desired height
        /> */}
            </div>
            {/* <MenuIcon /> */}
                <ul className={styles.nav}>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                    <Link href={"/contact"}><li>Contact</li></Link>
                </ul>
            </nav>
            {/* Side Drawer for Mobile */}
            <aside className={styles.sideDrawer}>
                <ul className={styles.drawerList}>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/"}><li>About</li></Link>
                    <Link href={"/"}><li>Technologies</li></Link>
                    <Link href={"/"}><li>Projects</li></Link>
                    <Link href={"/"}><li>Contact</li></Link>
                </ul>
            </aside>
            <main>{children}</main>
            {/* You can add a footer or other common elements here */}
        </div>
    );
};

export default Layout;
