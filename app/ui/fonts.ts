import { Inter, Lusitana } from 'next/font/google';

// メインのフォント（Inter）を読み込む
export const inter = Inter({ subsets: ['latin'] });

// ロゴ用のフォント（Lusitana）を読み込む
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});