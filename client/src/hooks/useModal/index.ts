import { useState } from "react";

export const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState({
    state: initialState,
    animationState: initialState,
  });

  const showModal = () => {
    setIsOpen({ ...isOpen, animationState: true });
    setTimeout(() => {
      setIsOpen({ ...isOpen, state: true });
    }, 250);
  };

  const closeModal = () => {
    setIsOpen({ ...isOpen, animationState: false });
    setTimeout(() => {
      setIsOpen({ ...isOpen, state: false });
    }, 250);
  };

  return { isOpen, showModal, closeModal };
};
