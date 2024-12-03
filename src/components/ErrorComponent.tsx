interface IError {
  message?: string;
}
export default function ErrorComponent({ message }: IError) {
  if (!message) return null;
  return <p className="text-right text-red-600 font-bold absolute -bottom-5 right-2 text-sm">{message}</p>;
}
