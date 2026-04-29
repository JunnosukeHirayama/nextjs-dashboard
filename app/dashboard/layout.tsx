import SideNav from '@/app/ui/dashboard/sidenav'; // 準備されているサイドメニューを読み込む

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* 左側にサイドメニューを表示 */}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* 右側に各ページ（children）を表示 */}
        {children}
      </div>
    </div>
  );
}