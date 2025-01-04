import Image from 'next/image';
import Link from 'next/link';

const navigation = {
  main: [
    { name: 'about', href: '/about' },
    { name: 'blog', href: '/blog' },
    { name: 'customize', href: '/customize' },

    { name: 'contact', href: '/#contact' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '',
      iconSrc: '/svg/facebook.svg',
    },
    {
      name: 'LinkedIn',
      href: '',
      iconSrc: '/svg/linkedin.svg',
    },
    {
      name: 'YouTube',
      href: '',
      iconSrc: '/svg/youtube.svg',
    },
  ],
};

export default function Example() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <Image
                src={item.iconSrc}
                alt={item.name}
                width={24}
                height={24}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; Joseph Sardella | Coachella Valley Realtor | eXp Realty | Obsidian Group
        </p>
      </div>
    </footer>
  );
}
