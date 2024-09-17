import styles from './cityButton.module.css';
import Link from 'next/link';



const CityButton = ({city}) => {

  return (
    <Link href={`https://diegovivetour.com/`} className={styles.country}>{city}</Link>
  )
}

export default CityButton;