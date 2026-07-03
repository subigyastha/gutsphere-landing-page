import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingLayout } from './layouts/LandingLayout'
import { RecordLanding } from './pages/RecordLanding'
import { NavigatorsLanding } from './pages/NavigatorsLanding'
import { ClarityLandingV2 } from './pages/ClarityLandingV2'
import { ClarityLandingV4 } from './pages/ClarityLandingV4'
import { ConditionStubPage } from './pages/ConditionStubPage'
import { VariantTracker } from './components/VariantTracker'

function App() {
  return (
    <>
      <VariantTracker />
      <Routes>
        <Route
          path="/"
          element={
            <LandingLayout>
              <RecordLanding />
            </LandingLayout>
          }
        />
        <Route path="/record-v2" element={<Navigate to="/" replace />} />
        <Route
          path="/navigators"
          element={
            <LandingLayout>
              <NavigatorsLanding />
            </LandingLayout>
          }
        />
        <Route path="/navigators-v2" element={<Navigate to="/navigators" replace />} />
        <Route path="/clarity" element={<Navigate to="/clarity-v2" replace />} />
        <Route
          path="/clarity-v2"
          element={
            <LandingLayout>
              <ClarityLandingV2 />
            </LandingLayout>
          }
        />
        <Route
          path="/clarity-v4"
          element={
            <LandingLayout>
              <ClarityLandingV4 />
            </LandingLayout>
          }
        />
        <Route path="/conditions/:slug" element={<ConditionStubPage />} />
      </Routes>
    </>
  )
}

export default App
