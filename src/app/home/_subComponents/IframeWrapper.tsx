import styles from '../home.module.css';

const IframeWrapper: React.FC = () => {

  return (
    <div className={ styles.iframeWrapper }>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/H2NcnwP9-Eo"
        title="YouTube video player"
        frameBorder="0" // copied from youtube source, will not edit unless there is an issue.
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default IframeWrapper;
