import { useDarkMode } from "./DarkModeContext";
import styles from './UiDeco.module.css';

const UiDeco = () => {
  const { theme } = useDarkMode();
  const logoClass = theme === "dark" ? styles.whiteAwsLogo : styles.awsLogo;

  return (
    <div>
      <div className={`${styles.title} dark:text-white`}>
        <div className="text-[1.8rem]">Lex Translator</div>
        <div>powered by</div>
      </div>
      <div className={`${logoClass} fixed top-[70px] left-[10px] w-24 h-20`} />
    </div>
  );
};

export default UiDeco;