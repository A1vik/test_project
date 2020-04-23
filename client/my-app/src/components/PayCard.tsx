import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import InputMask from "react-input-mask";
import useForm from '../hooks/form.hook';
import { validate } from '../utils/validateForm';
import { Modal } from './Modal';
import { useHttp } from '../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { Operator } from '../types/types';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25%;
  width: 50%;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  border-radius: 5px;

  @media (max-width: 650px) {
    margin-left: 0;
    width: auto;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const PhoneLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (max-width: 650px) {
    font-size: 1.2rem;
  }
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #1e88e5;
  -webkit-box-shadow: 0 1px 0 0 #1e88e5;
  box-shadow: 0 1px 0 0 #1e88e5;
  margin-bottom: 1.5rem;
`

const StyledInputMask = styled(InputMask)`
  margin-bottom: 1.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #1e88e5;
  -webkit-box-shadow: 0 1px 0 0 #1e88e5;
  box-shadow: 0 1px 0 0 #1e88e5;
`

const Btn = styled.button`
  box-sizing: border-box;
  padding: .3rem .7rem;
  background-color: #ffd54f;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  transition: background-color .2s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    background-color: #ffecb3;
  }
`

const ErrorP = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  color: red;
`

const ImgOperator = styled.img`
  max-width: 200px;
  height: auto;

  @media (max-width: 500px) {
    order: -1;
  }
`

type Props = {
  operator: Operator
}

export const PayCard = ({operator}: Props) => {
  const history = useHistory();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { request } = useHttp();
  const isPay = useCallback(async () => {
    try {
      const fetched = await request(`/api/result`);
      setIsSuccess(fetched === 'success');
      setIsModal(true)
    } catch (e) {console.log(e)}
  }, [request]);

  const { values, errors, handleChange, handleSubmit} = useForm(isPay, validate);
  const [ isModal, setIsModal ] = useState<boolean>(false);

  const onRequestClose = () => {
    setIsModal(false);
    if (isSuccess) {
      history.push('/');
    }
  }

  return(
    <Card>
      {isModal && <Modal isSuccess={isSuccess} onRequestClose={onRequestClose} />}
      <form action="/pay" method="POST" onSubmit={handleSubmit}>
        <InputField>
          <PhoneLabel htmlFor="phone">
            Введите номер телефона:
          </PhoneLabel>
          <StyledInputMask
            onChange={handleChange}
            value={values.phone}
            mask="+7 (999) 999-99-99"
            id="phone"
            placeholder="Номер телефона"
            name="phone"
            required
          />
          {errors.phone && (
            <ErrorP>{errors.phone}</ErrorP>
          )}
        </InputField>
        <InputField>
          <PhoneLabel htmlFor="sum">
            Введите сумму (максимум 1000р):
          </PhoneLabel>
          <StyledInput
            onChange={handleChange}
            value={values.sum}
            id="sum"
            placeholder="Сумма"
            name="sum"
            required
          />
          {errors.sum && (
            <ErrorP>{errors.sum}</ErrorP>
          )}
        </InputField>
        <Btn type="submit" >Оплатить</Btn>
      </form>
      <ImgOperator src={operator.image} />
    </Card>
  )
}