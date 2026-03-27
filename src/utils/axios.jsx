import React from 'react'
import axios from 'axios'

//fake backnend se data liya
const instance = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export default instance;
