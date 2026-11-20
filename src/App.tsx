import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import { Meta } from '@/components/Meta'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { getArticle } from '@/data/articles'
import { LanguageProvider } from '@/lib/language'

const Articles = lazy(() => import('@/pages/Articles'))
const Article = lazy(() => import('@/pages/Article'))
const Videos = lazy(() => import('@/pages/Videos'))
const Images = lazy(() => import('@/pages/Images'))
const Store = lazy(() => import('@/pages/Store'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Edit = lazy(() => import('@/pages/Edit'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function Loading() {
  return <div className="px-gutter py-24 text-sm text-muted-foreground">Loading…</div>
}
/* The shell: a top bar with the mark, the six sections and the language pair,
   and a footer on the deep teal that carries the times, the address and the
   social accounts. A visitor at 360 gets one menu button and the language
   switch, which never collapses. */
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

function Page({ meta, children }: { meta: ReactNode; children: ReactNode }) {
  return (
    <Layout>
      {meta}
      {children}
    </Layout>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            index
            element={
              <Page
                meta={
                  <Meta
                    title="Bapatla Ekklesia — a community of believers in Bapatla"
                    description="Articles, teaching, videos and drawings from Bapatla Ekklesia, meeting on Church Street in Bapatla since 1998. In English and Telugu."
                  />
                }
              >
                <Home />
              </Page>
            }
          />
          <Route
            path="articles"
            element={
              <Page
                meta={
                  <Meta
                    title="Articles — Bapatla Ekklesia"
                    description="Writing from the community at Bapatla Ekklesia: the Thursday study, the Sunday teaching, and notes from members, in English and Telugu."
                  />
                }
              >
                <Articles />
              </Page>
            }
          />
          <Route
            path="articles/:slug"
            element={
              <Page
                meta={
                  <Meta
                    title={`${getArticle(':slug')?.title.en ?? 'Article'} — Bapatla Ekklesia`}
                    description={getArticle(':slug')?.summary.en ?? 'Writing from Bapatla Ekklesia.'}
                  />
                }
              >
                <Article />
              </Page>
            }
          />
          <Route
            path="videos"
            element={
              <Page
                meta={
                  <Meta
                    title="Video library — Bapatla Ekklesia"
                    description="Teaching, study and prayer recorded at Bapatla Ekklesia, and the link to the community's YouTube channel."
                  />
                }
              >
                <Videos />
              </Page>
            }
          />
          <Route
            path="images"
            element={
              <Page
                meta={
                  <Meta
                    title="Image library — Bapatla Ekklesia"
                    description="The cover of the community's book Eden: Our Last Home, the room on a Sunday, the lamp and the building on Church Street, in Bapatla Ekklesia's own colours."
                  />
                }
              >
                <Images />
              </Page>
            }
          />
          <Route
            path="store"
            element={
              <Page
                meta={
                  <Meta
                    title="Digital store — Bapatla Ekklesia"
                    description="Study guides, a Telugu songbook and a workbook prepared by the staff at Bapatla Ekklesia, in English and Telugu."
                  />
                }
              >
                <Store />
              </Page>
            }
          />
          <Route
            path="store/:slug"
            element={
              <Page
                meta={
                  <Meta
                    title="A study resource — Bapatla Ekklesia"
                    description="What is inside this resource, the price in rupees, and how to order it from the church office today."
                  />
                }
              >
                <ProductPage />
              </Page>
            }
          />
          <Route
            path="about"
            element={
              <Page
                meta={
                  <Meta
                    title="About and what we believe — Bapatla Ekklesia"
                    description="Bapatla Ekklesia has met on Church Street since 1998: the community, its four statements of belief, and how the week is kept."
                  />
                }
              >
                <About />
              </Page>
            }
          />
          <Route
            path="contact"
            element={
              <Page
                meta={
                  <Meta
                    title="Contact and map — Bapatla Ekklesia"
                    description="Email, phone and address for Bapatla Ekklesia on Church Street, a map, the meeting times this week, and the social accounts."
                  />
                }
              >
                <Contact />
              </Page>
            }
          />
          <Route
            path="edit"
            element={
              <Page
                meta={
                  <Meta
                    title="Where each file goes — Bapatla Ekklesia"
                    description="Which folder each picture, store PDF, video and article goes into, the exact file name to give it, and a copyable example for each, kept in the church's GitHub repository."
                  />
                }
              >
                <Edit />
              </Page>
            }
          />
          <Route
            path="*"
            element={
              <Page
                meta={
                  <Meta
                    title="Page not found — Bapatla Ekklesia"
                    description="This address does not exist on the Bapatla Ekklesia site."
                  />
                }
              >
                <NotFound />
              </Page>
            }
          />
        </Routes>
      </Suspense>
    </LanguageProvider>
  )
}
