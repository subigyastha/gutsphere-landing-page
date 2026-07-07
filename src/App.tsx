import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingLayout } from './layouts/LandingLayout'
import { CopilotV2Landing } from './pages/CopilotV2Landing'
import { RecordLanding } from './pages/RecordLanding'
import { NavigatorsLanding } from './pages/NavigatorsLanding'
import { ClarityLandingV2 } from './pages/ClarityLandingV2'
import { ClarityLandingV4 } from './pages/ClarityLandingV4'
import { GutSphereJourneyLanding } from './pages/GutSphereJourneyLanding'
import { FlightLanding } from './pages/FlightLanding'
import { GuidedJourneyLanding } from './pages/GuidedJourneyLanding'
import { CopilotLanding } from './pages/CopilotLanding'
import { OnboardLanding } from './pages/OnboardLanding'
import { FlowLanding } from './pages/FlowLanding'
import { DiscoveryLanding } from './pages/DiscoveryLanding'
import { ScrollGutLanding } from './pages/ScrollGutLanding'
import { ConditionStubPage } from './pages/ConditionStubPage'
import { VariantTracker } from './components/VariantTracker'

function App() {
  return (
    <>
      <VariantTracker />
      <Routes>
        <Route path="/" element={<CopilotV2Landing />} />
        <Route
          path="/record"
          element={
            <LandingLayout>
              <RecordLanding />
            </LandingLayout>
          }
        />
        <Route path="/record-v2" element={<Navigate to="/record" replace />} />
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
        <Route
          path="/journey"
          element={
            <LandingLayout>
              <GutSphereJourneyLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/flight"
          element={
            <LandingLayout>
              <FlightLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/guided"
          element={
            <LandingLayout>
              <GuidedJourneyLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/copilot"
          element={
            <LandingLayout>
              <CopilotLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/onboard"
          element={
            <LandingLayout>
              <OnboardLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/flow"
          element={
            <LandingLayout>
              <FlowLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/discovery"
          element={
            <LandingLayout>
              <DiscoveryLanding />
            </LandingLayout>
          }
        />
        <Route
          path="/scroll-gut"
          element={
            <LandingLayout>
              <ScrollGutLanding />
            </LandingLayout>
          }
        />
        <Route path="/copilot-v2" element={<CopilotV2Landing />} />
        <Route path="/conditions/:slug" element={<ConditionStubPage />} />
      </Routes>
    </>
  )
}

export default App
