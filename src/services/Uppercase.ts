const Uppercase = (title: string) => {
  const a = title.split("-");
  const b = a.map((item) => item[0].toUpperCase() + item.slice(1));
  const c = b.join(" ");
  return c;
};

export default Uppercase;
