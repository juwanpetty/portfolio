export function PostFloatingMenu() {
  return (
    <div className="fixed bottom-5 left-1/2 inline-flex h-9 -translate-x-1/2 items-center gap-1 rounded-3xl border border-solid border-neutral-600 bg-neutral-700 p-1">
      <button className="flex h-6.5 cursor-pointer items-center rounded-full border border-solid border-[#966DF6] bg-[#8B5DF5] px-2 text-sm font-medium text-white transition-colors hover:bg-[#966DF6]">
        Clip highlights
      </button>
      <button className="hover:border=[#777] flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-full border border-solid border-[#5C5C5C] bg-[#4A4A4A] text-[#BEBEBE] transition-colors hover:bg-[#686868] hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="h-4 w-4 min-w-4"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <line x1="14" y1="4" x2="4" y2="14"></line>
            <line x1="4" y1="4" x2="14" y2="14"></line>
          </g>
        </svg>
      </button>
    </div>
  );
}
