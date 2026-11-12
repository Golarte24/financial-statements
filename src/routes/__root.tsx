import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kissena Baked Goods',
      },
    ],
   
links: [
  {
    rel: 'stylesheet',
    href: appCss,
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg',
  },
],
 
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
<body>
  <nav className="flex gap-6 border-b border-slate-600 p-4">
    <Link to="/">Home</Link>
    
<Link
  to="/disclosures"
  className="text-ink-soft hover:text-ink"
  activeProps={{
    className: "font-semibold underline decoration-brand underline-offset-4",
  }}
  activeOptions={{ exact: true }}
>
  Disclosures
</Link>

  </nav>
  {children}
  <TanStackDevtools

          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
