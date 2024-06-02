import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx("max-w-screen-xl mx-auto w-full p-4 sm:p-6", className)}
    >
      {children}
    </section>
  );
};

export default Container;
