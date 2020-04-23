import { Values } from "../types/types";

export const validate = (values: Values) => {
  let errors: Values = {};
  if (!values.phone) {
    errors.phone = 'Телефон - обязательное поле';
  } else if (values.phone.includes('_')) {
    errors.phone = 'Неверный номер';
  }
  if (!values.sum) {
    errors.sum = 'Сумма - обязательное поле';
  } else if (+values.sum < 1 || +values.sum > 1000) {
    errors.sum = 'Введите сумму от 1 до 1000';
  } else if (isNaN(parseInt(values.sum))) {
    errors.sum = 'Введите число';
  }
  return errors;
};