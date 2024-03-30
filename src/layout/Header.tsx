const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col items-center prose dark:prose-invert w-full mx-auto !max-w-none mb-14">
      <h1 className="bg-gradient-to-r from-[#3F52FF] to-primary bg-clip-text text-transparent mb-2">
        {title}
      </h1>
      <h4 className="text-lg">{subtitle}</h4>
    </div>
  );
};

export default Header;
