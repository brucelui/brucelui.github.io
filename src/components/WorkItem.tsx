import type { ReactNode } from 'react';
import { Button } from './Button';

export interface StatRow {
  value?: ReactNode;
  label: ReactNode;
}

interface WorkItemBaseProps {
  workClass: string;
  appIconClass: string;
  title: string;
  subtitle: string;
  heading: string;
  buttonText: string;
  buttonHref: string;
  buttonExternal?: boolean;
  stats?: StatRow[];
}

interface ImageWorkItemProps extends WorkItemBaseProps {
  variant: 'image';
  href: string;
  ariaLabel: string;
  thumbnailDefault: string;
  thumbnailHover: string;
  thumbnailAlt: string;
  deviceClass: string;
}

interface VideoWorkItemProps extends WorkItemBaseProps {
  variant: 'video';
  href: string;
  ariaLabel: string;
  videoSrc: string;
  videoDuration: string;
}

type WorkItemProps = ImageWorkItemProps | VideoWorkItemProps;

const StarRating = () => (
  <span className="starRating">
    &#9733;&#9733;&#9733;&#9733;<span className="halfStar">&#9733;</span>
  </span>
);

export { StarRating };

export const WorkItem = (props: WorkItemProps) => {
  const { workClass, appIconClass, title, subtitle, heading, buttonText, buttonHref, buttonExternal, stats } = props;

  return (
    <div className={`mainWorkBox ${workClass}`}>
      {props.variant === 'image' && (
        <a href={props.href} className="stretchedLink" aria-label={props.ariaLabel}></a>
      )}
      <div className="mainWorkTitle">
        <div className="appTitle">
          <div className={`appIcon ${appIconClass}`} aria-hidden="true"></div>
          <div className="appTitleDescription">
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
          </div>
        </div>
        {stats && (
          <div className="appStats">
            {stats.map((stat, i) => (
              <div key={i} className="appStat">
                {stat.value !== undefined && (
                  <span className="appStatLabel">{stat.value}</span>
                )}
                <span className="appStatLabel">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mainWorkThumbnailContent">
        {props.variant === 'video' && (
          <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="stretchedLink"
            aria-label={props.ariaLabel}
          ></a>
        )}
        <div className={`mainWorkThumbnail${props.variant === 'video' ? ' mainWorkVideo' : ''}`}>
          {props.variant === 'image' ? (
            <div className="deviceImageStack">
              <img
                className={`${props.deviceClass} deviceImgDefault`}
                src={props.thumbnailDefault}
                alt={props.thumbnailAlt}
              />
              <img
                className={`${props.deviceClass} deviceImgHover`}
                src={props.thumbnailHover}
                alt=""
                aria-hidden="true"
                loading="eager"
              />
            </div>
          ) : (
            <div className="cvVideo">
              <iframe
                width="100%"
                height="100%"
                src={props.videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
        <div className="mainWorkContent">
          {props.variant === 'video' ? (
            <div className="appTitleDescription">
              <h2>{heading}</h2>
              <h5>{props.videoDuration}</h5>
            </div>
          ) : (
            <h2>{heading}</h2>
          )}
          <div className="btnGotoCaseStudy">
            <Button
              href={buttonHref}
              withArrow
              target={buttonExternal ? '_blank' : undefined}
              rel={buttonExternal ? 'noopener noreferrer' : undefined}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
