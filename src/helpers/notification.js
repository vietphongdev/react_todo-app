import { store } from 'react-notifications-component';

const successNotification = (message) => {
  store.addNotification({
    title: 'Success!',
    message,
    type: 'success',

    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2000,
      showIcon: true,
    },
  });
};

export { successNotification };
