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
import { MetricCard } from '../components/MetricCard';

export const Ecosia = () => {
  useBottomScrollConfetti();
  useScrollFadeIn();

  return (
    <>
      <Header />

      <div className="projectTopContainer" id="main-content">
        <div className="projectTop projectTopNoBackground">
          <Device3DMockup screenImage="/images/ecosia_screen.mp4" fallbackImage="/images/ecosia_screen.jpg" videoStartDelay={600} restRX={-Math.PI / 2} restRZ={Math.PI / 2.8} />
          <div className="projectTopContent">
            <div className="appTitle">
              <div className="appIcon appIconEcosia"></div>
              <div className="appTitleDescription">
                <h4>Ecosia</h4>
                <h5>green tech, search engine, ai chat</h5>
              </div>
            </div>
            <div className="projectTopContentList">
              <div className="projectTopContentListRow">
                <div className="projectTopContentListItem">
                  <h5>Years worked</h5>
                  <h4>2021-Present</h4>
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
                  <h4><a href="https://www.ecosia.org">Website</a></h4>
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
                    <li>Led the rebrand across design and engineering, from visual direction to shipping it in the product.</li>
                    <li>Owned the core search experience and drove the strategic shift from traditional search to AI.</li>
                    <li>Ran user research, launched experiments, and explored new ways to grow and monetize.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-02.svg" />
                    <h4>My impact</h4>
                  </div>
                  <ul>
                    <li>Spearheaded several strategic core rebrand updates to the search experience, while leading cross-functional teams consisting of designers and engineers.</li>
                    <li>Ad optimizations drove a 15.8% revenue increase and 25% CTR improvement.</li>
                    <li>Layout improvements increased retention by 1.2% and ad CTR by 18%.</li>
                    <li>Used the AI search launch as a retention lever, driving measurable growth in feature adoption and positive user feedback.</li>
                  </ul>
                </div>
              </div>
              <ProjectAccordion title="Never heard of Ecosia?" appIconClass="appIconEcosia">
                <ul>
                  <li>B-Corp organization that ambitiously focuses on solving the climate crisis by using profits for tree planting projects and other climate action initiatives. Ecosia shares transparently their monthly reports detailing how much they spend for their cause.</li>
                  <li>Planted over 200,000,000 trees, with <b>20M+ active monthly users</b>.</li>
                  <li>At the time there were around 100+ employees with 9 designers.</li>
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
                    <h4>What is the product?</h4>
                  </div>
                  <ul>
                    <li>It's a search engine just like Google or Bing where users can search whatever they desire to get answers via web results, images, videos, news, and now AI generated answers.</li>
                    <li>We also have features that promote more sustainable alternatives like taking trains over flights, or showcasing which and how much certain companies have made a positive climate impact.</li>
                    <li>Users can also track how much they've used Ecosia to see how much environmental impact they have made using the search.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-04.svg" />
                    <h4>User Problems Identified</h4>
                  </div>
                  <ul>
                    <li><b>Low Trust in Search Quality:</b> Users found the results hard to read and perceived them as lower quality than competitors, even when the data was the same. Some rich content features were also reported to be missing or inaccurate.</li>
                    <li><b>Ad Frustration &amp; Confusion:</b> High ad density annoyed users, yet many didn't understand how the platform made money or how to manage their ad settings.</li>
                    <li><b>Divided opinions about AI-usage:</b> Long-time users were vocal against AI, while a large new audience felt the product was falling behind because it lacked AI features.</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/ecosia_1.png" alt="" />
              <h4>Navigating the shift from traditional search to AI</h4>
              <p>By 2024, LLMs (Large Language Models) had changed what users expected from search. For Ecosia, sticking with a traditional search model was no longer viable for growth or monetization. The challenge was balancing two opposing audiences: longtime users skeptical of AI's environmental cost, and a new audience who saw Ecosia as falling behind without it.</p>
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
                    <li><b>Elevate the AI Experience:</b> Surpass traditional search quality by closing key feature gaps and delivering a smarter, faster way for users to find answers.</li>
                    <li><b>Profitable Innovation:</b> Strategically monetize AI search and optimize ad placement to ensure the search platform remains financially sustainable.</li>
                    <li><b>Retention &amp; Differentiation:</b> Neutralize user churn by clearly communicating our Unique Selling Proposition (USP) to both loyal power users and new audiences.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-06.svg" />
                    <h4>Key Metrics</h4>
                  </div>
                  <ul>
                    <li>Click-Through Rate</li>
                    <li>Retention Rate</li>
                    <li>Task Completion Rate</li>
                    <li>User Feedback via "Binary Feedback"</li>
                  </ul>
                </div>
              </div>
              <h4>Examples of the "How Might We" we pursued:</h4>
              <div className="projectCardRow">
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">1</span>
                  <h5>HMW...</h5>
                  <p>...better transition users from what they are used to from using Google to Ecosia?</p>
                </div>
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">2</span>
                  <h5>HMW...</h5>
                  <p>...surface green alternatives without green-washing the users?</p>
                </div>
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">3</span>
                  <h5>HMW...</h5>
                  <p>...make our search experience unique to for USP?</p>
                </div>
                <div className="projectCard">
                  <span className="projectCardNumber" aria-hidden="true">4</span>
                  <h5>HMW...</h5>
                  <p>...improve the quality perception of our answers?</p>
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
                    <li>3 Product Designers</li>
                    <li>1 Product Manager</li>
                    <li>1 User Researcher</li>
                    <li>7+ Engineers</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-08.svg" />
                    <h4>Methods</h4>
                  </div>
                  <ul>
                    <li><b>Qualitative Insights:</b> User tests, surveys, feedbacks</li>
                    <li><b>Quantitative Insights:</b> A/B tests</li>
                    <li><b>Frameworks:</b> RICE scoring, Double Diamond, SWOT analysis</li>
                    <li><b>Discovery:</b> Competitive analysis, heuristics evaluation, AI to evaluate and synthesize</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/ecosia_2.png" alt="" />
              <h4>Search results, redesigned for performance</h4>
              <p>I led the design of Ecosia's core search results page across two product teams. Over three milestones, I paired a company-wide rebrand with data-driven optimization through continuous A/B testing. The result was a measurable uplift in KPIs, specifically CTR.</p>
              <img className="imgShowcase" src="/images/ecosia_3.png" alt="" />
              <h4>Rebrand as a product improvement, not just a visual update</h4>
              <p>When the rebrand landed, I made sure it worked as a product improvement, not just a visual refresh. I set the direction for how the new identity translated into the core experience and worked closely with engineering to make sure nothing got lost in handoff.</p>
              <img className="imgShowcase" src="/images/ecosia_4.png" alt="" />
              <h4>Discovery, research, and prioritization</h4>
              <p>Before any design work, I align with PMs and engineers on what problem we're actually solving. I run discovery workshops to map the space, pair that with competitive analysis to understand where the gaps are, and use RICE scoring to prioritize what will actually move the needle. All of this happens collaboratively, so everyone is bought in before a single design decision is made.</p>
              <img className="imgShowcase" src="/images/ecosia_5.png" alt="" />
              <h4>Research that feeds decisions, not just decks</h4>
              <p>I ran research end to end: writing test plans, running sessions on UserTesting.com, and turning findings into something actionable. The insights fed directly into prioritization decisions, not just slide decks.</p>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><h2>Results</h2></div>
          </div>
          <div className="projectSection">
            <div className="projectSectionLeft"></div>
            <div className="projectSectionRight">
              <div className="projectDescriptionHeader">
                <DescriptionIcon src="/images/icons/icon-06.svg" />
                <h4>Measurable success</h4>
              </div>
              <div className="metricCardRow">
                <MetricCard description="Layout optimization increased retention by" value={1.2} suffix="%" decimals={1} delay={0} />
                <MetricCard description="Ad optimization increased revenue by" value={15.8} suffix="%" decimals={1} delay={100} />
                <MetricCard description="Ad click through rate" value={25} suffix="%" decimals={0} delay={200} />
              </div>
              <div className="projectSectionGroups" style={{ marginTop: 'var(--space-lg)' }}>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-09.svg" />
                    <h4>My learnings</h4>
                  </div>
                  <ul>
                    <li><b>Data moves faster than design.</b> I learned that pairing design intuition with hard data and using AI to quickly synthesize that data is the most effective way to align stakeholders and justify design priorities.</li>
                    <li><b>Speaking the right language gets design taken seriously.</b> I learned to frame problems in metrics for PMs and in technical constraints for engineers. Same design decision, different angle, and it made buy-in on design work and debt significantly easier to get.</li>
                    <li><b>Copying competitors only gets you to neutral.</b> While closing feature gaps is necessary for survival, I realized that blindly chasing competitors is a race to the bottom. Sustainable growth comes from doubling down on our Unique Selling Proposition (USP).</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/ecosia_7.png" alt="" />
              <h4>Rich answers, right on the results page</h4>
              <p>I built a library of Rich Content features: dedicated result cards for weather, maps, travel, and calculators that surface quick answers directly on the search results page. I developed a unified visual language across all components to keep the experience cohesive and distinctly Ecosia. These components also opened up partnership opportunities with companies like AccuWeather and TripAdvisor, and helped promote greener travel options directly in search results.</p>
              <img className="imgShowcase" src="/images/ecosia_8.png" alt="" />
              <img className="imgShowcase" src="/images/ecosia_9.png" alt="" />
              <h4>From traditional search to AI-first answers</h4>
              <p>Working with two other product designers, I led the redesign of Ecosia's AI search experience as part of a company-wide rebrand. We rebuilt it into a modern, answer-first interface that met growing demand for AI while staying true to Ecosia's values. Despite early pushback from longtime users, the redesign drove a measurable uplift in traffic and usage, showing the new experience resonated with a broader audience.</p>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><br /></div>
          </div>
          <div className="projectEnd">
            <h2>try doing a search over at <a href="https://www.ecosia.org">Ecosia</a> to test it out!</h2>
          </div>

        </div>
        <div className="clearFix"></div>
      </div>

      <div className="pageCv">
        <div className="contentContainer">
          <h2>more of his featured works</h2>
          <div className="subWorkSection">
            <SubWorkBox
              href="./n26.html"
              workClass="workN26"
              appIconClass="appIconN26"
              title="N26"
              subtitle="green tech, search engine, ai chat"
              heading="engaging ways on how to save money"
              thumbnailSrc="/images/n26_top2.png"
            />
            <SubWorkBox
              href="./trivago.html"
              workClass="workTrivago"
              appIconClass="appIconTrivago"
              title="trivago"
              subtitle="travel, hotel search"
              heading="helping travelers find their ideal hotel"
              thumbnailSrc="/images/trivago_top.gif"
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
      <Ecosia />
    </PasswordGate>
  </StrictMode>
);
