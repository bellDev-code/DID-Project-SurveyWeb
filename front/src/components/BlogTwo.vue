<template>
    <div class="blog_two">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="block-title">
                        <p>our team members</p>
                        <h3>meet the farmers</h3>
                        <div class="leaf">
                            <img
                                src="/assets/images/resources/leaf.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="all_posts_btn">
                        <a href="/news" class="thm-btn">View All Posts</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-6">
                    <div
                        class="blog_two_single wow fadeInLeft"
                        data-wow-delay="300ms"
                    >
                        <div class="blog_two_image">
                            <img
                                src="/assets/images/blog/blog-2-img-1.jpg"
                                alt=""
                            />
                            <div class="blog_two_date_box">
                                <p>30 Oct, 2019</p>
                            </div>
                        </div>
                        <div class="blog-two_content">
                            <ul class="list-unstyled blog-two_meta">
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-user-circle"></i>
                                        Admin</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-comments"></i> 2
                                        Comments</router-link
                                    >
                                </li>
                            </ul>
                            <h3>
                                <router-link
                                    to="/news_detail"
                                    class="blog_two_title"
                                    >Agriculture Miracle you<br />Don't Know
                                    About</router-link
                                >
                            </h3>
                            <div class="blog_two_text">
                                <p>
                                    There are lorem ipsum is simply free text
                                    available in the market to use it many
                                    variations of ipsum the majority suffered.
                                </p>
                            </div>
                            <div class="blog_two_read_more_btn">
                                <router-link to="/news_detail"
                                    ><i class="fa fa-angle-right"></i>Read
                                    More</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div
                        class="blog_two_single wow fadeInLeft"
                        data-wow-delay="600ms"
                    >
                        <div class="blog_two_image">
                            <img
                                src="/assets/images/blog/blog-2-img-2.jpg"
                                alt=""
                            />
                            <div class="blog_two_date_box">
                                <p>30 Oct, 2019</p>
                            </div>
                        </div>
                        <div class="blog-two_content">
                            <ul class="list-unstyled blog-two_meta">
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-user-circle"></i>
                                        Admin</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-comments"></i> 2
                                        Comments</router-link
                                    >
                                </li>
                            </ul>
                            <h3>
                                <router-link
                                    to="/news_detail"
                                    class="blog_two_title"
                                    >Winter Wheat Harvest Gathering<br />Momentum</router-link
                                >
                            </h3>
                            <div class="blog_two_text">
                                <p>
                                    There are lorem ipsum is simply free text
                                    available in the market to use it many
                                    variations of ipsum the majority suffered.
                                </p>
                            </div>
                            <div class="blog_two_read_more_btn">
                                <router-link to="/news_detail"
                                    ><i class="fa fa-angle-right"></i>Read
                                    More</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div
                        class="blog_two_right wow fadeInRight"
                        data-wow-delay="300ms"
                    >
                        <div class="blog_three_single">
                            <ul class="list-unstyled blog-three_meta">
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-user-circle"></i>
                                        Admin</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-comments"></i> 2
                                        Comments</router-link
                                    >
                                </li>
                            </ul>
                            <h3>
                                <router-link
                                    to="/news_detail"
                                    class="blog_three_title"
                                    >Amount of Freak Bread or Other
                                    Fruits</router-link
                                >
                            </h3>
                        </div>
                        <div class="blog_three_single">
                            <ul class="list-unstyled blog-three_meta">
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-user-circle"></i>
                                        Admin</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-comments"></i> 2
                                        Comments</router-link
                                    >
                                </li>
                            </ul>
                            <h3>
                                <router-link
                                    to="/news_detail"
                                    class="blog_three_title"
                                    >Learn 10 Best Tips for New
                                    Formers</router-link
                                >
                            </h3>
                        </div>
                        <div class="blog_three_single blgo_three_last">
                            <ul class="list-unstyled blog-three_meta">
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-user-circle"></i>
                                        Admin</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/news_detail"
                                        ><i class="far fa-comments"></i> 2
                                        Comments</router-link
                                    >
                                </li>
                            </ul>
                            <h3>
                                <router-link
                                    to="/news_detail"
                                    class="blog_three_title"
                                    >Winter Wheat Harvest Gathering
                                    Momentum</router-link
                                >
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogTwo",
};
</script>

<style scoped></style>
