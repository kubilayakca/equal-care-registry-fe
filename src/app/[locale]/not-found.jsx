import { NotFoundPage } from '@/partials/not-found';

export const metadata = {
  other: {
    status: 404,
  },
};

export default async function NotFound() {
  return <NotFoundPage />;
}
