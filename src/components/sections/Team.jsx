import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";
import { useTranslation } from "react-i18next";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  const { t, i18n } = useTranslation();

  return (
    <SectionArea className="bg-bgSectionDark">
      <SectionHeader
        className="text-center"
        miniTitle={t("team.minitag")}
        sectionHeaderTitle={t("team.title")}
        sectionHeaderSubtitle={t("team.subtitle")}
        titleColorSet="text-white"
        subtitleColorSet="text-white"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-row tablet1:flex-wrap tablet1:justify-between">
            <TeamMember
              img={content.texts.team.members.member1.img.img}
              alt={content.texts.team.members.member1.img.alt}
              name={t("team.members.member1.name")}
              role={t("team.members.member1.role")}
            />
            <TeamMember
              img={content.texts.team.members.member2.img.img}
              alt={content.texts.team.members.member2.img.alt}
              name={t("team.members.member2.name")}
              role={t("team.members.member2.role")}
            />
            <TeamMember
              img={content.texts.team.members.member3.img.img}
              alt={content.texts.team.members.member3.img.alt}
              name={t("team.members.member3.name")}
              role={t("team.members.member3.role")}
            />
            <TeamMember
              img={content.texts.team.members.member4.img.img}
              alt={content.texts.team.members.member4.img.alt}
              name={t("team.members.member4.name")}
              role={t("team.members.member4.role")}
            />

            <TeamMember
              img={content.texts.team.members.member5.img.img}
              alt={content.texts.team.members.member5.img.alt}
              name={t("team.members.member5.name")}
              role={t("team.members.member5.role")}
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
