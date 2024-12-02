import { appName } from "@/utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='text-center p-6'>
      ©Copyright {year}. All Rights Reserved. {appName}
    </footer>
  );
}
