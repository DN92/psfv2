'use client';

type ComponenetProps = {
  elementId: string,
  children: React.ReactNode
};

export default function ScrollButton( { elementId, children }: ComponenetProps ):JSX.Element {
  function handleClick():void {
    const element = document.getElementById( elementId );
    if ( element ) {
      const { offsetTop } = element;
      window.scrollTo( {
        top: offsetTop,
        behavior: 'smooth',
      } );
    }
  }


  return (
    <button
      type="button"
      onClick={ ():void => handleClick() }
    >
      { children }
    </button>
  );
}
