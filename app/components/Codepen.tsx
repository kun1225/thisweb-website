const Codepen = ({
  author = 'thisWeb1225',
  penId,
  showResult = true,
  editable = true,
  clickToLoad = false,
  defaultTab = 'html',
}: {
  author?: string;
  penId: string;
  showResult?: boolean;
  editable?: boolean;
  clickToLoad?: boolean;
  defaultTab?: 'html' | 'css' | 'js';
}) => {

  const preview = clickToLoad ? '/preveiw' : '';
  const editableContent = editable ? '&editable=true' : '';
  const showResultContent = showResult ? '%2Cresult' : '';

  return (
    <div className="codepen">
      <iframe height="500" style={{ width: "100%" }} src={`https://codepen.io/${author}/embed${preview}/${penId}?default-tab=${defaultTab}${showResultContent}${editableContent}`} loading="lazy" >
      </iframe>
    </div>

  )
}

export default Codepen