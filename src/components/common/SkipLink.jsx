/**
 * First focusable element on every page. Hidden until focused with the keyboard,
 * it lets keyboard and screen-reader users jump past the navigation to the content.
 */
export default function SkipLink() {
  function handleClick(event) {
    event.preventDefault();
    document.getElementById('main-content')?.focus();
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:inline-flex focus:items-center focus:h-12 focus:px-6 focus:rounded-[10px] focus:bg-ink focus:text-paper focus:text-[15px] focus:font-semibold"
    >
      Skip to content
    </a>
  );
}
