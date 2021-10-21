<template>
    <div class="site_header__header_two_wrap">
        <div class="topbar-two">
            <div class="container">
                <div class="topbar_two_content clearfix">
                    <div class="logo-box-two float-left">
                        <a href="/index2" class="main-nag__logo">
                            <img
                                src="/assets/images/resources/logo.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="header_address_two float-left">
                        <ul class="clearfix list-unstyled">
                            <li>
                                <div class="address_icon">
                                    <span class="icon-placeholder"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Address</h6>
                                    <p>66 Broklyn St. New York</p>
                                </div>
                            </li>
                            <li>
                                <div class="address_icon">
                                    <span class="icon-phone-call"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Phone</h6>
                                    <p>
                                        <a href="tel:123456789"
                                            >66 Broklyn St. New York</a
                                        >
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="address_icon">
                                    <span class="icon-clock"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Timings</h6>
                                    <p>Mon - Fri 09:00am - 07:00pm</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="header_btn_two float-right">
                        <a class="thm-btn" href="#">Get a Free Quote</a>
                    </div>
                </div>
            </div>
        </div>

        <header class="main-nav__header_two clearfix">
            <nav
                :class="`header-navigation stricky clearfix ${
                    sticky ? 'stricked-menu stricky-fixed' : ''
                }`"
            >
                <div class="container">
                    <div class="main-nav__header_two_content">
                        <div class="mobile_menu_icon_two">
                            <a href="#" class="side-menu__toggler">
                                <i
                                    @click="mobileToggle = !mobileToggle"
                                    class="fa fa-bars"
                                ></i>
                            </a>
                        </div>
                        <div class="main-nav__main-navigation two float-left">
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
                                    <router-link to="/contact"
                                        >Contact</router-link
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="main_nav_right_two float-right">
                            <div class="icon_search_box">
                                <a
                                    href="#"
                                    class="
                                        main-nav__search
                                        search-popup__toggler
                                    "
                                    ><i class="icon-magnifying-glass"></i
                                ></a>
                            </div>
                            <div class="icon_cart_box">
                                <router-link to="/cart">
                                    <span class="icon-shopping-cart"></span>
                                </router-link>
                            </div>
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
    name: "NavTwo",
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
