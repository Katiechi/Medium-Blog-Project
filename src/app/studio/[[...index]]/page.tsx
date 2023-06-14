import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// This is a simple layout component
function Layout({ children }) {
  return <div>{children}</div>;
}

export default function StudioPage() {
  return (
    <Layout>
      <NextStudio config={config} />
    </Layout>
  );
}
