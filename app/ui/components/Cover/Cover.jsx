import Image from 'next/image';
import styles from './cover.module.css';
import Logo_DiegoVive10 from '../../../../public/images/Logo.png';
import CityButton from './CityButton/CityButton';



const Cover = () => {


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} ></div>
        <h1 style={{display: 'none'}}>diegovive10</h1>
        <div className={styles.back}>
            <video preload="none" className={styles.video} autoPlay loop muted playsInline> 
                <source src={"/video/video2.mp4"} type="video/mp4" />
            </video>
        </div>
        <div className={styles.wrapper}>
            <Image className={styles.img} src={Logo_DiegoVive10} alt='Logo diegovive10' priority />
            <div className={styles.banner}>
                <div className={styles.titles}>
                </div>
            </div>
            <div className={styles.countries}>
                <div className={styles.done}>
                    <CityButton city={'CONTINUAR'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cover
