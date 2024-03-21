import { useState } from "react";

export const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState({
    state: initialState,
    animationState: initialState,
  });

  const showModal = () => {
    setIsOpen({ ...isOpen, state: !isOpen.state });
    setTimeout(() => {
      setIsOpen({ ...isOpen, animationState: !isOpen.animationState });
    }, 250);
  };

  const closeModal = () => {
    setIsOpen({ ...isOpen, state: !isOpen.state });
    setTimeout(() => {
      setIsOpen({ ...isOpen, animationState: !isOpen.animationState });
    }, 250);
  };

  return { isOpen, showModal, closeModal };
};
