// Campos obrigatorios
export const required = value => (value || typeof value === 'number' ? undefined : 'Campo obrigatório')

// Campos para valores numericos
export const number = value => value && isNaN(Number(value)) ? 'Informe um número válido' : undefined

// Campos para e-mail
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Formato de e-mail inválido'  : undefined

// CPF



// Data