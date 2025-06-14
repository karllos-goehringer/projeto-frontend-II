import estilo from './Footer.module.css';
export default function Footer(props) {
    return (
        <footer className={estilo.footer}>
            <div className={estilo.container}>
                <p>&copy; 2025 Dribbble. All rights reserved.</p>
            </div>
        </footer>);
}