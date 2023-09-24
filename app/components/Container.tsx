const Container = ({
  as: Component = 'section',
  children,
}: {
  as: 'section' | 'div';
  children: React.ReactNode;
}) => {
  return <Component>Container</Component>;
};

export default Container;
