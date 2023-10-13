import IconChat from '@/icons/chat';
import Help from '@/components/icons/help';
import StoreIcon from '@/components/icons/store';

export default function FooterHelp({}) {
  const linkCSS = 'underline flex items-center justify-center font-bold min-h-default';
  const subCSS = 'text-sm text-center w-full';

  return (
    <>
      <ul className="mx-autogrid mx-auto grid max-w-screen-2xl grid-cols-1 p-4 md:grid-cols-3">
        <li className="mb-6">
          <a href="?oops=1" className={linkCSS}>
            <Help className="mr-1 h-8" style={{ minWidth: '2em', maxWidth: '2em' }} /> Help Center
          </a>
          <div className={subCSS}>Find the answers to your questions.</div>
        </li>
        <li className="mb-6">
          <a href="?oops=1" className={linkCSS}>
            <StoreIcon className="mr-1 h-8" style={{ minWidth: '2em', maxWidth: '2em' }} /> Find a
            Dealer
          </a>
          <div className={subCSS}>Cub Cadet Dealers are here to help.</div>
        </li>
        <li className="">
          <a href="?oops=1" className={linkCSS}>
            <IconChat className="mr-1 h-8" style={{ minWidth: '2em', maxWidth: '2em' }} /> Chat
          </a>
          <div className={subCSS}>Mon–Fri, 6am–8pm EST</div>
        </li>
      </ul>
    </>
  );
}
