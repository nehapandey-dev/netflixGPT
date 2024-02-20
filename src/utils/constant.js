export const logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const User_Avatar = 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w400'
export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
export const Supported_Languages = [{identifier : 'en', name : 'English'},{identifier : 'hindi', name : 'Hindi'}]
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY