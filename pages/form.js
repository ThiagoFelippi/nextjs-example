import React, { useState } from 'react';
import axios from "axios"
import style from "../styles/Form.module.scss"

function Form() {
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()

  const handleSubscribe = async (e) => {
    e.preventDefault()

    setLoading(true)
    const {data, status} = await axios.post('/api/subscribe', { email });
    setLoading(false)
  }

  return  loading ?
    <h1> Loading... </h1>
    :
    <form className={style.form} onSubmit={handleSubscribe} >
      <input className={style.input} onChange={(e) => setEmail(e.target.value)} />
      <input className={style.button} type="submit" value="Cadastrar" />
    </form>
}

export default Form;