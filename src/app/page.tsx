import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div>
          Statically generated image from route:
        </div>

        <Image src="/cover-static" alt="Cover Static (Generated)" width={1200} height={630} />

        <div>
          Dynamically generated image from route:
        </div>

        <Image src="/cover-dynamic" alt="Cover Dynamic" width={1200} height={630} />

        <div>
          Static image loaded from public folder:
        </div>

        <Image src="/cover-static.png" alt="Cover Static" width={1200} height={630} />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
