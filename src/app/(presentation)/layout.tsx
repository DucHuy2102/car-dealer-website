import PublicLayout from '@/components/layouts/public-layout';
import type { PropsWithChildren } from 'react';

export default function layout(props: PropsWithChildren) {
    return <PublicLayout>{props.children}</PublicLayout>;
}
