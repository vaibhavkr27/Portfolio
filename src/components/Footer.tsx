export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Vaibhav Kumar. All rights reserved.</p>
        <p>Designed & built with care.</p>
      </div>
    </footer>
  );
}
