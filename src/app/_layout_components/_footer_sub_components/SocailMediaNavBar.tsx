import SocialMediaIconWrapper from './SocialMediaIconWrapper';
import socialMediaInfo from './socialMediaConfig';

const SocialMediaNavBar: React.FC = () => {

  // CHANGE ICON SRC and other props to be passed one object and then to and innerImage tag
  //  OR MAYBE PUT THE IMAGE TAG AS A CHILD RIGHT HERE WHILE MAPPING?!?

  return (
    <nav className="social-media-navbar">
      { socialMediaInfo.map( ( platform: SocialMediaDatapoint ) => (
        <SocialMediaIconWrapper
          key={ platform.site }
          iconSrc={ platform.iconSrc }
          href={ platform.href }
          site={ platform.site }
        />
      ) ) }
    </nav>
  );
};

export default SocialMediaNavBar;
