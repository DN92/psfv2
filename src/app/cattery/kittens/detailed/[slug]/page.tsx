type Params = {
  slug: string | number
};

const Detailed: ({ slug }: Params) => Promise<JSX.Element> = async ({ slug }: Params) => {
  const fetchUrl: string = `someUrl/${slug}`;
  const response: Response = await fetch(fetchUrl, { next: { revalidate: 60 * 60 * 12 /* 12hours */ } });

  return (
    <div>
      PH PH PH
    </div>
  );
};

export default Detailed;
