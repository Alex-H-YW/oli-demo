import styles from "./Language.less";
import { Button } from "antd";

interface LanguageProps {
  handleChangeLanguage: (value: string) => void;
}

const Language: React.FC<LanguageProps> = ({handleChangeLanguage}) => {
  return (
    <div className={styles.LangContent}>
       <div className={styles.LangTitle}>
           <span>LANGUAGE</span>
       </div>
       <div className={styles.LangBtn}>
           <Button onClick={()=>handleChangeLanguage("shell")}>
            <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/20/undefined/external-shell-summer-holiday-kmg-design-flat-kmg-design.png"/>
               <span>Shell</span>
           </Button>
           <Button onClick={()=>handleChangeLanguage("node")}>
            <img src="https://img.icons8.com/color/20/undefined/nodejs.png"/>
               Node
           </Button>
           <Button onClick={()=>handleChangeLanguage("ruby")}>
           <img src="https://img.icons8.com/officexs/20/undefined/ruby-programming-language.png"/>
               Ruby
           </Button>
           <Button onClick={()=>handleChangeLanguage("php")}>
            <img src="https://img.icons8.com/windows/20/undefined/php-logo.png"/>
            PHP
           </Button>
           <Button onClick={()=>handleChangeLanguage("javascript")}>
           <img src="https://img.icons8.com/color/20/undefined/javascript--v1.png"/>
            JS
           </Button>
       </div>
    </div>
  )
}
export default Language;