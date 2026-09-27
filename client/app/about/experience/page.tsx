import { ReactElement } from 'react';
import { SvgIcon } from '@/app/ui/icons/svg-icon';
import { ICONS } from '@/app/consts/icons';
import MainHeading from '@/app/ui/main-heading';

export default function Page(): ReactElement {
    return (
        <>
            <MainHeading>Professional experience</MainHeading>

            <div>
                <p>
                    You can find here information about my work in various
                    companies.
                </p>

                <h2 className="pt-8 text-lg font-bold">
                    Senior Developer - Qualcomm Austria 2021 - 2024
                </h2>
                <p>
                    As Full-stack Developer I was mainly responsible for
                    updating and automating cloud infrastructure and project
                    deployments for an online eXtended Reality (XR) platform.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Node.js" src={ICONS.NODE} />
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon alt="React" src={ICONS.REACT} />
                    <SvgIcon alt="Angular" src={ICONS.ANGULAR} />
                    <SvgIcon alt="Docker" src={ICONS.DOCKER} />
                    <SvgIcon alt="Jenkins" src={ICONS.JENKINS} />
                    <SvgIcon alt="AWS" src={ICONS.AWS} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Full-Stack Developer - Wikitude 2019 - 2021
                </h2>
                <p>
                    As Full-stack Developer my main responsibilities included
                    implementing new features for an online image and object
                    recognition platform. This means both server and client, as
                    well as unit testing, automation and infrastructure.
                    Additional tasks include technical support for customers.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Node.js" src={ICONS.NODE} />
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon alt="Docker" src={ICONS.DOCKER} />
                    <SvgIcon alt="Jenkins" src={ICONS.JENKINS} />
                    <SvgIcon alt="AWS" src={ICONS.AWS} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Web Developer - 123 Form Builder 2017 - 2019
                </h2>
                <p>
                    As Web Developer, I was responsible for implementing new
                    features and maintaining existing ones for an an online form
                    management platform. Tasks involved implementing
                    specifications, integrating third-party technologies and
                    handling customer feedback.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Mobile Developer - Veridium 2016 - 2017
                </h2>
                <p>
                    As Mobile Developer for a biometrics authentication
                    platform, my tasks included feature implementation,
                    deployment and backend integration.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Java" src={ICONS.JAVA} />
                    <SvgIcon alt="Android" src={ICONS.ANDROID} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Software/Lead Developer - ISoftBet 2011 - 2016
                </h2>
                <p>
                    As Software Developer for an online gaming platform, my
                    tasks included feature implementation and testing. As Lead
                    Developer additional tasks included designing project
                    architecture, provide updates, assist team members.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Adobe Flex" src={ICONS.FLEX} />
                    <SvgIcon alt="Javascript" src={ICONS.JAVASCRIPT} />
                    <SvgIcon alt="JQuery" src={ICONS.JQUERY} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 5" src={ICONS.CSS} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Software Developer - TechTeam Akela 2010 - 2011
                </h2>
                <p>
                    Part of an outsourcing team as Software Developer, my work
                    was centered on developing geo-enabled B2B solutions. My
                    tasks included mainly frontend feature development, and
                    integrating third-party libraries.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Adobe Flex" src={ICONS.FLEX} />
                    <SvgIcon alt="Google Maps" src={ICONS.GOOGLE} />
                    <SvgIcon alt="Bing Maps" src={ICONS.BING} />
                    <SvgIcon alt="OpenStreetMap" src={ICONS.OSM} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Web Developer - Interact 2009 - 2010
                </h2>
                <p>
                    As Web Developer my main focus was implementing websites and
                    online platforms. Tasks include both frontend and backend.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                    <SvgIcon alt="jQuery" src={ICONS.JQUERY} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 3" src={ICONS.CSS} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Web Developer - Studio 45 2008 - 2010
                </h2>
                <p>
                    As Web Developer my work consisted of implementing websites
                    according to design specifications and maintaining existing
                    projects.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                    <SvgIcon alt="Wordpress" src={ICONS.WORDPRESS} />
                    <SvgIcon alt="jQuery" src={ICONS.JQUERY} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 3" src={ICONS.CSS} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Web Developer - InHive Media 2005 - 2008
                </h2>
                <p>
                    As Web Developer I was responsible for implementing new
                    projects, websites with varying complexity and Wordpress
                    themes. Tasks covered interface and server implementation,
                    testing and maintenance.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                    <SvgIcon alt="Wordpress" src={ICONS.WORDPRESS} />
                    <SvgIcon alt="jQuery" src={ICONS.JQUERY} />
                    <SvgIcon alt="Javascript" src={ICONS.JAVASCRIPT} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 3" src={ICONS.CSS} />
                </div>
            </div>
        </>
    );
}
