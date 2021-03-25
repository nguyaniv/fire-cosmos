import bresser from "./171b.jpg";
import oberwatch from "./ow1570.jpg";
import Nikon from "./sb2570.jpg";
import orion from "./orion2080.jpg";
import Bresser150 from "./Bresser150.jpg";
import BresserDob200 from "./Bresser-Dob-200mm.jpg";
import Bresser8 from "./Bresser8.jpg";
import SkyWatcher200 from "./SkyWatcher200.jpg";
import bresserSirius from "./bresser-sirius.jpg";
import skywatch130 from "./skywatch130.jpg";
import celestron114 from './celestron114.jpg'
import OrionStarBlast from './OrionStarBlast4.5.jpg'
import tent1 from './tent1.jpg'
import survivalShovel from './survival-Shovel.jpg'
import CampingCookingGear from './Camping-Cooking-Gear.jpg'

export const StoreProducts = [
  {
    _id: 1,
    name: "171 BRESSER Classic",
    category: "Astronomy",
    type: "Binocular",
    price: "100",
    description: `High grade compact pocket binoculars
    Magnification: 10x / lens diameter: 25mm
    Roof optics / Fully Coated / Aperture: 6.25
    Dimensions: 112 x 108 x 33 mm / Weight: 203 grams
    `,
    url: bresser,
  },

  {
    _id: 2,
    name: "Celestron 71008 SkyMaster 25×70",
    category: "Astronomy",
    description: `25x magnification Porto prism binocular
    Large 70 mm objective lens offers maximum image brightness in low-light and long-range conditions
    Ultra sharp focus across the field of view. Linear Field of View (@1000 yds.) / @1000 m): 141 feet (47 m)Exit Pupil: 0. 11 inches. Eye Relief: 0. 51 inches
    Multi-coated optics for sharp, clear views
    Suitable for terrestrial or astronomical viewing. Ipd max: 2. 83 inch
    Protective rubber covering for ultra-firm grip
    Long eye relief ideal for eyeglass wearers
    `,
    type: "Binocular",
    price: "200",
    url: oberwatch,
  },
  {
    _id: 3,
    name: "Nikon 7239 Action 7×50 EX Extreme All-Terain",
    category: "Astronomy",
    description: `Bright, multicoated lenses and BaK4 high index prisms: Deliver bright, high-resolution images.

    Long eye relief: For a clear and comfortable view, especially for people who wear eyeglasses.
    
    Smooth central focus knob: Fast range of focus for quick viewing. No bird goes unseen.
    
    Unique click-stop, twist-out eyecup design: Delivers both long eye relief and variable eye relief to customize these binoculars to your eyes and accommodate glasses.
    
    Ergonomic body design: Comfortable for extended viewing.
    
    Durable and protective, rubber-armored coating: Provides a sure, non-slip grip, wet or dry.
    
    Waterproof/fogproof: Nitrogen filled and O-ring sealed.
    
    Manufactured responsibly with lead and arsenic-free Eco-Glass™
    
    `,
    type: "Binocular",
    price: 250,
    url: Nikon,
  },
  {
    _id: 4,
    name: "Orion 51464 20×80",
    category: "Astronomy",
    description: `Big 20-power astronomy binoculars with huge 80mm aperture objective lenses provides bright, high-contrast views of the night sky with sharp resolution
    Giant 80mm lenses gobble up light for spectacular views of the Moon, planets, star clusters, and more!
    Fully multi-coated optics and BAK 4 porro prisms ensure maximum light throughput for bright, clear views
    Long 17mm eye relief for comfortable views - even while wearing eyeglasses!
    Includes built-in tripod adapter, soft carry case, and dust caps. Tripod use recommended
    `,
    type: "Binocular",
    price: 600,
    url: orion,
  },

  {
    _id: 5,
    name: "Bresser Pollux 150/750 EQ3",
    category: "Astronomy",
    description: `Telescope for night and solar observation for beginners
    Optical system: parabolic Newton Reflector
    Aperture Solar-filter and Smartphone camera adapter included
    Objective lens diameter: 150 mm; Focal length: 750 mm
    Mounting: Equatorial EQ-3
    Included: Telescope with tripod, Solar-filter, Smartphone camera adapter, eyepieces, barlow lense, LED finder, astronomy software, manual
    Included: Telescope with tripod, Solar-filter, Smartphone camera adapter, eyepieces, barlow lense, LED finder, astronomy software, manual
    `,
    type: "Telescope",
    price: 750,
    url: Bresser150,
  },
  {
    _id: 6,
    name: "Bresser Dob 200mm",
    category: "Astronomy",
    description: `Newton optics with parabolic primary mirror made from H-PZ33 low expansion glass material
    2.5'' HEX focuser with rack & pinion drive
    Large altitude wheels provide smooth and precise movement even at high magnifications
    6x30 finder scope and SPL 25mm eyepiece included
    6-point flotation system mirror cell for the for primary maximizes optical performance
    Tube rings facilitate the use of the optics on equatorial mounts
    The parts or the rocker-box are connected with metal furniture fasteners for easy assembly and dissasembly
    Diffraction limited optics: Strehl > 0,8
    aperture solar-filter included
    telescope for night and solar observation`,
    type: "Telescope",
    price: 1250,
    url: BresserDob200,
  },
  {
    _id: 7,
    name: "Bresser 8-Newtonian on SK EQ5",
    category: "Astronomy",
    description: `Fotonewtonian f/3.9 with 2,5" Hexafoc
    Aperture: 203mm; Focal Length: 800mm f/3.9
    Excellent 2,5" Hexafoc Focuser with possibility to upgrade to a 10:1 reduction
    Large 85mm secondary mirror
    Elaborate 6 point flotation system for mirror support
    Large knobs for primary and secondary mirror adjustment
    Equat. EXOS-2 mount with a max. load of 13 kg
    Solid stainless steel field tripod for maximum rigidity
    Precision mount with ball bearings in all axis and adjustable polar finder scope with optional illumination
    GoTo motors + Startracker optional (part no. 4951750)
    `,
    type: "Telescope",
    price: 1450,
    url: Bresser8,
  },
  {
    _id: 8,
    name: "SkyWatcher 200mm 8-DOB Collapsable GOTO",
    category: "Astronomy",
    description: `The SkyWatcher 8” Collapsible Dobsonian telescope is built for the serious amateur astronomer to have access to a powerful yet portable platform at an affordable price point.
    The telescope’s large aperture - a full eight inches - it is known as a “light bucket” style telescope. Its job is to collect as much light as possible so you can see more detail and fainter objects than a smaller scope at the same price can show you.
    `,
    type: "Telescope",
    price: 1850,
    url: SkyWatcher200,
  },
  {
    _id: 9,
    name: "bresser-sirius 75/900 mm",
    category: "Astronomy",
    description: `A classically designed refractor telescope with precise coated optics. Perfect for the beginner, a wide array of accessories are included
    With Smartphone Camera Adapter to take pictures of the moon with your smartphone
    Telescope for night and solar observation
    Focal length: 900mm / Aperture: 70mm
    Mount: Altazimuth
    Scope of delivery: Refractor, Altazimuth mount, 
    Aluminium tripod with accessory tray, Solar-filter, 2 Eyepieces, 3x Barlow lens, Diagonal mirror, 
    Smartphone camera adapter`,
    type: "Telescope",
    price: 650,
    url: bresserSirius,
  },

  {
    _id: 10,
    name: "Telescope skywatch130 Refractor Scope",
    category: "Astronomy",
    description: `Perfect Beginners Telescope: The SOLOMARK 80EQ is an easy-to-use and powerful telescope. The telescope to give the first-time telescope user the perfect combination of quality, value, features, and power.
    Manual German Equatorial Mount: Navigate the sky with our refractor telescope. It features a German Equatorial mount with a slow-motion altitude rod for smooth and accurate pointing. Adjust rod to desired position, then easily secure by tightening cross knob. This study mount features large slow-motion control knobs so you can track objects smoothly and seamlessly as they drift across the nighttime sky.
    `,
    url: skywatch130,
    type: 'Telescope',
    price: 1200,
  },

  {
    _id: 11,
    name: 'Celestron - 114LCM',
    category: 'Astronomy',
    description: `Computerized automatic telescope: The Celestron 114LCM Computerized Newtonian Telescope with all glass optics can automatically locate 4,000 celestial objects with its GoTo mount and hand control, using star locating technology found on more advanced telescopes.
    Take the sky tour: If you’re not sure of what to observe, the Sky Tour button will do the work for you. Simply press the button and your computerized telescope will generate a list of the best objects currently available to view in the sky.
    Everything you need: The Celestron LCM telescope comes with everything you need for stargazing, including an adjustable aluminum tripod, 2 high-quality eyepieces (25mm & 9mm), & a StarPointer red dot finderscope. Download the SkyPortal App for added enjoyment.Apparent Field of View:1.6°
    `,
    url: celestron114,
    type: 'Telescope',
    price: 1100,
  },
  {
    _id: 12,
    name: 'Orion StarBlast II 4.5',
    category: 'Astronomy',
    description: `This wide-field reflector telescope has enough aperture for great views of the Moon, planets, and many bright deep-sky objects
    A fantastic general-purpose astronomical telescope - great for the beginner to test the waters with mirror optics large enough to keep you and your family busy viewing for years to come
    Included Shorty 2x Barlow doubles the magnification of both included eyepieces
    Use the included Star Target Planisphere and MoonMap 260 to plan stargazing sessions
    `,
    url: OrionStarBlast,
    type: 'Telescope',
    price: 950,
  },
  {
    _id: 13,
    name: 'CORE 9 Person Instant Cabin',
    category: "Camping",
    url: tent1,
    type: 'Camping',
    description: `Imported
    Zipper closure
    Hand Wash
    Instant 60 Second Setup; Sleeps 9 people; Fits two queen air mattresses; Center Height:78
    CORE H20 Block Technology and adjustable ground vent
    Features room divider and wall storage pockets keep items neat and off the tent floor
    Electrical cord access port (port is fully closable when not in use)
    Includes rain fly, tent stakes, and carry bag
    `,
    price: 400,
  },
  {

    _id: 14,
    name: "EST Gear Survival Shovel",
    category: "Camping",
    type: 'Camping',

    url: survivalShovel,
    description: `18 SURVIVAL TOOLS IN ONE - The EST Gear camping shovel includes a saw, camping axe, knife, hunting spear, bottle opener, fire starter, hoe, wire-cutter, trowel, survival shovel, hexagon wrenches, nail puller, ice pick, ruler, hook, waterproof storage that can store waterproof matches and other camping supplies, screw driver, whistle compass and rope cutter.
COMPACT SIZE - Perfect survival gear for travel. This foldable shovel is full-sized, comes with a survival axe, and can fit easily inside the durable, packable ripstop nylon pouch. Perfect for keeping in your car or bug out bag in case of emergency.
LIGHTWEIGHT & VERSATILE - The EST shovel is a great addition to your camping gear and perfect for prepping and survival. The tactical shovel has a hardened-steel, reinforced shovel head and a military-grade aluminum handle.
`,
    price: 120,
  },
  {

    _id: 15,
    name: "Camping Cooking Gear",
    category: "Camping",
    type: 'Camping',
    url: CampingCookingGear,
    description: `Looking for some cool camping cooking gear to add to your packing list? Complete with 4 full sets of cutlery utensils, the GSI Outdoors Destination Kitchen might be perfect for you. This compact 24-piece set also includes a variety of folding tools, a cutting board, utility knife, and waterproof spice shakers.
`,
    price: 180,
  }
];