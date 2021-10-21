<template>
    <div class="site_header__header_four_wrap">
        <div class="topbar-one topbar_four">
            <div class="container">
                <div class="topbar-one__left">
                    <a href="mailto:needhelp@tripo.com"
                        ><span class="icon-message"></span
                        >needhelp@agrikol.com</a
                    >
                    <a href="tel:666-999-0000"
                        ><span class="icon-phone-call"></span>666 888 0000</a
                    >
                </div>
                <div class="topbar-one__middle">
                    <a href="/" class="main-nav__logo">
                        <img
                            src="/assets/images/resources/logo-2.png"
                            class="main-logo"
                            alt="Awesome Image"
                        />
                    </a>
                </div>
                <div class="topbar-one__right">
                    <div class="topbar-one__social home-four">
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <header class="main-nav__header-one main-nav__header-four">
            <nav
                :class="`header-navigation stricky ${
                    sticky ? 'stricked-menu stricky-fixed' : ''
                }`"
            >
                <div class="container clearfix">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="main-nav__left main_nav__left_four">
                        <a
                            href="#"
                            class="main-nav__search search-popup__toggler"
                            ><i class="icon-magnifying-glass"></i
                        ></a>
                        <a href="#" class="side-menu__toggler">
                            <i
                                @click="mobileToggle = !mobileToggle"
                                class="fa fa-bars"
                            ></i>
                        </a>
                    </div>
                    <div class="main-nav__main-navigation four">
                        <ul class="main-nav__navigation-box">
                            <li class="dropdown current">
                                <router-link to="/">Home</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/"
                                            >Home 01</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index2"
                                            >Home 02</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index3"
                                            >Home 03</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index4"
                                            >Home 04</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index5"
                                            >Home 05</router-link
                                        >
                                    </li>
                                    <li class="dropdown">
                                        <a href="#">Header Versions</a>
                                        <ul>
                                            <li>
                                                <router-link to="/index"
                                                    >Header 01</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/index2"
                                                    >Header 02</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/index3"
                                                    >Header 03</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/index4"
                                                    >Header 04</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/index5"
                                                    >Header 05</router-link
                                                >
                                            </li>
                                        </ul>
                                        <!-- /.sub-menu -->
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li class="dropdown">
                                <router-link to="/service"
                                    >Services</router-link
                                >
                                <ul>
                                    <li>
                                        <router-link to="/service"
                                            >Services</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/service-detail"
                                            >Services Detail</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li class="dropdown">
                                <router-link to="/projects"
                                    >Our Projects</router-link
                                >
                                <ul>
                                    <li>
                                        <router-link to="/projects"
                                            >Projects</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/projects_detail"
                                            >Projects Detail</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li class="dropdown">
                                <router-link to="#">Shop</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/product"
                                            >Products</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/product-detail"
                                            >Product Detail</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/cart"
                                            >Cart</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/checkout"
                                            >Checkout</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li class="dropdown">
                                <router-link to="#">Pages</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/about"
                                            >About</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/why_choose_us"
                                            >Why Choose Us</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/farmers"
                                            >Farmers</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/gallery"
                                            >Gallery</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li class="dropdown">
                                <router-link to="#">News</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/news"
                                            >News</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/news_detail"
                                            >News Details</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <div class="main-nav__right four">
                        <div class="icon_cart_box">
                            <router-link to="/cart">
                                <span class="icon-shopping-cart"></span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>

            <nav
                class="mobile-nav__container"
                :style="`display: ${mobileToggle ? 'block' : 'none'}`"
            >
                <!-- content is loading via js -->

                <ul class="main-nav__navigation-box">
                    <li class="dropdown current">
                        <div class="menu-holder">
                            Home<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li><router-link to="/">Home 01</router-link></li>
                            <li>
                                <router-link to="/index2">Home 02</router-link>
                            </li>
                            <li>
                                <router-link to="/index3">Home 03</router-link>
                            </li>
                            <li>
                                <router-link to="/index4">Home 04</router-link>
                            </li>
                            <li>
                                <router-link to="/index5">Home 05</router-link>
                            </li>
                            <li class="dropdown">
                                <div class="menu-holder">
                                    Header Versions<button class="dropdown-btn">
                                        <i class="fa fa-angle-right"></i>
                                    </button>
                                </div>
                                <ul>
                                    <li>
                                        <router-link to="/"
                                            >Header 01</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index2"
                                            >Header 02</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index3"
                                            >Header 03</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index4"
                                            >Header 04</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/index5"
                                            >Header 05</router-link
                                        >
                                    </li>
                                </ul>
                                <!-- /.sub-menu -->
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li class="dropdown">
                        <div class="menu-holder">
                            Services<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/service"
                                    >Services</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/service-detail"
                                    >Services Detail</router-link
                                >
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li class="dropdown">
                        <div class="menu-holder">
                            Our Projects<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/projects"
                                    >Projects</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/projects_detail"
                                    >Projects Detail</router-link
                                >
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li class="dropdown">
                        <div class="menu-holder">
                            Shop<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/product"
                                    >Products</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/product-detail"
                                    >Product Detail</router-link
                                >
                            </li>
                            <li><router-link to="/cart">Cart</router-link></li>
                            <li>
                                <router-link to="/checkout"
                                    >Checkout</router-link
                                >
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li class="dropdown">
                        <div class="menu-holder">
                            Pages<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/why_choose_us"
                                    >Why Choose Us</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/farmers">Farmers</router-link>
                            </li>
                            <li>
                                <router-link to="/gallery">Gallery</router-link>
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li class="dropdown">
                        <div class="menu-holder">
                            News<button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li><router-link to="/news">News</router-link></li>
                            <li>
                                <router-link to="/news_detail"
                                    >News Details</router-link
                                >
                            </li>
                        </ul>
                        <!-- /.sub-menu -->
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: "NavFour",
    data() {
        return {
            sticky: false,
            mobileToggle: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 70) {
                this.sticky = true;
            } else if (window.scrollY < 70) {
                this.sticky = false;
            }
        },
    },
};
</script>

<style scoped></style>
