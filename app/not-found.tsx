import css from './NotFound.module.css';

export const metadata = {
  title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
  url: 'https://notehub.app/404',
  openGraph: {
    title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
    url: 'https://notehub.app/404',
    images: [
      'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
    ],
  },
};

export default function NotFound () {
    return (
        <>
        <h1 className={css.title}>
            404 - Page not found
            </h1>
<p className={css.description}>
    Sorry, the page you are looking for does not exist.
    </p>
        </>
    );
}