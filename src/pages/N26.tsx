import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PasswordGate } from '../components/PasswordGate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SubWorkBox } from '../components/SubWorkBox';
import { useBottomScrollConfetti } from '../hooks/useBottomScrollConfetti';
import { Device3DMockup } from '../components/Device3DMockup';

export const N26 = () => {
  useBottomScrollConfetti();

  return (
    <>
      <Header />

      <div className="projectTopContainer" id="main-content">
        <div className="projectTop projectTopNoBackground">
          <Device3DMockup />
          <div className="projectTopContent">
            <div className="appTitle">
              <div className="appIcon appIconN26"></div>
              <div className="appTitleDescription">
                <h4>N26</h4>
                <h5>fintech, digital banking</h5>
              </div>
            </div>
            <div className="projectTopContentList">
              <div className="projectTopContentListRow">
                <div className="projectTopContentListItem">
                  <h5>Years worked</h5>
                  <h4>2019-2021</h4>
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
                    <a href="https://apps.apple.com/de/app/n26-die-mobile-bank/id956857223?l=en&mt=8">Apple App Store</a>,{' '}
                    <br />
                    <a href="https://play.google.com/store/apps/details?id=de.number26.android&hl=en-de">Google Play Store</a>
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
                  <h4>What did I do?</h4>
                  <ul>
                    <li>Led efforts to improve a core feature for a mobile banking app.</li>
                    <li>Introduced new creation flows to improve discoverability and understanding how users can maximize the way how they can save their money.</li>
                    <li>Contributions to design system and leading product discovery workshops and user research.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <h4>Who is N26?</h4>
                  <ul>
                    <li>N26 is a European digital mobile bank based in Berlin, Germany.</li>
                    <li>They disrupted the traditional way of how Europeans banked and was widely known for making banking easy and convenient.</li>
                    <li>At the time there were around 1500+ employees with around 40+ designers.</li>
                  </ul>
                </div>
              </div>
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
                  <h4>What is Spaces?</h4>
                  <ul>
                    <li>Spaces is a feature that enables N26 users to organize their money into multiple sub-accounts for different purposes. (ex. saving up for a vacation, emergency fund, household expenses)</li>
                    <li>Users can set savings goals, automate deposits, and even share Spaces with others, and more.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <h4>User Problems Identified</h4>
                  <ul>
                    <li>Users do not fully comprehend all the utilities Spaces had to offer, especially in the beginning despite there existing an onboarding flow.</li>
                    <li>Advanced features were buried 3-4 steps deep in the user flow after creating a space; creating high interaction costs and low discoverability.</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/n26_3.png" alt="" />
              <p>After onboarding to Spaces for the first time, it takes at least 6 actions for a user to adopt a feature. As a result, only 3.5% of users discovered the capabilities of what Spaces has to offer.</p>
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
                  <h4>Top Product Goals</h4>
                  <ul>
                    <li>Increase engagement within the product when using Spaces.</li>
                    <li>Improve adoption of low usage but highly requested features.</li>
                    <li>Create a short and long term strategy on where existing and new features would live within Spaces</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <h4>Key Metrics</h4>
                  <ul>
                    <li>Feature adoption rate</li>
                    <li>Task completion rate</li>
                    <li>Impressions through funnel</li>
                  </ul>
                </div>
              </div>
              <h4>Examples of the "How Might We" we pursued:</h4>
              <div className="projectCardRow">
                <div className="projectCard">
                  <h5>HMW...</h5>
                  <p>...surface features early in the user journey?</p>
                </div>
                <div className="projectCard">
                  <h5>HMW...</h5>
                  <p>...help users understand how else they can use Spaces?</p>
                </div>
                <div className="projectCard">
                  <h5>HMW...</h5>
                  <p>...increase awareness of other feature offerings from Spaces?</p>
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
                  <h4>Team</h4>
                  <ul>
                    <li>2 Product Designers</li>
                    <li>1 Product Manager</li>
                    <li>1 User Researcher</li>
                    <li>5+ Engineers</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <h4>Methods</h4>
                  <ul>
                    <li>User Interviews/Tests</li>
                    <li>Card sorting</li>
                    <li>Design Sprint/Workshops</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/n26_1.jpg" alt="" />
              <p>In a fast-paced environment, the challenge is always priortization in the product roadmap, so design can play a role in challenging the status quo with the insights gathered. I led workshops with designers and stakeholders to define concepts and initiatives and to align on the strategic impact we sought.</p>
              <img className="imgShowcase" src="/images/n26_2.jpg" alt="" />
              <p>Along with previous research and data, I also conducted my own research using methods like user interviews, card sorting, usability tests to validate concepts, understand the overall user journey, and generate further insights. Here is an example of using card-sorting to better understand the importance behind each component and feature.</p>
              <img className="imgShowcase" src="/images/n26_7.jpg" alt="" />
              <p>These were some discarded explorations of the creation flows and the details page that I worked on. Feedback was gathered from stakeholders and team members to iterate the designs further while keeping everyone involved and aligned.</p>
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
                  <h4>My impact</h4>
                  <ul>
                    <li>Redesigned the details page which led to a <b>252% increase in adoption</b> of less used features.</li>
                    <li>Introducing a new creation flow <b>reduced the number of steps to discover features by 3</b>, which resulted in positive feedback from users in a better understanding of additional ways to use Spaces.</li>
                    <li>Crafted a <b>short and long term strategies</b> envisioning how Spaces will evolve to support more use cases and plan where new features will live.</li>
                  </ul>
                </div>
                <div className="projectDescription">
                  <h4>My learnings</h4>
                  <ul>
                    <li>Rather than explaining, showcasing different ways a feature can be used gives a higher chance of discoverability and comprehension.</li>
                    <li>Don't overcomplicate designs, and always be prepared to throw away ideas. Pairing with another designer and involving stakeholders helped iterate and improve the designs.</li>
                    <li>Highly requested features doesn't necessarily result in high adoption. It's always good to form hypothesis and assumptions.</li>
                  </ul>
                </div>
              </div>
              <img className="imgShowcase" src="/images/n26_8.png" alt="" />
              <p>An improved design of a Spaces page with clearer affordances and a structured information hierachy that surfaces features as soon as users open or creates a new Space.</p>
              <img className="imgShowcase" src="/images/n26_9.jpg" alt="" />
              <p>A new creation flow that showcases different use cases that guides users through tailored steps to optimize their Space for their needs.</p>
              <img className="imgShowcase" src="/images/n26_6.jpg" alt="" />
            </div>
          </div>

          <div className="projectTitleBorder">
            <div className="projectSectionLeft"><br /></div>
          </div>
          <div className="projectEnd">
            <p><h2>check out the app on your favourite OS</h2></p>
            <br />
            <a href="https://apps.apple.com/de/app/n26-die-mobile-bank/id956857223?l=en&mt=8">
              <img alt="Download on the App Store" src="/images/ios_button.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=de.number26.android&hl=en-de">
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
      <N26 />
    </PasswordGate>
  </StrictMode>
);
