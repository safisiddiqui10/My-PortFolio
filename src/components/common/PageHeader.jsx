import SectionTitle from './SectionTitle';

/**
 * Header for inner pages: a back link, the page's h1, and an optional intro line.
 * Top padding clears the fixed navbar.
 */
export default function PageHeader({ back, title, children }) {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-10 sm:pb-14 lg:pb-20">
      {back}
      <SectionTitle as="h1" className="text-ink max-w-4xl mt-8">
        {title}
      </SectionTitle>
      {children && <div className="text-lg text-ink-2 max-w-2xl mt-5">{children}</div>}
    </header>
  );
}
