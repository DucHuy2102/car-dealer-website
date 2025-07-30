import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function ClassifiedCardSkeleton() {
    return (
        <Card className='border border-muted'>
            <div className='w-full relative'>
                <Skeleton className='w-full h-full aspect-3/2' />
            </div>
            <CardContent className='p-4 h-fit'>
                <div className='space-y-4 h-[180px]'>
                    <div className='space-y-2'>
                        <Skeleton className='h-6 w-3/4' />
                        <Skeleton className='h-4 w-full' />
                        <Skeleton className='h-4 w-3/4 mr-8' />
                    </div>
                    <div className='space-y-2'>
                        <div className='space-x-2 flex justify-around'>
                            <Skeleton className='w-1/12 h-4' />
                            <Skeleton className='w-1/12 h-4' />
                            <Skeleton className='w-1/12 h-4' />
                            <Skeleton className='w-1/12 h-4' />
                        </div>
                        <div className='space-x-2 flex justify-around'>
                            <Skeleton className='w-1/4 h-4' />
                            <Skeleton className='w-1/4 h-4' />
                            <Skeleton className='w-1/4 h-4' />
                            <Skeleton className='w-1/4 h-4' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Skeleton className='w-1/3 h-6' />
                        <Skeleton className='w-1/4 h-4' />
                    </div>
                </div>
                <div className='relative flex gap-x-2 justify-between'>
                    <Skeleton className='w-1/2 h-10' />
                    <Skeleton className='w-1/2 h-10' />
                </div>
            </CardContent>
        </Card>
    );
}
