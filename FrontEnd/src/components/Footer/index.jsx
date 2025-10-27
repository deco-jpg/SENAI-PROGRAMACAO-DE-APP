//  src\components\Footer\index.js
 import './style.css'

 function Footer() {
     return (
         <footer className="footer">
             <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br /> Desenvolvido por Senai.
            </p>
         </footer>
     )
 }

 export default Footer;