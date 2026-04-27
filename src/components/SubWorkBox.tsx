import { Button } from './Button';

interface SubWorkBoxProps {
  href: string;
  workClass: string;
  appIconClass: string;
  title: string;
  subtitle: string;
  heading: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
}

export const SubWorkBox = ({
  href,
  workClass,
  appIconClass,
  title,
  subtitle,
  heading,
  thumbnailSrc,
  thumbnailAlt = '',
}: SubWorkBoxProps) => (
  <div className={`subWorkBox ${workClass}`}>
    <a href={href} className="stretchedLink"></a>
    <div className="subWorkContent">
      <div className="appTitle">
        <div className={`appIcon ${appIconClass}`}></div>
        <div className="appTitleDescription">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
        </div>
      </div>
      <h2>{heading}</h2>
      <div className="btnGotoCaseStudy">
        <Button href={href} withArrow>
          see case study
        </Button>
      </div>
    </div>
    <div className="subWorkThumbnail">
      <img src={thumbnailSrc} alt={thumbnailAlt} />
    </div>
  </div>
);
