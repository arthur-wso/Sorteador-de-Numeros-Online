# Sorteador de Números Online

Projeto simples que sorteia um número aleatório entre dois valores que o usuário escolhe. Fiz para praticar HTML, CSS e JavaScript, principalmente a parte de pegar valores dos campos, validar e mostrar o resultado.

![Dado](assets/dado.png)

## Como funciona

O usuário digita o valor mínimo e o máximo e clica em "Sortear!". O resultado aparece em um alerta. Se o mínimo não for menor que o máximo, aparece um aviso pedindo para corrigir.

O sorteio é feito com esta linha:

```js
const result = Math.floor(Math.random() * (max - min + 1)) + min;
```

O `Math.random()` gera um decimal entre 0 e 1. Multiplicando por `(max - min + 1)` e arredondando para baixo, o número cai entre 0 e `max - min`. Somando o `min`, ele vai para dentro do intervalo escolhido, e o máximo também pode ser sorteado.

## Tecnologias

- HTML
- CSS (Flexbox)
- JavaScript

## Como rodar

```bash
git clone https://github.com/arthur-wso/Sorteador-de-Numeros-Online.git
```

Depois é só abrir o `index.html` no navegador.

## Autor

Arthur Pereira
[GitHub](https://github.com/arthur-wso) | [LinkedIn](https://www.linkedin.com/in/arthurpereirawso)
