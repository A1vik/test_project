import React, {useEffect} from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
	background: rgba(0, 0, 0, .65);
	bottom: 0;
	left: 0;
	overflow: auto;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1;
`

const ModalContainer = styled.div`
  background: #e3f2fd;
  border-radius: 5px;
  max-width: 100%;
  margin: 50px auto;
  padding: 15px;
  width: 560px;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
`

const Btn = styled.button`
  background: #1e88e5;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 10px 15px;
  transition: transform 100ms ease-out;

  &:hover {
    background: #1565c0;
    transform: scale(1.1);
  }
`

type Props = {
  isSuccess: boolean,
  onRequestClose: () => void
}

export const Modal = ({ onRequestClose, isSuccess }: Props) => {
	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<ModalBackdrop>
			<ModalContainer>
        <ModalTitle>{isSuccess ? 'Поздравляем': 'Ошибка'}</ModalTitle>
        {
          isSuccess
            ? <p>Ваш запрос успешно отправлен</p>
            : <p>Что то пошло не так, попробуйте снова</p>
        }
				
				<p>
					Для продолжения нажмите кнопку ниже или клавишу Esc.
				</p>
				<Btn type="button" onClick={onRequestClose}>
					{isSuccess ? 'На главную' : 'Еще раз'}
				</Btn>
			</ModalContainer>
		</ModalBackdrop>
	);
};