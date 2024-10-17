import React from 'react'
import { IMG_TEAM, IMG_URL } from '../settings/global'

function Repair() {
  return (
    <main>

        <div><img src={IMG_URL} alt="" /></div>


<h1>
Описание сервиса "Ремонт": 
</h1>
<p>
    Мы предлагаем профессиональный ремонт ПК, ноутбуков и принтеров. Наша команда экспертов быстро диагностирует и устраняет проблемы, обеспечивая надежную работу вашей техники. Доверьтесь нам для качественного обслуживания!

</p>
<div className='our-team'>
    <h2>ВОт наши профессионалы:</h2>
<div>
<div><img src={IMG_TEAM[0]} alt="" /></div>
<h4>Я Максат, Я про в своем деле</h4>
</div>
<div>
<div><img src={IMG_TEAM[1]} alt="" /></div>
<h4>Я Адилет, Я контролирую всё</h4>
</div>
</div>
    </main>
  )
}

export default Repair