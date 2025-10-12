import Link from "next/link";

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-2">
      {/* <div>
        <Link href="/gallery/sidebar">Sidebar</Link>
      </div> */}
      <div>{children}</div>
    </div>
  );
}
