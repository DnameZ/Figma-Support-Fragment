(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var {
    AutoLayout,
    Ellipse,
    Frame,
    Image,
    Rectangle,
    SVG,
    Fragment,
    Text,
    useSyncedState,
    useEffect
  } = widget;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(Fragment, null, /* @__PURE__ */ figma.widget.h(Ellipse, {
      name: "start",
      hidden: false,
      width: 20,
      height: 20,
      fill: "#0047AB"
    }));
  }
  widget.register(Widget);
})();
