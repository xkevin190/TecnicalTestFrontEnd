type Require = {
  errorEmail: string | boolean;
  errorName?: string | boolean;
  errorPassword: string | boolean;
  errorConfirm?: string | boolean;
  password: string;
  confirm?: string;
  email: string;
  name?: string;
};

export type Errors = {
  errorEmail: string | boolean;
  errorName?: string | boolean;
  errorPassword: string | boolean;
  errorConfirm?: string | boolean;
}

export const validator = (
  type: string,
  value: string,
  cb: (result: string | boolean) => void,
  password?: string
) => {
  switch (type) {
    case 'name':
      if (value.length === 0) {
        cb(true);
      } else {
        cb(false);
      }
      break;
    case 'email':
      const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (value.length === 0) {
        cb(true);
      } else if (!regex.test(value)) {
        cb('Correo no valido');
      } else {
        cb(false);
      }

      break;
    case 'contraseña':
      const contraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (value.length === 0) {
        cb(true);
      } else if (!contraseña.test(value)) {
        cb('La contraseña debe tener mínimo de ocho caracteres, al menos una letra y un número');
      } else {
        cb(false);
      }
      break;
    case 'confirm':
      if (value.length === 0) {
        cb(true);
      } else if (!(value === password)) {
        cb('Las Contraceñas No Coinciden');
      } else {
        cb(false);
      }
    default:
      break;
  }
};

export const validateRequire = ({ ...data }: Require, cb: (data: Errors) =>Errors ):Promise<Errors> => {
  return new Promise(resolve => {
    const obj = {
      errorEmail: data.errorEmail,
      errorName: data.errorName,
      errorPassword: data.errorPassword,
      errorConfirm: data.errorConfirm,
    };
    if (data.name && data.name.length === 0) {
      obj.errorName = true;
    }
    if (data.email.length === 0) {
      obj.errorEmail = true;
    }
    if (data.password.length === 0) {
      obj.errorPassword = true;
    }
    if ( data.confirm && data.confirm.length === 0) {
      obj.errorConfirm = true;
    }
    cb(obj)
    resolve(obj)
  });
};
