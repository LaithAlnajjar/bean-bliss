import styles from "./Footer.module.css";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className={styles["copyright"]}>
        Copyright © 2025 Laith Alnajjar
        <Github size={24} />
      </div>
    </footer>
  );
}
