export const SkeletonCharacterDetail = (): JSX.Element => {
  return (
    <>
      <div className="w-56 h-10 mb-4 mt-5 bg-gray-300 animate-pulse"></div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="w-40 h-5 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="w-40 h-5 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="w-40 h-5 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
          <div className="w-32 h-4 bg-gray-300 animate-pulse mb-3"></div>
        </div>
      </div>
    </>
  )
}
