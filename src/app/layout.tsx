import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Car Dealer Website',
    description: 'Create a website using NextJS',
    icons: 'logo.ico',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='antialiased'>{children}</body>
        </html>
    );
}
