

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-xs flex flex-col gap-8 md:flex-row justify-between mt-32 p-16">
      <div>
        <h4 className="text-secondary text-sm">頁面導覽</h4>
        <ul className="mt-2 flex flex-col gap-2">
          <li>主頁</li>
          <li>文章</li>
        </ul>
      </div>

      <div>
        <h4 className="text-secondary text-sm">聯絡資訊</h4>
          <ul className="mt-2 flex flex-col gap-2">
            <li>Email: thisweb.tech@gmail.com</li>
            <li>Instagram: this.web</li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer