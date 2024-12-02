import { appName } from '@/utils/constants';
import Head from 'next/head';
import { ReactNode } from 'react';

interface IHead {
  title?: string;
  desc?: string;
  children?: ReactNode;
}
export default function DynamicHead({
  title = appName,
  desc = appName,
  children,
}: IHead) {
  if (children) {
    return <Head>{children}</Head>;
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />
    </Head>
  );
}
