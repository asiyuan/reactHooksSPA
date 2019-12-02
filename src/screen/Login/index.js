import React, {useState, useEffect, Fragment} from 'react'
import MyLogin from './Login'
import API from '../../api'
import {notification} from 'antd'

const url = 'https://free-api.heweather.net/s6/weather/now?location=wuhan&Key=ac0814ceceec49c2adeba87a7a04caa3'

const Login = ({form}) => {

  useEffect(() => {

    notification.open({
      message: '用户名 && 密码',
      description: '都是： 123',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    })

  }, [])

  return (
      <Fragment>
        <MyLogin />
      </Fragment>
  )
}



export default Login
