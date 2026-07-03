import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { PhoneScreenshot } from '../components/clarity/PhoneScreenshot'
import { LandingLayout } from '../layouts/LandingLayout'
import {
  conditionHubHref,
  conditionStubs,
  getConditionFrom,
  PRIMARY_CTA_LABEL,
  SIGNUP_URL,
} from '../constants'

export function ConditionStubPage() {
  const { slug } = useParams<{ slug: string }>()
  const condition = slug ? conditionStubs[slug] : undefined
  const hubHref = conditionHubHref(getConditionFrom())

  useEffect(() => {
    document.documentElement.dataset.variant = getConditionFrom()
  }, [])

  if (!condition) {
    return (
      <LandingLayout>
        <div className="clarity-landing section-pad container-narrow text-center">
          <h1 className="display-heading">Condition not found</h1>
          <p className="body-lg mt-4">
            <Link to={hubHref} className="text-gs-coral hover:underline">
              Back to condition hub
            </Link>
          </p>
        </div>
      </LandingLayout>
    )
  }

  return (
    <LandingLayout>
      <div className="clarity-landing">
        <section className="section-pad bg-gs-sand">
          <div className="container-narrow">
            <Link to={hubHref} className="text-base font-medium text-gs-coral hover:underline">
              &larr; All conditions
            </Link>

            <h1 className="display-heading mt-6">{condition.label}</h1>
            <p className="body-lg mt-4 max-w-xl">
              Gutsphere helps you track, understand, and prepare — at your own pace.
            </p>

            <ul className="mt-10 space-y-4">
              {condition.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-4 rounded-2xl border border-gs-border bg-gs-card p-5 text-lg text-gs-text-primary"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <PhoneScreenshot
                src={`/screenshots/condition-${slug}.png`}
                alt={`${condition.label} screen`}
                label={`${condition.label} app screen`}
                className="shrink-0"
              />
              <div className="pt-4">
                <Button href={SIGNUP_URL} data-cta="primary">
                  {PRIMARY_CTA_LABEL}
                </Button>
                <p className="mt-4 text-base text-gs-text-muted">
                  Free to start. No diagnosis required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LandingLayout>
  )
}
