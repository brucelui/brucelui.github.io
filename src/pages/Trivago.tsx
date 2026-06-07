import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PasswordGate } from '../components/PasswordGate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SubWorkBox } from '../components/SubWorkBox';
import { useBottomScrollConfetti } from '../hooks/useBottomScrollConfetti';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { Device3DMockup } from '../components/Device3DMockup';
import { DescriptionIcon } from '../components/DescriptionIcon';
import { ProjectAccordion } from '../components/ProjectAccordion';

export const Trivago = () => {
  useBottomScrollConfetti();
  useScrollFadeIn();

  return (
    <>
      <Header />

      <div className="projectTopContainer" id="main-content">
        <div className="projectTop projectTopNoBackground">
          <Device3DMockup screenImage="/images/trivago_screen.png" restRX={-0.8} restRZ={1.1} startRX={-Math.PI / 2} startRZ={-Math.PI / 4} restScale={3.2} restX={-3} restY={-5.5} mobileRestX={0} mobileRestY={-1.5} mobileRestScale={2.2} bgClass="device3dBgTrivago" />
          <div className="projectTopContent">
            <div className="appTitle">
              <div className="appIcon appIconTrivago"></div>
              <div className="appTitleDescription">
                <h4>trivago</h4>
                <h5>travel, hotel search</h5>
              </div>
            </div>
            <div className="projectTopContentList">
              <div className="projectTopContentListRow">
                <div className="projectTopContentListItem">
                  <h5>Years worked</h5>
                  <h4>2017-2019</h4>
                </div>
                <div className="projectTopContentListItem">
                  <h5>Type of work</h5>
                  <h4>Full-time</h4>
                </div>
              </div>
              <div className="projectTopContentListRow">
                <div className="projectTopContentListItem">
                  <h5>Type of work</h5>
                  <h4>UX, UI, Research</h4>
                </div>
                <div className="projectTopContentListItem">
                  <h5>Where to find project</h5>
                  <h4>
                    <a href="https://itunes.apple.com/us/app/id376888389?mt=8">Apple App Store</a>,{' '}
                    <br />
                    <a href="https://play.google.com/store/apps/details?id=com.trivago&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Google Play Store</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pageContent">
        <div className="contentContainer projectsOnly">

          <div className="headerblocker"></div>
          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Long story short</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectSectionGroups">
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-01.svg" />
                    <h4>What did I do?</h4>
                  </div>
                  <ul>
                    <li>Had 1 month to redesigned and build the entire mobile app from scratch!</li>
                    <li>Iterated and optimized heavily on the results page.</li>
                    <li>Ran design sprints and advocated for motion UX/UI to the company.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-02.svg" />
                    <h4>My impacts</h4>
                  </div>
                  <ul>
                    <li>The redesigned app received a Google Playstore Editor's Choice and won <a href="https://premio.canaltech.com.br/2017/?utm_source=canaltech&utm_medium=premio-2018&utm_campaign=botao-edicao-2017" target="_blank" rel="noopener noreferrer">Best Travel App of the Year</a> from popular Brazilian tech blog Canaltech.</li>
                    <li><b>Significant increase in impressions</b> on detail pages which showed users are exploring more hotel options and finding more relevant information to aid their decision process.</li>
                    <li>The series of optimizations resulted in an <b>increase in CTR and better performance</b> than the mobile website counterpart.</li>
                  </ul>
                </div>
              </div>
              <ProjectAccordion title="Never heard of trivago?" appIconClass="appIconTrivago">
                <ul>
                  <li>trivago is a travel tech company based in Düsseldorf, Germany.</li>
                  <li>They are known for their search engine for hotels and other types of accommodations.</li>
                  <li>At the time there were around 1200+ employees with around 25+ designers.</li>
                </ul>
              </ProjectAccordion>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Problem</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectSectionGroups">
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-03.svg" />
                    <h4>What does the app do?</h4>
                  </div>
                  <ul>
                    <li>Helps users explore and compare hotel options from multiple OTA websites (ex. Booking.com, Expedia, etc)</li>
                    <li>Enables users to find the best deals that suit their needs.</li>
                    <li>Shows imagery, amenities, reviews and more to help users understand each option.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-04.svg" />
                    <h4>User Problems Identified</h4>
                  </div>
                  <ul>
                    <li>Power users like to explore their options before going straight to booking; and did not feel satisfied to do so with the old designs.</li>
                    <li>Some information displayed was confusing. (ex. hotel stars mistaken as rating stars)</li>
                    <li>Features like favouriting hotels for later and comparing between the options were missing.</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/trivago_1.png" alt="" />
              <img className="imgShowcase" src="/images/trivago_2.png" alt="" />
              <p>The code base was too old to continue with development, so we took this as an opportunity to also reimagine what the mobile experience would be like. The only problem is that we were given a tight timeline of one month to pull everything off.</p>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Constraints</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectSectionGroups">
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-05.svg" />
                    <h4>Top Product Goals</h4>
                  </div>
                  <ul>
                    <li>Empower users to discover and explore more hotel options.</li>
                    <li>Create a simple, innovative, and emotionally-engaging mobile experience.</li>
                    <li>Iterate and optimize for click-out to OTA performances.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-06.svg" />
                    <h4>Key Metrics</h4>
                  </div>
                  <ul>
                    <li>Click-through rate</li>
                    <li>Search rate</li>
                    <li>Impressions and bounce rate</li>
                  </ul>
                </div>
              </div>
              <h4>Examples of the "How Might We" we pursued:</h4>
              <div className="projectCardRow">
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">1</span>
                  <h5>HMW...</h5>
                  <p>...give users more confidence to explore their hotel options?</p>
                </div>
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">2</span>
                  <h5>HMW...</h5>
                  <p>...enable users to compare their hotel options more easily?</p>
                </div>
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">3</span>
                  <h5>HMW...</h5>
                  <p>...give more clarity on hotel pricing and information?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Process</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectSectionGroups">
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-07.svg" />
                    <h4>Team</h4>
                  </div>
                  <ul>
                    <li>4 Product Designers</li>
                    <li>3 Product Managers</li>
                    <li>1 User Researcher</li>
                    <li>20+ Engineers</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-08.svg" />
                    <h4>Methods</h4>
                  </div>
                  <ul>
                    <li>Qualitative: User tests, reviews, feedbacks, NPS</li>
                    <li>Quantitative: A/B tests,</li>
                    <li>Explorations and Alignment: Design sprints, workshops, competitor analysis</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/trivago_7.jpg" alt="" />
              <p>I facilitated multiple design sprints whenever there was a big topic in the pipeline. By collaborating with product, design and engineers we created alignment and worked closely together to thoroughly explore the problems. The engineers in the team were especially appreciated for being involved in the process; a design direction was then picked up by me or another designer to iterate and later test.</p>
              <img className="imgShowcase" src="/images/trivago_8.jpg" alt="" />
              <p>Back when posting designs on a whiteboard in the office were a thing, I would post a lot of different iterations of the results page to gather feedback from not just the team but any passersbys in the office. It helps to not only be transparent with my process and possibilities, but it also helped me coordinate on making a plan to A/B test the different variants.</p>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Results</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectSectionGroups">
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-09.svg" />
                    <h4>My learnings</h4>
                  </div>
                  <ul>
                    <li>Being able to let go of your creations; some of my personal favourite designs did not make a significant improvement to the metrics when we A/B tested them.</li>
                    <li>Set clearer benchmarks and expectations when launching redesigns. As we had such a tight deadline to pull everything off, there was little consideration on the definition of success.</li>
                    <li>Qualitative data is just as important as quantitative. Data can tell us a lot of things, but doesn't explain why and how things turned out that way. This often ends in a lot of guessing games and assumptions.</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/trivago_3.png" alt="" />
              <img className="imgShowcase" src="/images/trivago_4.png" alt="" />
              <div className="quotecontainer">
                <h2>I advocated and pushed to explore more <u>motion in our UX/UI</u>. A topic I am very excited and passionate about.</h2>
              </div>
              <video width="100%" height="100%" data-object-fit="cover" preload="auto" autoPlay muted loop>
                <source src="/images/trivago_6.mp4" type="video/mp4" />
              </video>
              <p>Another topic that gets me excited. What I wanted to explore more for the redesign was to not just provide <strong>helpful microinteractions</strong> that help users understand their actions but also these <strong>moments of delight that enrich the experience</strong>. By being more playful with simple actions, we can not only connect with users more but also emotionally engage with them as well.</p>
              <video width="100%" height="100%" data-object-fit="cover" preload="auto" autoPlay muted loop>
                <source src="/images/trivago_5.mp4" type="video/mp4" />
              </video>
              <p>Our goal for the redesign wasn't only just improve usability for our users but also create <strong>meaningful touchpoints</strong> to understand our product and what they can do. Take the "dealform" for example, depending on where and how you scroll, it reacts to show how it works and assists if you need to change your dates or destination.</p>
              <p>Check out this video on our team talking about the whole journey here!</p>
              <div className="iframeContainer">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Flifeattrivago%2Fvideos%2F403177313845083%2F&show_text=0&"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><br /></div>
          </div>
          <div className="projectEnd">
            <h2>check out the app on your favourite OS</h2>
            <br />
            <a href="https://itunes.apple.com/us/app/id376888389?mt=8">
              <img alt="Download on the App Store" src="/images/ios_button.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.trivago&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img alt="Get it on Google Play" src="/images/google_play_button.svg" />
            </a>
          </div>

        </div>
        <div className="clearFix"></div>
      </div>

      <div className="pageCv">
        <div className="contentContainer">
          <h2>more of his featured works</h2>
          <div className="subWorkSection">
            <SubWorkBox
              href="./ecosia.html"
              workClass="workEcosia"
              appIconClass="appIconEcosia"
              title="Ecosia"
              subtitle="green tech, search engine"
              heading="making it easier to fight climate change"
              thumbnailSrc="/images/ecosia_top2.png"
            />
            <SubWorkBox
              href="./n26.html"
              workClass="workN26"
              appIconClass="appIconN26"
              title="N26"
              subtitle="fintech, digital banking"
              heading="engaging ways on how to save money"
              thumbnailSrc="/images/n26_top2.png"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordGate>
      <Trivago />
    </PasswordGate>
  </StrictMode>
);
