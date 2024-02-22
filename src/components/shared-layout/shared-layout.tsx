import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Layout } from './shared-layout.styled';

const SharedLayout = () => (
  <Layout>
    <Container>
      <Suspense fallback="en">
        <Outlet />
      </Suspense>
    </Container>
  </Layout>
);

export default SharedLayout;
