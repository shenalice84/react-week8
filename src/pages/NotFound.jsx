import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <>
      <h1>此頁不存在</h1>
      <Link to="/">回到首頁</Link>
      {/* a標籤會重新刷新頁面，會重新向伺服器請求index檔 */}
    </>
  )
}