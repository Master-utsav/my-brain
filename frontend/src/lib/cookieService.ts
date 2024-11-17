import Cookies from "js-cookie";

export const setTokenCookie = (token: string) => {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 15);
  Cookies.set("token", token, { expires: expireDate });
};

export const getVerifiedToken = (): string | null => {
  const token = Cookies.get("token"); 

  if (token) {
      return token;
    }
    else{
      return null;
    }
}

export const removeTokenCookie = () => {
  Cookies.remove("token"); // Removes the "token" cookie
};


