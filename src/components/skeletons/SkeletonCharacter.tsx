/**
 * Returns a JSX element that renders a skeleton character with a picture placeholder and some text placeholders.
 *
 * @return {JSX.Element} The skeleton character JSX element.
 */
export const SkeletonCharacter = (): JSX.Element => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex flex-col sm:flex-row gap-3 bg-slate-200 rounded-2xl animate-pulse">
        <div className="relative w-full h-60 sm:w-48 sm:h-48 bg-slate-300 rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl shrink-0"></div>
        <div className="py-4 px-4 sm:px-0">
          <div className="w-40 h-9 bg-slate-100 mb-3"></div>
          <div className="w-56 h-4 bg-slate-100 mb-3"></div>
        </div>
      </div>
    </div>
  )
}
