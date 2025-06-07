"use client";

interface CopyrightProps {
  appName: string;
}

export function Copyright({ appName }: CopyrightProps) {
  return (
    <div className="w-full text-center bg-black/90 text-gray-400 leading-8 text-xs p-2">
      <p>
        {appName && `Copyright &copy; ${appName} ${new Date().getFullYear()} |`}
        This website is developed by{" "}
        <a
          href="https://www.anmolagrawal.dev"
          className="font-bold no-underline hover:text-gray-300 transition-colors"
        >
          <span className="bg-gradient-to-r from-[#ee7752] via-[#e73c7e] via-[#23a6d5] to-[#23d5ab] bg-clip-text text-transparent bg-[length:500%_500%] animate-gradient whitespace-nowrap">
            Anmol Agrawal
          </span>
        </a>
      </p>
    </div>
  );
}
