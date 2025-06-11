import SocialsCard from './BentoCards/SocialsCard'
import StacksCard from './BentoCards/StacksCard'
import FeaturedProjects from './FeaturedProjects'

const Bento = () => {
  return (
    <div className="mt-20 space-y-16">
      {/* Full width layout for larger screens */}
      <div className="hidden space-y-16 xs:block">
        <StacksCard isForSmall={false} />
        <FeaturedProjects />
        <SocialsCard />
      </div>

      {/* Full width layout for mobile */}
      <div className="space-y-12 xs:hidden">
        <StacksCard />
        <FeaturedProjects />
        <SocialsCard />
      </div>
    </div>
  )
}
export default Bento
