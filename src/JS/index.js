import '../styles/style.scss'
import './brand-slider-script'
import './technic-slider-script'
import './aside-container-active'
import './modal-feedback-active'
import './modal-call-active'
import './text-container'
import Swiper, { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const breakpoint = window.matchMedia('(min-width:767px)')

let brandSwiper
let techSwiper
let priceSwiper

const enableSwiper = function () {
  brandSwiper = new Swiper('.brand-slider', {
    direction: 'horizontal',
    //loop: true,
    modules: [Navigation, Pagination, Mousewheel, FreeMode],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      sensitivity: 0.5,
      evntsTarget: '.slider'
    },
    slidesPerView: 1.1,
    freeMode: true,
    width: 285
  })

  techSwiper = new Swiper('.technic-slider', {
    direction: 'horizontal',
    //loop: true,
    modules: [Navigation, Pagination, Mousewheel, FreeMode],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      sensitivity: 0.5,
      evntsTarget: '.slider'
    },
    slidesPerView: 1.1,
    freeMode: true,
    width: 285
  })

  priceSwiper = new Swiper('.price-slider', {
    direction: 'horizontal',
    //loop: true,
    modules: [Navigation, Pagination, Mousewheel, FreeMode],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      sensitivity: 0.5,
      evntsTarget: '.slider'
    },
    slidesPerView: 1.1,
    freeMode: true,
    width: 305
  })
}

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (brandSwiper && techSwiper && priceSwiper !== undefined) {
      brandSwiper.destroy(true, true),
        techSwiper.destroy(true, true),
        priceSwiper.destroy(true, true)
    }
    return
  } else if (breakpoint.matches === false) {
    return enableSwiper()
  }
}

breakpoint.addListener(breakpointChecker)
breakpointChecker()
