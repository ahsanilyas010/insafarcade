import Nav                from '@/components/Nav'
import FloorStackNavigator from '@/components/FloorStackNavigator'
import Hero               from '@/components/sections/Hero'
import BuildingGlance     from '@/components/sections/BuildingGlance'
import LocationAdvantage  from '@/components/sections/LocationAdvantage'
import CommercialUnits    from '@/components/sections/CommercialUnits'
import Apartments         from '@/components/sections/Apartments'
import PaymentPlan        from '@/components/sections/PaymentPlan'
import WhyInvest          from '@/components/sections/WhyInvest'
import AboutDeveloper     from '@/components/sections/AboutDeveloper'
import EnquiryForm        from '@/components/sections/EnquiryForm'
import Footer             from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <FloorStackNavigator initialDraw />
      <main id="main-content">
        <Hero />
        <BuildingGlance />
        <LocationAdvantage />
        <CommercialUnits />
        <Apartments />
        <PaymentPlan />
        <WhyInvest />
        <AboutDeveloper />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  )
}
