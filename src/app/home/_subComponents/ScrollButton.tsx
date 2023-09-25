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
      className="button_style_grid_button1"
      type="button"
      onClick={ ():void => handleClick() }
    >
      { children }
    </button>
  );
}
