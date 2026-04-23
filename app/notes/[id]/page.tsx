import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';
import { fetchNoteById } from '@/lib/api';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Note ${id}`,
    description: `Details of note ${id}`,
    openGraph: {
      title: `Note ${id}`,
      description: `Details of note ${id}`,
      url: `https://notehub.app/notes/${id}`,
      images: [
        'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      ],
    },
  };
}

export default async function NoteDetailsPage({
  params,
}: {
    params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id ],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}