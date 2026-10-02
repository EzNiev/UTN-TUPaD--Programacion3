import { getUsers, saveUser } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("error") as HTMLParagraphElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;

  // busca coincidencia de email y password en los usuarios guardados
  const user = getUsers().find(
    (u) => u.email === valueEmail && u.password === valuePassword
  );

  // si no lo encuentra muestro el error y no sigo
  if (!user) {
    errorMessage.textContent = "Email o contraseña incorrectos";
    return;
  }

  // primero guardo la sesion y despues redirijo, si no se podria cortar antes de guardar
  errorMessage.textContent = "";
  saveUser({ ...user, loggedIn: true });

  // segun el rol lo mando a su home
  if (user.role === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else {
    navigate("/src/pages/client/home/home.html");
  }
});
