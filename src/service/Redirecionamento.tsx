import React from 'react'
import { useNavigate } from 'react-router-dom'

const Redirecionamento = (redirecionamento: string) => {

    const navigate = useNavigate();

    return navigate(redirecionamento);
}

export default Redirecionamento
