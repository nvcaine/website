import { ReactElement } from 'react';
import { SvgIcon } from '@/app/ui/icons/svg-icon';
import { ICONS } from '@/app/consts/icons';

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <h1 className="text-xl mb-4 mt-4">Professional experience</h1>

            <div>
                <h2 className="mt-8 text-lg font-bold">Qualcomm Austria 2021 - 2024</h2>
                <p>
                    As a Full-stack Developer I was mainly responsible for
                    updating and automating cloud infrastructure and project
                    deployments for an online XR platform.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Node.js" src={ICONS.NODE} />
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon src={ICONS.REACT} alt="React" />
                    <SvgIcon src={ICONS.ANGULAR} alt="React" />
                    <SvgIcon src={ICONS.DOCKER} alt="Docker" />
                    <SvgIcon src={ICONS.JENKINS} alt="Jenkins" />
                    <SvgIcon src={ICONS.AWS} alt="AWS" />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">Wikitude 2019 - 2021</h2>
                <p>
                    As a Full-stack Developer my main responsibilities included
                    implementing new features for an online image-recognition
                    platform. This means both server and client, as well as unit
                    testing, automation and infrastructure. Additional tasks
                    include technical support for customers.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Node.js" src={ICONS.NODE} />
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon src={ICONS.DOCKER} alt="Docker" />
                    <SvgIcon src={ICONS.JENKINS} alt="Jenkins" />
                    <SvgIcon src={ICONS.AWS} alt="AWS" />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">123 Form Builder 2017 - 2019</h2>
                <p>
                    As Frontend Developer, I was responsible for implementing
                    new features and maintaining existing ones for an an online
                    form management platform. Tasks involved implementing
                    specifications, integrating third-party technologies and
                    handling customer feedback.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Typescript" src={ICONS.TYPESCRIPT} />
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">Veridium 2016 - 2017</h2>
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
                <h2 className="mt-8 text-lg font-bold">ISoftBet 2012 - 2016</h2>
                <p>
                    As Frontend Developer for an online gaming platform, my
                    tasks included feature implementation and testing.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Adobe Flex" src={ICONS.FLEX} />
                    <SvgIcon alt="Javascript" src={ICONS.JAVASCRIPT} />
                    <SvgIcon alt="Javascript" src={ICONS.JQUERY} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 5" src={ICONS.CSS} />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">TechTeam Akela 2010 - 2012</h2>
                <p>
                    Part of an outsourcing team, our main focus was developing
                    geo-enabled B2B solutions. My tasks included mainly frontend
                    feature development, and integrating third-party libraries.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Adobe Flex" src={ICONS.FLEX} />
                    <SvgIcon alt="Google Maps" src={ICONS.GOOGLE} />
                    <SvgIcon alt="Bing Maps" src={ICONS.BING} />
                    <SvgIcon alt="OpenStreetMap" src={ICONS.OSM} />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">Interact 2009 - 2010</h2>
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
                <h2 className="mt-8 text-lg font-bold">Studio 45 2008 - 2010</h2>
                <p>Developing websites and maintaining existing projects.</p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                    <SvgIcon alt="Wordpress" src={ICONS.WORDPRESS} />

                    <SvgIcon alt="jQuery" src={ICONS.JQUERY} />
                    <SvgIcon alt="HTML 5" src={ICONS.HTML} />
                    <SvgIcon alt="CSS 3" src={ICONS.CSS} />
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-lg font-bold">Inhive Media 2005 - 2008</h2>
                <p>
                    As Web Developer I was responsible for implementing new
                    projects. Tasks covered interface and server implementation,
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
        </div>
    );
}
