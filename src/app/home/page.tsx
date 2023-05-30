import styles from './home.module.css';

const Home: React.FC = () => {
  return (
    <main>
      <div className={styles.iframeWrapper}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H2NcnwP9-Eo"
          title="YouTube video player"
          frameBorder="0" // copied from youtube source, will not edit unless there is an issue.
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // this iFrame code was copied from youtube itself. Will ignore the TS error for now.
          // its possible that react uses allowFullScreen instead of the html standard. TODO: recheck this later.
          allowFullScreen
          autoPlay
        />
      </div>
    </main>
  );
};

export default Home;
