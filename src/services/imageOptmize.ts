const imageOptimize = (url: string) => {
  if (url !== null) {
    const index = url.indexOf("media/") + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  }
  return "";
};
export default imageOptimize;
