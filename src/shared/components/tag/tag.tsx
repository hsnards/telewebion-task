export function Tag({ label }: { label: string }) {
  return (
    <span className="bg-[#FFFFFF33] text-white px-1 py-[2px] rounded-[2px] text-footnote">
      {label}
    </span>
  );
}
