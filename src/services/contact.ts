import myConfig from '@/utils/config';
import axios from 'axios';

interface IContact {
  name: string;
  city: string;
  phoneNumber: string;
  message: string;
}
const postContact = async (data: IContact) => {
  try {
    const response = await axios.post(
      myConfig.dbURL,
      {
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
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default postContact;
