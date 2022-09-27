const { widget } = figma;
const 
{ 
  AutoLayout, 
  Ellipse, 
  Frame, 
  Image, 
  Rectangle, 
  SVG, 
  Fragment,
  Text,
  ///Hooks///
  useSyncedState,
  useEffect
} = widget;

function Widget() {


  return (
    <Fragment>
      <Ellipse
        name="start"
        hidden={false}
        width={20}
        height={20}
        fill="#0047AB"
        />
      </Fragment>
  );
}
widget.register(Widget);
