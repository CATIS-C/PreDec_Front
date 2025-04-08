export default function Header() {
    return (
      <header className="bg-orange-100 p-4 flex justify-between items-center shadow">
        <h1 className="text-orange-600 font-bold text-xl">PCA: PRE-DECLASSEMENT</h1>
        <div className="flex gap-4">
          <span>17/03/25</span>
          <span>09:26</span>
        </div>
      </header>
    );
  }