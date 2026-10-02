import type { IUser } from "../../../types/IUser";
import { addUser } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  // evita que se recargue la pagina al enviar el form
  e.preventDefault();

  // todos los que se registran arrancan como client
  const user: IUser = {
    email: inputEmail.value,
    password: inputPassword.value,
    role: "client",
    loggedIn: false,
  };

  // guardo el usuario y lo mando al login para que inicie sesion
  addUser(user);
  navigate("/src/pages/auth/login/login.html");
});
