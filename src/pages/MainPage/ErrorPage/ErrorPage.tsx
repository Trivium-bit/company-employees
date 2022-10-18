import ufo from './../../../assets/ufo.png'
import style from './ErrorPage.module.css'

function ErrorPage() {

  const refreshPage = () => {
    document.location.reload()
  }

  return (
    <div className={style.errorPage}>
      <img className={style.img} src={ufo} />
      <div className={style.discr}>Какой-то сверхразум все сломал</div>
      <div className={style.message}>Постараемся быстро починить</div>
      <a className={style.refresh} onClick={refreshPage}>Попробовать снова</a>
    </div>
  )
}

export default ErrorPage