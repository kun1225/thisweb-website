export function Codepen(source: any) {
  const url = source.value.url;
  const themeId = source.value.themeId; // 'dark' | 'light'

  const splitURL = url.split('/');
  // [ 'https:', '', 'codepen.io', 'thisWeb', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=${themeId}&default-tab=result`;

  return (
    <div>
      <iframe
        height="500"
        style={{ width: '100%' }}
        scrolling="no"
        title="CodePen Embed"
        src={embedUrl}
        frameBorder="no"
        allowFullScreen
      />
    </div>
  );
}
