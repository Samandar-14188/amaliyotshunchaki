function login(){
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
 
    if (!login && !password) {
         alert("Bo'sh maydonlarni to'ldiring :)")
         return
    }  else if ( password.length <  8){
      alert("parol kamida 8 ta belgidan iborat bo'lishi kerak" )
    } else {
      window.location.href ="./page/product.html"  
    }


}