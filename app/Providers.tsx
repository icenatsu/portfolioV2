'use client';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import dynamic from "next/dynamic";

const LanguageContextProvider = dynamic(
  () => import('./context/LanguageContext'),
  { ssr: false }
);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageContextProvider>
          <Toaster />
          {children}
        </LanguageContextProvider>
      </ThemeProvider>
    </>
  );
};
