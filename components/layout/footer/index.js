import BlockSignUp from './components/SignUp';
import Terms from './components/Terms';
import HelpDealerChat from './components/helpdealerchat';

import FooterLinks from '@/components/Links/reveal';
import footerNavData from '@/data/nav-footer.json';

import Icons from '@/components/icons/';
import ThemeSwitch from '@/components/themeswitch';

export default function Footer() {
  const footerPadding = 'px-4';

  return (
    <footer className="pb-20 pt-4 lg:pt-12">
      <HelpDealerChat />

      <hr className="mx-auto my-4 max-w-screen-2xl border-t border-gray-300 md:my-12" />

      <ul className={`mx-auto max-w-screen-2xl sm:gap-2 lg:flex lg:gap-6 ${footerPadding}`}>
        <li className="mb-6 lg:mb-0 lg:max-w-lg">
          <BlockSignUp />

          <hr className="mt-6 w-full border-t border-gray-200" />
          <ul className="mt-4 text-center">
            <li className="text-sm">How are we doing?</li>
            <li className="text-sm">
              <a href="?oops=1" className="underline">
                Give us feedback
              </a>{' '}
              on this page.
            </li>
          </ul>
        </li>
        <li className="grow">
          <ul className="w-full gap-2 sm:grid sm:grid-cols-2 lg:gap-4 xl:grid-cols-4">
            {footerNavData.map((block, i) => {
              return (
                <li className="sm:mt-6 sm:pt-1 lg:mt-0 lg:pt-0" key={i}>
                  <FooterLinks {...block} key={i} />
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <hr className="mx-auto my-8 hidden max-w-screen-2xl border-t border-gray-300 sm:block" />

      <FooterLinks
        {...{
          title: {
            copy: 'Global Sites',
            className: ''
          },
          links: [
            { title: 'Canada' },
            { title: 'Europe' },
            { title: 'Australia' },
            { title: 'China' }
          ],
          className: `max-w-screen-2xl mx-auto items-center sm:justify-center lg:justify-start ${footerPadding}`,
          row: true,
          alignRight: false
        }}
      />

      <FooterLinks
        {...{
          title: {
            copy: 'Social',
            className: 'block sm:hidden'
          },
          links: [
            {
              title: 'Facebook',
              icon: <Icons icon="facebook" className="w-100 mr-1 dark:fill-white" />
            },
            {
              title: 'LinkedIn',
              icon: <Icons icon="linkedin" className="w-100 mr-1 dark:fill-white" />
            },
            {
              title: 'Instagram',
              icon: <Icons icon="instagram" className="w-100 mr-1 dark:fill-white" />
            },
            {
              title: 'Twitter',
              icon: <Icons icon="twitter" className="w-100 mr-1 dark:fill-white" />
            },
            {
              title: 'YouTube',
              icon: <Icons icon="youtube" className="w-100 mr-1 dark:fill-white" />
            }
          ],
          className: `max-w-screen-2xl mx-auto items-center sm:justify-center lg:justify-start ${footerPadding}`,
          row: true,
          alignRight: false
        }}
      />

      <FooterLinks
        {...{
          title: {
            copy: 'Terms',
            className: 'block sm:hidden'
          },
          className: `max-w-screen-2xl mx-auto ${footerPadding}`,
          component: (
            <Terms className="p-5 text-xs leading-tight dark:text-neutral-400 lg:p-0 lg:pt-8" />
          )
        }}
      />

      <ul
        className={`mx-auto grid max-w-screen-2xl items-center gap-4 sm:justify-center lg:grid-cols-2 lg:justify-start ${footerPadding}`}
      >
        <li className="lg:col-start-2 lg:row-start-1 lg:ml-auto">
          <FooterLinks
            {...{
              title: {
                copy: 'Legal',
                className: 'block md:hidden'
              },
              links: [
                { title: 'Privacy Policy' },
                { title: 'Terms of Use' },
                { title: 'Online Store Policies' }
              ],
              className: 'max-w-screen-2xl mx-auto',
              row: true
            }}
          />
        </li>
        <li className="text-center text-sm dark:text-neutral-200 lg:col-start-1 lg:row-start-1 lg:text-left">
          ©2022 Cubcadet. All Rights Reserved.
        </li>
      </ul>

      <div
        className={`col-span-3 mx-auto mt-6 max-w-screen-2xl text-center text-sm font-bold dark:text-white lg:text-left ${footerPadding}`}
      >
        If you experience any problems accessing this website,{' '}
        <br className="hidden sm:block lg:hidden" />
        please call us at 1-877-428-2349 for assistance.
      </div>

      <ThemeSwitch />
    </footer>
  );
}
