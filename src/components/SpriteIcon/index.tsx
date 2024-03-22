type SpriteIconProps = {
  col: number;
  row: number;
  className?: any;
  [x: string]: any;
};

const spriteSheet = {
  width: 480,
  height: 512,
  cols: 15,
  rows: 16,
};

const SpriteIcon = ({ col, row, className, ...rest }: SpriteIconProps) => {
  return {
    width: spriteSheet.width / spriteSheet.cols + "px",
    height: spriteSheet.height / spriteSheet.rows + "px",
    objectFit: "none",
    objectPosition: `-${col * (spriteSheet.width / spriteSheet.cols)}px -${row * (spriteSheet.height / spriteSheet.rows)}px`,
  };

  return (
    <img
      src="/sprite-sheet.png"
      // @ts-ignore "fff CSS typings"
      style={spriteStyle}
      className={className}
      {...rest}
    />
  );
};

export default SpriteIcon;
