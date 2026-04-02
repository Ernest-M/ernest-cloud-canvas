const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-foreground/30">
          © {new Date().getFullYear()} Ernest Muuo. All rights reserved.
        </p>
        <p className="text-xs text-foreground/20">
          Built with precision & purpose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
