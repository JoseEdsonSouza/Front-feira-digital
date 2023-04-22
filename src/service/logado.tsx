function logado():boolean {
  const token = sessionStorage.getItem("token");

  if(token !== null && token !== undefined){
    return true
  }else{
    return false
  }
}

export default logado;
