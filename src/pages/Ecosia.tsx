import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PasswordGate } from '../components/PasswordGate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SubWorkBox } from '../components/SubWorkBox';
import { useBottomScrollConfetti } from '../hooks/useBottomScrollConfetti';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { DescriptionIcon } from '../components/DescriptionIcon';
import { ProjectAccordion } from '../components/ProjectAccordion';

export const Ecosia = () => {
  useBottomScrollConfetti();
  useScrollFadeIn();

  return (
    <>
      <Header />

      <div className="projectTopContainer" id="main-content">
        <div className="projectTop">
          <div className="projectTopThumbnail topEcosia">
            <img className="topicon" src="/images/ecosia_top.png" alt="" />
          </div>
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
                    <li>Led cross functional teams to not only redesign and implement the rebrand update, but also directed brand strategy within the product.</li>
                    <li>Responsible for the core search experience and managing the strategy pivot from traditional search to <b>AI-driven search</b>.</li>
                    <li>Drove user research, launched experiments, identify mental models, and explored other revenue opportunities.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <div className="projectDescriptionHeader">
                    <DescriptionIcon src="/images/icons/icon-02.svg" />
                    <h4>My impact</h4>
                  </div>
                  <ul>
                    <li>Spearheaded several strategic core rebrand updates to the search experience, while leading cross-functional teams consisting of designers and engineers.</li>
                    <li>Optimizations to the ads delivered a 15.8% revenue increase and 25% ad CTR improvement.</li>
                    <li>Layout optimizations delivered an increase in 1.2% retention and 18% ad CTR.</li>
                    <li>Leveraged the AI search launch to maintain retention while driving a measurable uplift in AI-related feature adoption and positive feedback.</li>
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
              <p>By 2024, the rapid advancement of Large Language Models (LLMs) fundamentally shifted user expectations away from traditional search. For Ecosia, relying solely on legacy search models was no longer a sustainable long-term strategy for growth or monetization. The core challenge was a delicate balancing act: addressing the skepticism of our environmentally-conscious 'power users' who feared AI's carbon footprint, while simultaneously evolving the product to meet the demands of a new, AI-driven audience to prevent churn and remain market-relevant.</p>
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
                  <h5>HMW...</h5>
                  <p>...better transition users from what they are used to from using Google to Ecosia?</p>
                </div>
                <div className="projectCard">
                  <h5>HMW...</h5>
                  <p>...surface green alternatives without green-washing the users?</p>
                </div>
                <div className="projectCard">
                  <h5>HMW...</h5>
                  <p>...make our search experience unique to for USP?</p>
                </div>
                <div className="projectCard">
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
              <p>Collaborating across two product teams, I led the design evolution of the core search results page. My work centered on three pivotal milestones that integrated a major brand refresh with data-driven optimization. By balancing brand identity with iterative A/B testing, I delivered a more cohesive user experience while successfully driving an uplift in key performance indicators, specifically Click-Through Rate (CTR).</p>
              <img className="imgShowcase" src="/images/ecosia_3.png" alt="" />
              <p>During a company-wide rebrand, I spearheaded the translation of our new visual identity into the core product. Collaborating with both internal teams and external agencies, I developed a strategic roadmap to ensure the brand language felt native to the user experience rather than just an aesthetic layer. To drive alignment, I tailored my communication for different audiences: presenting strategic vision and UX impact to stakeholders and product teams, while delivering technical specifications and design system requirements to engineering teams.</p>
              <img className="imgShowcase" src="/images/ecosia_4.png" alt="" />
              <p>My process begins with rigorous alignment on requirements and business goals. For larger initiatives, I facilitate discovery workshops with PMs, engineers, and stakeholders to co-create solutions and manage expectations. During these sessions, I synthesize user research, competitive benchmarking, and BI data to anchor our brainstorming in evidence. To manage complex scopes, I leverage the RICE framework to prioritize high-impact experiments and break down large-scale initiatives into actionable phases.</p>
              <img className="imgShowcase" src="/images/ecosia_5.png" alt="" />
              <p>I maintained full-cycle ownership of user research; from defining initial hypotheses and test plans to executing moderated and unmoderated studies via UserTesting.com. I transformed raw findings into synthesized, actionable insights, presenting them to cross-functional stakeholders to drive data-informed design decisions and product strategy.</p>
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
                    <li><b>Data-Driven Influence:</b> I learned that pairing design intuition with hard data—and using AI to quickly synthesize that data—is the most effective way to align stakeholders and justify design priorities.</li>
                    <li><b>Cross-Functional Fluency:</b> To ensure project success, I integrated myself into engineering rituals and adapted my presentation style to speak the specific "languages" of developers, PMs, and fellow designers.</li>
                    <li><b>USP over Parity:</b> While closing feature gaps is necessary for survival, I realized that blindly chasing competitors is a race to the bottom; sustainable growth comes from doubling down on our Unique Selling Proposition (USP).</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/ecosia_7.png" alt="" />
              <p>I built a library of Rich Content features. These are smart, easy-to-read cards on the main search results page like weather, maps, and calculators that give users instant answers directly on the search page. By developing a unified visual language for these components, I ensured a cohesive Ecosia brand experience that remains distinct from competitors. This is also an opportunity for us to partner with other companies like Omio, to develop features that promote greener travel alternatives.</p>
              <img className="imgShowcase" src="/images/ecosia_8.png" alt="" />
              <img className="imgShowcase" src="/images/ecosia_9.png" alt="" />
              <p>Working with two other product designers, I led the redesign of our AI search experience as part of a major company-wide rebrand. We evolved the tool into a modern, answer-first interface to meet the demand for AI while providing a greener alternative to competitors. Despite some initial backlash from legacy users, the redesign led to a measurable uplift in traffic and usage, proving that the new experience successfully captured a larger, modern audience.</p>
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><br /></div>
          </div>
          <div className="projectEnd">
            <p><h2>try doing a search over at <a href="https://www.ecosia.org">Ecosia</a> to test it out!</h2></p>
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
