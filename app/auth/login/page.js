import Link from 'next/link'
import React from 'react'

import "@/assets/scss/authForm.scss"



import {Jura} from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
})



export default function page() {
  return (
		<div className='container center'>
		<form className='auth-form' action="/send-data-here" method="post">
			<div className='title'>
				<span className={jura.className}><a href ="/auth/login">Войти в аккаунт</a></span> / 
				<span className={jura.className}><a href='/auth/registration' className="shadow">Зарегистрироваться</a></span>
			</div>

				<div className='auth-content'>
					<input className='auth-input-text' type="text" placeholder="Email" name="email"></input>
					<input className='auth-input-text' type="text" placeholder="Пароль" name="password"></input>

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
 