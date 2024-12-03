import myConfig from '@/utils/config';

interface IContact {
  name: string;
  city: string;
  phoneNumber: string;
  message: string;
}
const postContact = (data: IContact) => {
  const p = fetch(myConfig.dbURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          ID: 'INCREMENT',
          Name: data.name,
          City: data.city,
          Number: data.phoneNumber,
          Message: data.message,
          TimeStamp: new Date().toISOString(),
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default postContact;
