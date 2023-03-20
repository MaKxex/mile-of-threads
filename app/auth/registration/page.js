import React from 'react'
import Link from 'next/link'
import {jura} from "@/utils/fonts.js"
import "@/assets/scss/authForm.scss"


export default function page() {
  return (
    <div className='container center'>
		<form className='auth-form' action="/send-data-here" method="post">
				<div className='title'><span className={jura.className}><a href ="/auth/login" className='shadow'>Войти в аккаунт</a></span> / <a href='/auth/registration' className={jura.className}>Зарегистрироваться</a></div>

				<div className='auth-content'>
					<input className='auth-input-text' type="text" placeholder="Email" name="email"></input>
					<input className='auth-input-text' type="text" placeholder="Пароль" name="password"></input>
					<input className='auth-input-text' type="text" placeholder="Повтори пароль" name="password"></input>

					<button className='auth-buttom' type="submit">Войти</button>
				</div>

				<div className='auth-bottom'>

					<div className='checkbox-block'>
						<input className='auth-input-checkbox' type="checkbox"></input>
						<label>Запомни меня!</label>
					</div>
					<Link href="#">Забыл пароль</Link>

				</div>

			</form>

		</div>
  )
}
