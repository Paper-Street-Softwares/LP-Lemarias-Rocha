import { useTranslation, Trans } from "react-i18next";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Features6cards({ colorMode }) {
  const { t } = useTranslation();

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };

  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const featuredCards = [1, 2];
  const regularCards = [3, 4, 5, 6, 7, 8, 9];

  const renderTitle = (i) => {
    if (i === 6) {
      return (
        <Trans i18nKey={`features.card${i}.title`} components={{ i: <i /> }} />
      );
    }

    return t(`features.card${i}.title`);
  };

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        className={`text-center ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={
          <span
            className="tracking-[5px] text-[25px] leading-[-20px] text-primary uppercase"
            dangerouslySetInnerHTML={{ __html: t("features.title") }}
          />
        }
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col w-full gap-12 ">
          <div className="flex flex-col items-stretch justify-center w-full gap-8 desktop1:flex-row">
            {featuredCards.map((i) => (
              <MotionDivDownToUp
                key={i}
                className="flex justify-center w-full desktop1:w-[520px]"
              >
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className="w-full max-w-[520px]"
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>

          <div className="flex flex-wrap justify-center w-full gap-8">
            {regularCards.map((i) => (
              <MotionDivDownToUp
                key={i}
                className="flex justify-center w-full tablet1:w-[290px] desktop1:w-[250px]"
              >
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
