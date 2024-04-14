import styles from "./Link.module.css";
export const Link = ({ href, children, icon, ...props }) => {
  return (
    <a href={href} className={styles.link} {...props}>
      {icon && <img src={icon} alt={children} />}
      <span>{children}</span>
    </a>
  );
};
