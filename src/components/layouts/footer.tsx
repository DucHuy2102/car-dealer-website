import { routes } from '@/config/routes';
import { navLinks } from '@/lib/utils';
import { SiInstagram, SiMeta, SiX } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '../shared/newsletter-form';

const socialLinks = [
    { id: 1, icon: <SiMeta size={24} />, href: 'https://facebook.com' },
    { id: 2, icon: <SiX size={24} />, href: 'https://twitter.com' },
    { id: 3, icon: <SiInstagram size={24} />, href: 'https://instagram.com' },
];

export default function PublicFooter() {
    return (
        <footer className='bg-gray-100 px-8 lg:px-0 py-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col space-x-2 gap-y-2'>
                    <Link className='flex items-center' href={routes.home}>
                        <Image
                            width={300}
                            height={100}
                            alt='logo'
                            className='h-8 relative'
                            src='/logo.svg'
                        />
                    </Link>
                    <div className='flex space-x-4'>
                        {socialLinks.map((link) => {
                            return (
                                <Link href={link.href} key={link.id}>
                                    {link.icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <ul className='space-y-1'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href} className='text-foreground hover:text-primary'>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <NewsletterForm />
            </div>
            <div className='container mx-auto mt-8 text-center text-gray-700'>
                <h4 className='text-lg font-bold text-primary'>Company Info</h4>
                <p>Company No. 123456789 | VAT No. GB123456789</p>
                <p className='italic'>
                    <span className='text-primary font-semibold'>Majestic Motors</span> is not
                    authorised and not regulated by the Financial Conduct Authority
                </p>
            </div>
        </footer>
    );
}
