import { useState, useEffect } from 'react';
import { Values } from '../types/types';

const useForm = (callback: any, validate: any) => {

  const [values, setValues] = useState<Values>({phone: '', sum: ''});
  const [errors, setErrors] = useState<Values>({phone: '', sum: ''});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = (event: React.FormEvent) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;