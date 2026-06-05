import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WorkItem, StarRating } from '../components/WorkItem';
import type { StatRow } from '../components/WorkItem';
import { useBottomScrollConfetti } from '../hooks/useBottomScrollConfetti';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { trackEvent } from '../hooks/useAnalytics';

const caseStudyStats = (mau: string, reviewCount: string, reviewHref: string, awardText: string, awardHref: string): StatRow[] => [
  { value: mau, label: 'Monthly Active Users' },
  {
    value: <StarRating />,
    label: (
      <a
        href={reviewHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('external_link_click', { url: reviewHref, label: 'app_store_reviews' })}
      >{reviewCount} reviews↗</a>
    ),
  },
  {
    label: (
      <a
        href={awardHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('external_link_click', { url: awardHref, label: awardText })}
      >{awardText}↗</a>
    ),
  },
];

export const Home = () => {
  useBottomScrollConfetti();
  useScrollFadeIn('.mainWorkBox');

  return (
    <>
      <Header />

      <section id="goto_home">
        <div className="pageHome" id="main-content">
          <div>
            <h1>Bruce Lui...</h1>
            <h3>he/him</h3>
          </div>
          <div className="texttoright">
            <h4>... works as a Senior Product Designer at Ecosia.</h4>
            <h4>... is a Canadian living in Amsterdam, Netherlands.</h4>
            <h4>... has no opinion on having pineapples on his pizzas.</h4>
          </div>
        </div>
      </section>

      <section id="goto_portfolio">
        <div className="pageContent">
          <div className="contentContainer">
            <div className="sectionTitle">
              <h3>his featured works</h3>
            </div>

            <WorkItem
              variant="image"
              workClass="workEcosia"
              href="./ecosia.html"
              ariaLabel="View Ecosia case study"
              appIconClass="appIconEcosia"
              title="Ecosia"
              subtitle="green tech, search engine"
              stats={caseStudyStats(
                '20M+',
                '7.7k+',
                'https://apps.apple.com/us/app/ecosia-search-to-plant-trees/id670881887',
                'German Sustainability Award 2024',
                'https://www.linkedin.com/posts/ecosia_ecosia-wins-the-german-sustainability-award-activity-7268245915767881729-sWXQ',
              )}
              thumbnailDefault="/images/top_ecosia1.png"
              thumbnailHover="/images/top_ecosia2.png"
              thumbnailAlt="Ecosia search engine interface"
              deviceClass="deviceEcosia"
              heading="making it easier to fight climate change"
              buttonText="see case study"
              buttonHref="./ecosia.html"
              onCTAClick={() => trackEvent('case_study_click', { case_study: 'ecosia' })}
            />

            <WorkItem
              variant="image"
              workClass="workN26"
              href="./n26.html"
              ariaLabel="View N26 case study"
              appIconClass="appIconN26"
              title="N26"
              subtitle="fintech, digital banking"
              stats={caseStudyStats(
                '2M+',
                '11k+',
                'https://apps.apple.com/us/app/n26-love-your-bank/id956857223',
                "Forbes World's Best Bank 2021",
                'https://www.forbes.com/sites/antoinegara/2021/04/13/the-worlds-best-banks-2021-financiers-to-the-looming-economic-recovery/',
              )}
              thumbnailDefault="/images/top_N26_1.png"
              thumbnailHover="/images/top_N26_2.png"
              thumbnailAlt="N26 banking app interface"
              deviceClass="deviceN26"
              heading="engaging ways on how to save money"
              buttonText="see case study"
              buttonHref="./n26.html"
              onCTAClick={() => trackEvent('case_study_click', { case_study: 'n26' })}
            />

            <WorkItem
              variant="image"
              workClass="workTrivago"
              href="./trivago.html"
              ariaLabel="View trivago case study"
              appIconClass="appIconTrivago"
              title="trivago"
              subtitle="travel, hotel search"
              stats={caseStudyStats(
                '55M+',
                '256k+',
                'https://apps.apple.com/us/app/trivago-compare-hotel-prices/id376888389',
                'MobileAppDaily Best Hotel Booking App',
                'https://www.mobileappdaily.com/products/best-hotel-booking-apps',
              )}
              thumbnailDefault="/images/top_trivago1.png"
              thumbnailHover="/images/top_trivago2.png"
              thumbnailAlt="trivago hotel search interface"
              deviceClass="deviceTrivago"
              heading="helping travelers find their ideal hotel"
              buttonText="see case study"
              buttonHref="./trivago.html"
              onCTAClick={() => trackEvent('case_study_click', { case_study: 'trivago' })}
            />

            <WorkItem
              variant="video"
              workClass="workGetTech"
              href="https://www.youtube.com/watch?v=c5LC3Z_tKQM"
              ariaLabel="Watch Get Tech Together Conference talk on YouTube"
              appIconClass="appIconGetTech"
              title="Get Tech Together Conference 2019"
              subtitle="speaker"
              videoSrc="https://www.youtube.com/embed/c5LC3Z_tKQM"
              videoDuration="9m 39s"
              heading="how to bring more fun into our UI"
              buttonText="watch on YouTube"
              buttonHref="https://www.youtube.com/watch?v=c5LC3Z_tKQM"
              buttonExternal
              onCTAClick={() => trackEvent('external_link_click', { url: 'https://www.youtube.com/watch?v=c5LC3Z_tKQM', label: 'get_tech_video' })}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
