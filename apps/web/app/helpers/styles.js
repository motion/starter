import gloss from 'gloss'

const baseStyles = {
  style: styles => styles,
  flex: flex => ({ flex: flex === true ? 1 : flex }),
  absolute: ([top, right, bottom, left]) => ({
    top,
    left,
    bottom,
    right,
    position: 'absolute',
  }),
  // direct
  opacity: opacity => ({ opacity }),
  zIndex: zIndex => ({ zIndex }),
  color: color => ({ color }),
  top: top => ({ top }),
  right: right => ({ right }),
  fontSize: fontSize => ({ fontSize }),
  lineHeight: lineHeight => ({ lineHeight }),
  bottom: bottom => ({ bottom }),
  left: left => ({ left }),
  position: position => ({ position }),
  padding: padding => ({ padding }),
  paddingLeft: paddingLeft => ({ paddingLeft }),
  paddingRight: paddingRight => ({ paddingRight }),
  paddingTop: paddingTop => ({ paddingTop }),
  paddingBottom: paddingBottom => ({ paddingBottom }),
  margin: margin => ({ margin }),
  marginLeft: marginLeft => ({ marginLeft }),
  marginRight: marginRight => ({ marginRight }),
  marginTop: marginTop => ({ marginTop }),
  marginBottom: marginBottom => ({ marginBottom }),
  borderLeft: borderLeft => ({ borderLeft }),
  borderRight: borderRight => ({ borderRight }),
  borderTop: borderTop => ({ borderTop }),
  borderBottom: borderBottom => ({ borderBottom }),
  align: alignItems => ({ alignItems }),
  alignItems: alignItems => ({ alignItems }),
  minHeight: minHeight => ({ minHeight }),
  maxHeight: maxHeight => ({ maxHeight }),
  minWidth: minWidth => ({ minWidth }),
  maxWidth: maxWidth => ({ maxWidth }),
  width: width => ({ width }),
  height: height => ({ height }),
  background: background => ({ background }),
  hide: val => ({ display: val ? 'none' : 'auto' }),
  alignSelf: alignSelf => ({ alignSelf }),
  justify: justifyContent => ({ justifyContent }),
  row: {
    flexFlow: 'row',
  },
  col: {
    flexFlow: 'column',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  fullscreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  ellipse: {
    display: 'block',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}

export default gloss({ baseStyles })
