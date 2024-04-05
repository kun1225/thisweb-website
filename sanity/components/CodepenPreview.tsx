const CodePenPreview = ({value}: {value: any}) => {
  const { url, themeId = "dark" } = value; // <= add themeId here, default it to "dark"
  if (!url) {
    return (<div>Add a CodePen URL</div>)
  }
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'thisWeb', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=${themeId}&default-tab=result`; // <= add themeId here
  return (
    <iframe
      height="370"
      style={{ width: '100%' }}
      scrolling="no"
      title="CodePen Embed"
      src={embedUrl}
      frameBorder="no"
      allowFullScreen
    />
  );
}

export default CodePenPreview
