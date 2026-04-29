import { Inter, Lusitana } from 'next/font/google';

type FontType = {
  className: string;
  style: {
    fontFamily: string;
  };
};

export const inter: FontType = Inter({ subsets: ['latin'] });
export const lusitana: FontType = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });