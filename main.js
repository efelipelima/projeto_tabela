// Armazena os dados do contato em uma matriz
let contacts = [];

// Selecione a tabela e o formulário HTML
const table = document.getElementById('contacts');
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // impede o envio padrão do formulário

  // Selecione os campos de nome e telefone do formulário
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

const contact = {
    name: nameInput.value,
    phone: phoneInput.value
};

contacts.push(contact);

    const row = table.insertRow(-1); // -1 significa adicionar no final
    const nameCell = row.insertCell(0);
    const phoneCell = row.insertCell(1);
    nameCell.textContent = contact.name;
    phoneCell.textContent = contact.phone;

nameInput.value = '';
phoneInput.value = '';
});
