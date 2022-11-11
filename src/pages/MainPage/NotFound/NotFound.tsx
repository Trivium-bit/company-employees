import { Icon } from '@iconify/react'
import ufo from './../../../assets/ufo.png'
import style from './NotFound.module.css'

function NotFound() {

  return (
    <div className={style.notFoundPage}>
     <Icon className={style.img} icon="noto:magnifying-glass-tilted-left" />
     <div className={style.discr}>Мы никого не нашли</div>
     <div className={style.message}>Попробуй скорректировать запрос</div>
    </div>
  )
}

export default NotFound