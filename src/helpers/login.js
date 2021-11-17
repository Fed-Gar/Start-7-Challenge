import axios from "axios";

const URL_LOGIN = "https://api-flordeemprendedora.start-7.com/api/auth/login/";

async function login(email, password) {
    const body = {
      username: email,
      password: password,
    };
    const { data } = await axios.post(URL_LOGIN, body);
    window.localStorage.setItem("token", data.token);
};

export default login;