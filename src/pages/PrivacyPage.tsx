import { LegalDocumentPage } from '../components/legal/LegalDocumentPage'
import { PRIVACY_DOCUMENT } from '../components/legal/legalContent'

export function PrivacyPage() {
  return <LegalDocumentPage doc={PRIVACY_DOCUMENT} />
}
