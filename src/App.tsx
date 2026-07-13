import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { CopilotV2Landing } from './pages/CopilotV2Landing'
import { VariantTracker } from './components/VariantTracker'
import { PageMeta } from './seo/PageMeta'

const WhoIsItForLanding = lazy(() =>
  import('./pages/WhoIsItForLanding').then((m) => ({ default: m.WhoIsItForLanding })),
)
const FaqHubPage = lazy(() => import('./pages/FaqHubPage').then((m) => ({ default: m.FaqHubPage })))
const ComparePage = lazy(() => import('./pages/ComparePage').then((m) => ({ default: m.ComparePage })))
const CompareHubPage = lazy(() =>
  import('./pages/CompareHubPage').then((m) => ({ default: m.CompareHubPage })),
)
const JourneyHubPage = lazy(() =>
  import('./pages/JourneyHubPage').then((m) => ({ default: m.JourneyHubPage })),
)
const FeaturePage = lazy(() => import('./pages/FeaturePage').then((m) => ({ default: m.FeaturePage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const ConditionPage = lazy(() =>
  import('./pages/ConditionPage').then((m) => ({ default: m.ConditionPage })),
)
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function FaqTopicRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? `/conditions/${slug}` : '/faq'} replace />
}

function RouteFallback() {
  return <div className="mp-route-fallback" aria-hidden="true" />
}

function App() {
  return (
    <>
      <VariantTracker />
      <PageMeta />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<CopilotV2Landing />} />
          <Route path="/journey" element={<JourneyHubPage />} />
          <Route path="/for" element={<WhoIsItForLanding />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="/faq" element={<FaqHubPage />} />
          <Route path="/faq/:slug" element={<FaqTopicRedirect />} />
          <Route path="/conditions/:slug" element={<ConditionPage />} />
          <Route path="/compare/:slug" element={<ComparePage />} />
          <Route path="/compare" element={<CompareHubPage />} />
          <Route path="/features/:slug" element={<FeaturePage />} />
          <Route path="/features" element={<Navigate to="/features/trackers" replace />} />

          {/* Legacy / lab URLs → home (keep bookmarks from indexing experiments) */}
          <Route path="/copilot-v2" element={<Navigate to="/" replace />} />
          <Route path="/record" element={<Navigate to="/" replace />} />
          <Route path="/record-v2" element={<Navigate to="/" replace />} />
          <Route path="/navigators" element={<Navigate to="/" replace />} />
          <Route path="/navigators-v2" element={<Navigate to="/" replace />} />
          <Route path="/clarity" element={<Navigate to="/" replace />} />
          <Route path="/clarity-v2" element={<Navigate to="/" replace />} />
          <Route path="/clarity-v4" element={<Navigate to="/" replace />} />
          <Route path="/journey-lab" element={<Navigate to="/" replace />} />
          <Route path="/flight" element={<Navigate to="/" replace />} />
          <Route path="/guided" element={<Navigate to="/" replace />} />
          <Route path="/copilot" element={<Navigate to="/" replace />} />
          <Route path="/onboard" element={<Navigate to="/" replace />} />
          <Route path="/flow" element={<Navigate to="/" replace />} />
          <Route path="/discovery" element={<Navigate to="/" replace />} />
          <Route path="/scroll-gut" element={<Navigate to="/" replace />} />
          <Route path="/system-section" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
