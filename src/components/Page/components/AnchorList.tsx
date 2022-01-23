import {useModel} from "umi";
import styles from '../index.less'

export default () => {
  // @ts-ignore
  const {data = [], active = ''} = useModel('anchorData')

  return (
    <div className={styles.anchorList}>
      {data?.map((item: string, index: number) => (
        <a
          href={`#${item}`}
          className={(item === active || (active === '' && index === 0)) ? styles.active : ''}
          key={item}
        >
          {item}
        </a>
      ))}
    </div>
  )
}
