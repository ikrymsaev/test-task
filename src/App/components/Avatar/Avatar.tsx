import styles from './Avatar.module.scss';

type TImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Avatar = (props: TImgProps): JSX.Element => {
  return (
    <img {...props} className={styles.avatar}></img>
  )
}