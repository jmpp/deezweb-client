
const fakeUser = {
  firstname: 'John',
  lastname: 'Doe',
  avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
};

export default {
  getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeUser);
      }, 1000);
    });
  },
};
