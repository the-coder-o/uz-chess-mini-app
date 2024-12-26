import { Helmet } from 'react-helmet-async'

const metadata = {
  title: 'Minimals UI: The starting point for your next project',
  description: 'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
}

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <div className={'flex h-[80vh] items-center justify-center'}>
        <h1>Home Page</h1>
      </div>
    </>
  )
}
