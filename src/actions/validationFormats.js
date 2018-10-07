// Campos obrigatorios
export const obrigatorio = value => (value || typeof value === 'number' ? undefined : 'Campo obrigatório')

// Campos para valores numericos
export const number = value => value && isNaN(Number(value)) ? 'Informe um número válido' : undefined

// Campos para e-mail
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Formato de e-mail inválido'  : undefined

// CPF
export const cpf = value => value && !/^(\d{3}\.){2}\d{3}-\d{2}$|^(\d{11})$/i.test(value) ? 'O CPF informado é inválido' : undefined;

// Comparar senhas
export const compararSenhas = (value, allValues) => value !== allValues.senha ? "As senhas não coincidem" : undefined;

// Comparar e-mails
export const compararEmails = (value, allValues) => value !== allValues.email ? "Os e-mails não coincidem" : undefined;


// Tamanho maximo
export const maximo = max => value => value && value.length > max ? "Este campo permite, no máximo, " + max + " caracteres" : undefined

// Tamanho minimo
export const minimo = min => value => value && value.length < min ? "Este campo requer, no mínimo, " + min + " caracteres" : undefined