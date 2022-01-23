import {useEffect} from 'react'
import type {ReactElement} from 'react'
import {useModel} from 'umi'
import styles from './index.less'

interface Props {
  title: string,
  children: ReactElement,
}

export default (props: Props): ReactElement => {
  const {title, children} = props
  // @ts-ignore
  const {push} = useModel('anchorData')

  useEffect(() => push(title), [title])

  return (
    <div id={title} className={styles.container}>
      <h2 className={styles.h2}>
        <a href={`#${title}`}>
          {title}
        </a>
      </h2>
      <div>
        {children}
      </div>
    </div>
  )
}
