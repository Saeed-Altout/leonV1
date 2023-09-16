const Footer = () => {
  const nowYear = new Date().getFullYear();
  return (
    <div className="text-center py-9 bg-[#2c4755] text-white">
      Copyright Ⓒ {nowYear}
      <span className="mx-1 text-primary">Saeed Altout </span>
      All rights reserved.
    </div>
  );
};

export default Footer;
