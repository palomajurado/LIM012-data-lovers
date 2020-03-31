
const roles = document.querySelectorAll('.role');
const rolesInfo = document.querySelectorAll('.descriptionClass');
roles.forEach((role) => {
  role.addEventListener('click', () => {
    const term = role.getAttribute('data-value');
    rolesInfo.forEach((info) => {
      info.classList.add('hidden');
      if (info.id === term) {
        info.classList.remove('hidden');
      }
    });
  });
});
