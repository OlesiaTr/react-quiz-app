import { Navigate, Route, Routes } from 'react-router-dom';

// components
import { SharedLayout } from './shared-layout';
import { lazy } from 'react';

// pages
const LanguageSelect = lazy(() => import('../pages/language-select-page.tsx'));
const GenderSelect = lazy(() => import('../pages/gender-select-page.tsx'));
const AgeSelect = lazy(() => import('../pages/age-select-page.tsx'));
const CritiqueSelect = lazy(() => import('../pages/critique-select-page.tsx'));
const TopicSelect = lazy(() => import('../pages/topic-select-page.tsx'));
const Loading = lazy(() => import('../pages/loading-page.tsx'));
const GetAccessViaEmail = lazy(
  () => import('../pages/get-access-via-email-page.tsx')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/quiz/1" replace />} />
        <Route path="quiz/1" element={<LanguageSelect />} />
        <Route path="quiz/2" element={<GenderSelect />} />
        <Route path="quiz/3" element={<AgeSelect />} />
        <Route path="quiz/4" element={<CritiqueSelect />} />
        <Route path="quiz/5" element={<TopicSelect />} />
        <Route path="loading" element={<Loading />} />
        <Route path="email" element={<GetAccessViaEmail />} />
      </Route>
    </Routes>
  );
};

export default App;
