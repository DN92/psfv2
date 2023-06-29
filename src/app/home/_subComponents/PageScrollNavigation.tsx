'use client';

type NavItemProps = {
  tag: string,
  idTo: string,
  ref: React.RefObject<any>,
};

type ComponenetProps = {
  refArray: Array<NavItemProps>,

};

export default function PageScrollNavigation({}:ComponentProps):JSX.Element {

  return (
    <div>
      page scroll navigation placeholder
    </div>
  );
}
