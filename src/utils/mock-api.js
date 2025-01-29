const createRandomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .split('T')[0];
};

const createRandomPhoneNumber = () => {
  return `+(90) ${Math.floor(500 + Math.random() * 90)} ${Math.floor(Math.random() * 9999999)}`;
};

const TRtoENGCharacter = (text) => {
  const charMap = {
    ç: 'c',
    Ç: 'C',
    ğ: 'g',
    Ğ: 'G',
    ı: 'i',
    İ: 'I',
    ö: 'o',
    Ö: 'O',
    ş: 's',
    Ş: 'S',
    ü: 'u',
    Ü: 'U',
  };

  return text.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => charMap[match]);
};

const createRandomEmail = (firstName, lastName) => {
  const changetoENGFirstName = TRtoENGCharacter(firstName.toLowerCase());
  const changetoENGLastName = TRtoENGCharacter(lastName.toLowerCase());
  return `${changetoENGFirstName}.${changetoENGLastName}@ing.com`;
};

const firstNames = [
  'Baran',
  'Meryem',
  'Deniz',
  'Yusuf',
  'Duru',
  'Kaan',
  'Zeynep',
  'Rüzgar',
  'Efe',
  'Asya',
];
const lastNames = [
  'Şahin',
  'Bolu',
  'Kurtuluş',
  'Öztürk',
  'Aksoy',
  'Çetin',
  'Acar',
  'Yıldız',
  'Demirtaş',
  'Kılınç',
];
const departments = ['Analytics', 'Tech'];
const positions = ['Junior', 'Medior', 'Senior'];

export const generateMockEmployees = (count = 50) => {
  return Array.from({length: count}, (_, index) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
      id: (index + 1).toString(),
      firstName,
      lastName,
      dateOfEmployment: createRandomDate(new Date(2010, 0, 1), new Date()),
      dateOfBirth: createRandomDate(new Date(1950, 0, 1), new Date(2003, 0, 1)),
      phoneNumber: createRandomPhoneNumber(),
      email: createRandomEmail(firstName, lastName),
      department: departments[Math.floor(Math.random() * departments.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      selected: false,
    };
  });
};