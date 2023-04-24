import styles from './Chip.module.scss';

type TSpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export const Chip = (props: TSpanProps): JSX.Element => (
  <span {...props} className={styles.chip}>
    {props.children}
  </span>
);
