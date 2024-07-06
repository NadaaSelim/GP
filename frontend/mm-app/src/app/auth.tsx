import jwt, { JwtPayload } from 'jsonwebtoken';
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const isAuth = (): boolean => {
  const token = getToken();
  return (token!=null && !isExpired())
};

const isExpired=():boolean =>{
//  const jwt = require('jsonwebtoken');
  const token = getToken();
  if(token==null) return false;
  const decoded = jwt.decode(token) as JwtPayload;

  if (decoded && decoded.exp) {
    const expirationTime = decoded.exp * 1000; //in MS
    const now = Date.now();
    return (now >= expirationTime);
} 
  return false;
}

