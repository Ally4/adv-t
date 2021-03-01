exports.generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?';

  let password = '';
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * Math.floor(chars.length));
    password += chars[index];
  }
  return password;
};
