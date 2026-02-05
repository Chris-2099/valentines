import { Suspense } from 'react';
import Main from './components/main';

export const dynamic = 'force-dynamic'

// page.tsx
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  );
}