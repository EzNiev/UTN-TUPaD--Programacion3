import './style.css'

const valor = document.querySelector<HTMLParagraphElement>("#valor");
const btnSumar = document.querySelector<HTMLButtonElement>("#btn-sumar");
const btnRestar = document.querySelector<HTMLButtonElement>("#btn-restar");

let contador: number = 0;

const actualizarValor = (): void => {
  if (valor) {
    valor.textContent = String(contador);
  }
};

btnSumar?.addEventListener("click", () => {
  contador++;
  actualizarValor();
});

btnRestar?.addEventListener("click", () => {
  contador--;
  actualizarValor();
});

actualizarValor();