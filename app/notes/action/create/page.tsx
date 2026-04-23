import NoteForm from "@/components/NoteForm/NoteForm";
import css from './CreateNote.module.css';

export const metadata = {
    title: 'Create Note',
    description: 'Create a new note',
    url: 'https://notehub.app/notes/action/create',
    openGraph: {
        title: 'Create Note',
        description: 'Create a new note',
        url: 'https://notehub.app/notes/action/create',
        image: [
            'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        ],
    },
};

export default function CreateNotePage() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm />
            </div>
        </main>
    );
}