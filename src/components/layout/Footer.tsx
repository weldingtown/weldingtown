import { appName } from "@/utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='text-center font-medium p-6 text-lg'>
      ©Copyright {year}. All Rights Reserved. {appName}
    </footer>
  );
}
