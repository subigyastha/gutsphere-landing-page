import { LegalDocumentPage } from '../components/legal/LegalDocumentPage'
import { TERMS_DOCUMENT } from '../components/legal/legalContent'

export function TermsPage() {
  return <LegalDocumentPage doc={TERMS_DOCUMENT} />
}
