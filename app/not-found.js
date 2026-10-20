import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

const LINKS = [
  ['Courses', '/programs'],
  ['IIT JEE coaching in Gurgaon', '/jee-coaching-gurgaon'],
  ['NEET coaching in Gurgaon', '/neet-coaching-gurgaon'],
  ['Chemistry classes', '/chemistry-classes-gurgaon'],
  ['Contact', '/contact'],
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#f5f7ff] px-4 pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">404</p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] text-slate-950 mt-3">
          This page moved.
          <span className="block text-slate-400">These ones didn’t.</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} className="h-11 px-5 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-sm font-semibold text-slate-900 inline-flex items-center">
              {label}
            </Link>
          ))}
        </div>
        <Link href="/" className="inline-flex mt-6 h-12 px-6 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold items-center">Go to the home page</Link>
      </div>
    </section>
  );
}
