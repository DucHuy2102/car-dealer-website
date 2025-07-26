import { routes } from '@/config/routes';
import { Favourites } from '@/config/types';
import { redisStore } from '@/lib/redis-store';
import { getSourceId } from '@/lib/source-id';
import { navLinks } from '@/lib/utils';
import { HeartIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

export default async function PublicHeader() {
    const sourceId = await getSourceId();
    const favourites = await redisStore.get<Favourites>(sourceId ?? '');

    return (
        <header className='flex items-center justify-between px-4 h-16 bg-transparent gap-x-6'>
            <div className='flex flex-1 items-center'>
                <Link href={routes.home} className='flex items-center gap-2'>
                    <Image
                        alt='Logo'
                        width={300}
                        height={100}
                        src='/logo.svg'
                        className='relative'
                    />
                </Link>
            </div>
            <nav className='hidden md:block'>
                {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className='group font-heading rounded-sm px-3 py-2 text-base text-foreground hover:text-primary 
                    transition-all duration-200 ease-in-out font-semibold uppercase'
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <Button asChild variant={'ghost'} size={'icon'} className='relative inline-block group'>
                <Link href={routes.favourites}>
                    <div
                        className='flex group-hover:bg-red-500 duration-200 transition-colors ease-in-out
                        items-center justify-center w-10 h-10 bg-muted rounded-full'
                    >
                        <HeartIcon className='w-6 h-6 text-primary group-hover:text-white group-hover:fill-white' />
                    </div>
                    <div
                        className='absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full 
                    bg-red-500 text-white group-hover:bg-primary'
                    >
                        <span className='text-xs font-semibold'>
                            {favourites ? favourites.ids.length : 0}
                        </span>
                    </div>
                </Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'link'} size={'icon'} className='md:hidden border-none'>
                        <MenuIcon className='h-6 w-6 text-primary' />
                        <SheetTitle className='sr-only'>Toggle nav menu</SheetTitle>
                    </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-full max-w-xs p-4 bg-white'>
                    <nav className='grid gap-2'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className='flex items-center gap-2 py-2 text-sm font-medium 
                            text-gray-600 hover:text-gray-900'
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
}
