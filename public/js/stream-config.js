
  jQuery(document).ready(function($){


    if ($(window).width() > 600) {
        $('#social-stream').dcSocialStream({
            feeds: {
                twitter: {
                    id: 'mkillumination', // mk user name
                    url: 'twitter.php'
                },
                facebook: {
                    id: '405071696181722', // mk fb id
                    out: 'intro,thumb,title,text,user,share',
                    comments: 3,
                    image_width: 6, //3 = 600 4 = 480 5 = 320 6 = 180
                    url: 'facebook.php',
                    thumb:true,
                    icon: 'facebook.png'
                },
                youtube: {
                    id: 'UCN3zq2Vlc9-gWL4crRycMig', //mk youtube id
                    thumb: 'medium',
                    out: 'intro,thumb,title,user,share',
                    icon: 'youtube.png'
                },
                pinterest: {
                    id: 'jaffrey' // sample user name (change)
                },
                instagram: {
                    id: '#innsbruck', // id or hashtag...
                    out: 'intro,thumb,text,user,share,meta',
                    accessToken: '2126238359.f63b8d9.b0178b2eabd3475ca5376c5854cf0f73',
                    redirectUrl: 'http://proto.mk-illumination.dev/index.php?page=start',
                    clientId: 'f63b8d98629a4eb5a979c84ab26749dc', // client id hw dev
                    thumb: 'low_resolution',
                    comments: 3,
                    likes: 8,
                    icon: 'instagram.png'
                }
            },
            rotate: {
                delay: 0
            },
            control: false,
            filter: false,
            wall: true,
            center: true,
            cache: false,
            max: 'limit',
            limit: 2,
            iconPath: 'public/img/social-stream/dcsns-light/',
            imagePath: 'public/img/social-stream/dcsns-light/'
        });
    } else {
        $('#social-stream').dcSocialStream({
            feeds: {
                twitter: {
                    id: 'mkillumination', // mk user name
                    url: 'twitter.php'
                },
                facebook: {
                    id: '405071696181722', // mk fb id
                    out: 'intro,thumb,title,text,user,share',
                    comments: 1,
                    image_width: 6, //3 = 600 4 = 480 5 = 320 6 = 180
                    url: 'facebook.php',
                    thumb:true,
                    icon: 'facebook.png'
                },
                youtube: {
                    id: 'UCN3zq2Vlc9-gWL4crRycMig', //mk youtube id
                    thumb: 'medium',
                    out: 'intro,thumb,title,user,share',
                    icon: 'youtube.png'
                },
                pinterest: {
                    id: 'jaffrey' // sample user name (change)
                },
                instagram: {
                    id: '#innsbruck', // id or hashtag...
                    out: 'intro,thumb,text,user,share,meta',
                    accessToken: '2126238359.f63b8d9.b0178b2eabd3475ca5376c5854cf0f73',
                    redirectUrl: 'http://proto.mk-illumination.dev/index.php?page=start',
                    clientId: 'f63b8d98629a4eb5a979c84ab26749dc', // client id hw dev
                    thumb: 'low_resolution',
                    comments: 3,
                    likes: 8,
                    icon: 'instagram.png'
                }
            },
            rotate: {
                delay: 0
            },
            control: false,
            filter: false,
            wall: true,
            center: true,
            cache: false,
            max: 'limit',
            limit: 1,
            iconPath: 'public/img/social-stream/dcsns-light/',
            imagePath: 'public/img/social-stream/dcsns-light/'
        });

    }

                 
});


