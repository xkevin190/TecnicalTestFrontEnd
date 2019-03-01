type Require = {
  errorEmail: string | boolean;
  errorName: string | boolean;
  errorPassword: string | boolean;
  errorConfirm: string | boolean;
  password: string;
  confirm: string;
  email: string;
  name: string;
}
export const validator = (
  type: string,
  value: string,
  cb: (result: string | boolean) => void,
  password?: string
) => {
  switch (type) {
    case 'email':
      const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regex.test(value)) {
        cb('Correo no valido');
      } else {
        cb(false);
      }
      break;
    case 'contraseña':
      const contraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!contraseña.test(value)) {
        cb('La contraseña debe tener mínimo de ocho caracteres, al menos una letra y un número');
      } else {
        cb(false);
      }
      break;
    case 'confirm':
        console.log(value === password)
        console.log(password) 
      if (!(value === password)) {
        cb('Las Contraceñas No Coinciden');
      } else {
        cb(false);
      }
    default:
      break;
  }
};

export const validateRequire= async ({...data}:Require)=>{
   let obj = {
    errorEmail: data.errorEmail,
    errorName: data.errorName,
    errorPassword: data.errorPassword,
   }  
  if(data.name.length === 0 ){
       obj.errorName = true
    }else if(data.email.length === 0){
      obj.errorEmail = true
    }else if(data.password.length === 0){
      obj.errorPassword = true
    }
    console.log('aca', obj)
   return obj 
}
