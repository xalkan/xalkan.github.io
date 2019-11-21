const styles = ({ palette, typography }) => ({
  container: {
    borderRadius: typography.pxToRem(4),
    display: 'inline-block',
  },
  avatar: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  }
});

export default styles;
