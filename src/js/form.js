import { sumOfMultiples } from "./function"

form.addEventListener("submit", async(event) => {
    event.preventDefault()

    if(!input.value || input.value < 0){
        return window.alert("Insira um Número Válido!")
    }

    const result = sumOfMultiples(input.value)

    contentResult.textContent = 'O Resultado é: '+result
})